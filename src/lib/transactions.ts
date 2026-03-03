import { supabase } from './supabase';
import { TransactionSchema } from './schemas';

/**
 * Transactions — Full CRUD with RLS isolation.
 * All queries filter by user_id (via RLS) and order by date DESC.
 */

// ─── Read ───────────────────────────────────────────────────────

export async function getTransactions(options?: {
    startDate?: string;
    endDate?: string;
    type?: 'income' | 'expense';
    category_id?: string;
    limit?: number;
    offset?: number;
}): Promise<any[]> {
    let query = supabase
        .from('transactions')
        .select('*, categories(name, icon)')
        .order('date', { ascending: false });

    if (options?.startDate) query = query.gte('date', options.startDate);
    if (options?.endDate) query = query.lte('date', options.endDate);
    if (options?.type) query = query.eq('type', options.type);
    if (options?.category_id) query = query.eq('category_id', options.category_id);

    if (options?.offset && options?.limit) {
        query = query.range(options.offset, options.offset + options.limit - 1);
    } else if (options?.limit) {
        query = query.limit(options.limit);
    }

    const { data, error } = await query;
    if (error) throw error;
    return (data ?? []) as any[];
}

// ─── Create ─────────────────────────────────────────────────────

export async function createTransaction(input: unknown) {
    const result = TransactionSchema.safeParse(input);
    if (!result.success) {
        throw new Error(
            result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')
        );
    }

    const { data, error } = await supabase
        .from('transactions')
        .insert(result.data)
        .select()
        .single();

    if (error) throw error;
    return data;
}

// ─── Update ─────────────────────────────────────────────────────

export async function updateTransaction(id: string, input: unknown) {
    const result = TransactionSchema.partial().safeParse(input);
    if (!result.success) {
        throw new Error(
            result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')
        );
    }

    const { data, error } = await supabase
        .from('transactions')
        .update(result.data)
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return data;
}

// ─── Delete ─────────────────────────────────────────────────────

export async function deleteTransaction(id: string) {
    const { error } = await supabase
        .from('transactions')
        .delete()
        .eq('id', id);

    if (error) throw error;
}

// ─── Duplicate ("Copy Previous Expense") ────────────────────────

/**
 * Retrieves an existing transaction and prepares a new insert object
 * with all metadata preserved but the date reset to today.
 *
 * Usage: duplicateTransaction(id) → TransactionInput ready for createTransaction()
 */
export async function duplicateTransaction(id: string) {
    const { data: original, error } = await supabase
        .from('transactions')
        .select('type, amount, category_id, entity, account, method, installments, notes')
        .eq('id', id)
        .single();

    if (error || !original) throw error ?? new Error('Transaction not found');

    const { type, amount, category_id, entity, account, method, installments, notes } = original as any;
    return {
        type,
        amount,
        category_id,
        entity,
        account,
        method,
        installments,
        notes,
        date: new Date().toISOString().split('T')[0],
    };
}

// ─── Aggregations ───────────────────────────────────────────────

export async function getMonthlySummary(year: number, month: number) {
    const startDate = `${year}-${String(month + 1).padStart(2, '0')}-01`;
    const endDate = new Date(year, month + 1, 0).toISOString().split('T')[0];

    const { data, error } = await supabase
        .from('transactions')
        .select('type, amount')
        .gte('date', startDate)
        .lte('date', endDate)
        .order('date', { ascending: false });

    if (error) throw error;

    const rows = (data ?? []) as { type: string; amount: number }[];
    const income = rows.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expenses = rows.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

    return { income, expenses, balance: income - expenses };
}

export async function getExpenseBreakdown(startDate: string, endDate: string) {
    const { data, error } = await supabase
        .from('transactions')
        .select('amount, categories(name, icon)')
        .eq('type', 'expense')
        .gte('date', startDate)
        .lte('date', endDate)
        .order('date', { ascending: false });

    if (error) throw error;

    const breakdown: Record<string, { name: string; icon: string; total: number }> = {};
    data?.forEach((t: any) => {
        const catName = t.categories?.name || 'Otros';
        const catIcon = t.categories?.icon || '📁';
        if (!breakdown[catName]) {
            breakdown[catName] = { name: catName, icon: catIcon, total: 0 };
        }
        breakdown[catName].total += t.amount;
    });

    return Object.values(breakdown).sort((a, b) => b.total - a.total);
}
