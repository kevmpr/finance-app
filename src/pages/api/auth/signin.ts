import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import type { Provider } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const provider = formData.get("provider")?.toString();

    const validProviders = ["google", "github"];

    if (provider && validProviders.includes(provider)) {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider as Provider,
            options: {
                redirectTo: import.meta.env.DEV
                    ? "http://localhost:4321/api/auth/callback"
                    : `${request.headers.get("origin")}/api/auth/callback`,
            },
        });

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return redirect(data.url);
    }

    return new Response("Provider is required", { status: 400 });
};
