import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

/**
 * Typed Supabase client — server-side only (Astro v5 + PKCE).
 */
export const supabase = createClient<Database>(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
    {
        auth: {
            flowType: "pkce",
        },
    },
);

/**
 * Ensure a profile row exists for a user.
 * Called on first login — creates entry with Google metadata.
 */
export async function ensureProfile(userId: string, meta: { full_name?: string }) {
    const { data: existing } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", userId)
        .single();

    if (!existing) {
        await supabase.from("profiles").insert({
            id: userId,
            full_name: meta.full_name ?? null,
            preferred_currency: "ARS",
        });
    }
}
