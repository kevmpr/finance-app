import type { APIRoute } from "astro";
import { createServerClient } from "../../../lib/supabase";

function getOrigin(request: Request): string {
    if (import.meta.env.DEV) return "http://localhost:4321";

    // Vercel sets x-forwarded-host / x-forwarded-proto behind its proxy
    const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    const proto = request.headers.get("x-forwarded-proto") ?? "https";
    if (host) return `${proto}://${host}`;

    return new URL(request.url).origin;
}

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const supabase = createServerClient(cookies, request);
    const origin = getOrigin(request);

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${origin}/api/auth/callback`,
        },
    });

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return redirect(data.url);
};
