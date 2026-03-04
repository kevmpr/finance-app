import type { APIRoute } from "astro";
import { createServerClient } from "../../../lib/supabase";
import { mapSupabaseError, useTranslations } from "../../../i18n/utils";

export const GET: APIRoute = async ({ url, cookies, redirect, request }) => {
    const authCode = url.searchParams.get("code");

    if (!authCode) {
        return redirect("/es/login?error=No+code+provided");
    }

    // Use per-request client so it reads the PKCE code_verifier from cookies
    const supabase = createServerClient(cookies, request);
    const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

    if (error) {
        console.error("[callback] exchangeCodeForSession error:", error.message);
        const t = useTranslations("es");
        const errorKey = mapSupabaseError(error);
        const msg = encodeURIComponent(t(errorKey));
        return redirect(`/es/login?error=${msg}`);
    }

    const { access_token, refresh_token } = data.session;

    // Set session cookies (the SSR client may also set its own,
    // but we keep these explicit cookies for the middleware)
    cookies.set("sb-access-token", access_token, {
        path: "/",
        httpOnly: true,
        secure: !import.meta.env.DEV,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
    });
    cookies.set("sb-refresh-token", refresh_token, {
        path: "/",
        httpOnly: true,
        secure: !import.meta.env.DEV,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
    });

    return redirect("/es/");
};
