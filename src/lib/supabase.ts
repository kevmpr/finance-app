import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

/**
 * Typed Supabase client — server-side only (Astro v5 + PKCE).
 *
 * Uses process.env fallback for Vercel runtime where import.meta.env
 * may not resolve dashboard-configured env vars.
 */
const supabaseUrl = import.meta.env.SUPABASE_URL ?? "";
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY ?? "";

if (!supabaseUrl || !supabaseKey) {
    console.error("[supabase] Missing SUPABASE_URL or SUPABASE_ANON_KEY env vars");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
    auth: {
        flowType: "pkce",
    },
});

/**
 * Ensure a profile row exists for a user.
 * Called on first login — creates entry with Google metadata.
 */
export async function ensureProfile(userId: string, meta: { full_name?: string | null }) {
    try {
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
    } catch (err) {
        console.error("[ensureProfile] Error:", err);
    }
}
