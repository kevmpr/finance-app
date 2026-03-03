import * as XLSX from 'xlsx';
import { ExcelRowSchema, type ExcelRow } from './schemas';

const COLUMN_ORDER = ['Fecha', 'Tipo', 'Monto', 'Categoria', 'Entidad', 'Cuenta', 'Metodo', 'Notas'];

/**
 * Export transactions to an Excel (.xlsx) file blob.
 */
export function exportToExcel(transactions: any[]): Blob {
    const rows = transactions.map((t) => ({
        Fecha: t.date,
        Tipo: t.type === 'income' ? 'Ingreso' : 'Egreso',
        Monto: t.amount,
        Categoria: t.categories?.name || t.category_name || '',
        Entidad: t.entity || '',
        Cuenta: t.account || '',
        Metodo: t.method || '',
        Notas: t.notes || '',
    }));

    const ws = XLSX.utils.json_to_sheet(rows, { header: COLUMN_ORDER });

    // Set column widths
    ws['!cols'] = [
        { wch: 12 }, // Fecha
        { wch: 10 }, // Tipo
        { wch: 14 }, // Monto
        { wch: 18 }, // Categoria
        { wch: 18 }, // Entidad
        { wch: 14 }, // Cuenta
        { wch: 14 }, // Metodo
        { wch: 30 }, // Notas
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Transacciones');

    const buf = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
    return new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}

/**
 * Import transactions from an Excel file.
 * Returns validated rows and any errors.
 * Processes async in chunks to avoid blocking the main thread.
 */
export async function importFromExcel(file: File): Promise<{
    validRows: ExcelRow[];
    errors: { row: number; messages: string[] }[];
}> {
    const buffer = await file.arrayBuffer();
    const wb = XLSX.read(buffer, { type: 'array' });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rawRows: any[] = XLSX.utils.sheet_to_json(ws);

    const validRows: ExcelRow[] = [];
    const errors: { row: number; messages: string[] }[] = [];

    // Process in chunks of 100 to avoid blocking
    const CHUNK_SIZE = 100;

    for (let i = 0; i < rawRows.length; i += CHUNK_SIZE) {
        const chunk = rawRows.slice(i, i + CHUNK_SIZE);

        // Yield to main thread between chunks
        if (i > 0) {
            await new Promise((resolve) => setTimeout(resolve, 0));
        }

        chunk.forEach((raw, j) => {
            const rowNum = i + j + 2; // +2 for header and 1-indexing
            const parsed = ExcelRowSchema.safeParse({
                Fecha: String(raw.Fecha || raw.fecha || ''),
                Tipo: String(raw.Tipo || raw.tipo || ''),
                Monto: Number(raw.Monto || raw.monto || 0),
                Categoria: String(raw.Categoria || raw.categoria || raw.Categoría || ''),
                Entidad: String(raw.Entidad || raw.entidad || ''),
                Cuenta: String(raw.Cuenta || raw.cuenta || ''),
                Metodo: String(raw.Metodo || raw.metodo || raw.Método || 'cash'),
                Notas: String(raw.Notas || raw.notas || ''),
            });

            if (parsed.success) {
                validRows.push(parsed.data);
            } else {
                errors.push({
                    row: rowNum,
                    messages: parsed.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`),
                });
            }
        });
    }

    return { validRows, errors };
}
