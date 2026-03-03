import { supabase } from './supabase';
import { SavingsGoalSchema } from './schemas';

/**
 * Savings Goals — CRUD with RLS + 50/30/20 helper.
 */

export async function getSavingsGoals() {
    const { data, error } = await supabase
        .from('savings_goals')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data ?? [];
}

export async function createSavingsGoal(input: unknown) {
    const result = SavingsGoalSchema.safeParse(input);
    if (!result.success) {
        throw new Error(
            result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')
        );
    }

    const { data, error } = await supabase
        .from('savings_goals')
        .insert(result.data)
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function updateSavingsGoal(id: string, input: unknown) {
    const result = SavingsGoalSchema.partial().safeParse(input);
    if (!result.success) {
        throw new Error(
            result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')
        );
    }

    const { data, error } = await supabase
        .from('savings_goals')
        .update(result.data)
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function deleteSavingsGoal(id: string) {
    const { error } = await supabase
        .from('savings_goals')
        .delete()
        .eq('id', id);

    if (error) throw error;
}

/**
 * Calculate 50/30/20 rule budget suggestions.
 */
export function calculate503020(monthlyIncome: number) {
    return {
        needs: monthlyIncome * 0.5,
        wants: monthlyIncome * 0.3,
        savings: monthlyIncome * 0.2,
    };
}
