import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect, url }) => {
    cookies.delete("sb-access-token", { path: "/" });
    cookies.delete("sb-refresh-token", { path: "/" });

    // Try to detect language from referer
    const referer = url.searchParams.get("lang") || "es";
    const lang = ["es", "en"].includes(referer) ? referer : "es";

    return redirect(`/${lang}/login`);
};
