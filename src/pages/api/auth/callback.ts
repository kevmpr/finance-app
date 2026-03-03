import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { mapSupabaseError, useTranslations } from "../../../i18n/utils";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
    const authCode = url.searchParams.get("code");

    if (!authCode) {
        return redirect("/es/login?error=No+code+provided");
    }

    const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

    if (error) {
        // Map error to i18n key for user-friendly message
        const t = useTranslations("es");
        const errorKey = mapSupabaseError(error);
        const msg = encodeURIComponent(t(errorKey));
        return redirect(`/es/login?error=${msg}`);
    }

    const { access_token, refresh_token } = data.session;

    cookies.set("sb-access-token", access_token, {
        path: "/",
        httpOnly: true,
        secure: !import.meta.env.DEV,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    cookies.set("sb-refresh-token", refresh_token, {
        path: "/",
        httpOnly: true,
        secure: !import.meta.env.DEV,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
    });

    // Redirect to dashboard in user's preferred language
    // Default to 'es' — user can switch later
    return redirect("/es/");
};
