import { z } from 'zod';

/**
 * Zod schemas for runtime validation.
 * All form inputs and Excel rows MUST validate through these before touching Supabase.
 */

// ─── Enums ──────────────────────────────────────────────────────

export const TransactionType = z.enum(['income', 'expense']);
export type TransactionType = z.infer<typeof TransactionType>;

export const PaymentMethod = z.enum(['cash', 'debit', 'credit', 'transfer']);
export type PaymentMethod = z.infer<typeof PaymentMethod>;

// ─── Transaction ────────────────────────────────────────────────

export const TransactionSchema = z.object({
    type: TransactionType,
    amount: z
        .number({ required_error: 'Amount is required' })
        .positive('Amount must be positive'),
    category_id: z
        .string()
        .uuid('Invalid category')
        .nullable()
        .optional()
        .default(null),
    entity: z.string().max(100).optional().default(''),
    account: z.string().max(100).optional().default(''),
    method: PaymentMethod.optional().default('cash'),
    installments: z
        .number()
        .int()
        .min(1)
        .max(48)
        .optional()
        .default(1),
    notes: z.string().max(500).optional().default(''),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD'),
});

export type TransactionInput = z.infer<typeof TransactionSchema>;

// ─── Savings Goal ───────────────────────────────────────────────

export const SavingsGoalSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .max(100),
    target_amount: z
        .number({ required_error: 'Target amount is required' })
        .positive('Target must be positive'),
    current_amount: z
        .number()
        .min(0, 'Current amount cannot be negative')
        .optional()
        .default(0),
    deadline: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD')
        .nullable()
        .optional()
        .default(null),
});

export type SavingsGoalInput = z.infer<typeof SavingsGoalSchema>;

// ─── Category ───────────────────────────────────────────────────

export const CategorySchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .max(50),
    icon: z.string().max(10).optional().default('📁'),
    type: TransactionType.nullable().optional().default(null),
});

export type CategoryInput = z.infer<typeof CategorySchema>;

// ─── Excel Import ───────────────────────────────────────────────

export const ExcelRowSchema = z.object({
    Fecha: z.string().min(1, 'Date is required'),
    Tipo: z.string().min(1, 'Type is required'),
    Monto: z.number({ required_error: 'Amount is required' }).positive(),
    Categoria: z.string().min(1, 'Category is required'),
    Entidad: z.string().optional().default(''),
    Cuenta: z.string().optional().default(''),
    Metodo: z.string().optional().default('cash'),
    Notas: z.string().optional().default(''),
});

export type ExcelRow = z.infer<typeof ExcelRowSchema>;

// ─── Profile ────────────────────────────────────────────────────

export const ProfileSchema = z.object({
    full_name: z.string().max(100).nullable().optional(),
    preferred_currency: z.string().max(10).optional().default('ARS'),
    monthly_budget_cap: z.number().positive().nullable().optional().default(null),
});

export type ProfileInput = z.infer<typeof ProfileSchema>;

// ─── Validator utility ──────────────────────────────────────────

export function validate<T>(schema: z.ZodSchema<T>, data: unknown): {
    success: true;
    data: T;
} | {
    success: false;
    errors: string[];
} {
    const result = schema.safeParse(data);
    if (result.success) {
        return { success: true, data: result.data };
    }
    return {
        success: false,
        errors: result.error.errors.map(
            (e) => `${e.path.join('.')}: ${e.message}`
        ),
    };
}
