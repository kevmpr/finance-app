import { createClient } from "@supabase/supabase-js";
import { createServerClient as createSSRClient, parseCookieHeader } from "@supabase/ssr";
import type { AstroCookies } from "astro";
import type { Database } from "../types/supabase";

const supabaseUrl = import.meta.env.SUPABASE_URL ?? "";
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY ?? "";

if (!supabaseUrl || !supabaseKey) {
    console.error("[supabase] Missing SUPABASE_URL or SUPABASE_ANON_KEY env vars");
}

/**
 * Legacy singleton — use for non-auth DB queries (profiles, transactions, etc.).
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
    },
});

/**
 * Per-request Supabase client that stores PKCE code-verifier and
 * session tokens in Astro cookies.  Works across serverless invocations.
 */
export function createServerClient(cookies: AstroCookies, request: Request) {
    const cookieHeader = request.headers.get("Cookie") ?? "";

    return createSSRClient<Database>(supabaseUrl, supabaseKey, {
        cookies: {
            getAll: () => {
                return parseCookieHeader(cookieHeader);
            },
            setAll: (cookiesToSet) => {
                for (const { name, value, options } of cookiesToSet) {
                    cookies.set(name, value, {
                        path: "/",
                        httpOnly: true,
                        secure: !import.meta.env.DEV,
                        sameSite: "lax",
                        maxAge: 60 * 60 * 24 * 7,
                        ...options,
                    });
                }
            },
        },
    });
}

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
