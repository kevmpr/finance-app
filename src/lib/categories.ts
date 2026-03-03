import { supabase } from './supabase';
import { CategorySchema } from './schemas';

/**
 * Categories — Global + user-custom via RLS.
 */

export async function getCategories() {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

    if (error) throw error;
    return data ?? [];
}

export async function createCategory(input: unknown) {
    const result = CategorySchema.safeParse(input);
    if (!result.success) {
        throw new Error(
            result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')
        );
    }

    const { data, error } = await supabase
        .from('categories')
        .insert({ ...result.data, is_custom: true })
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function deleteCategory(id: string) {
    const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id)
        .eq('is_custom', true); // only user-owned

    if (error) throw error;
}
