import type { APIRoute } from "astro";
import { createServerClient } from "../../lib/supabase";
import { TransactionSchema } from "../../lib/schemas";

/**
 * POST /api/transactions — Create a new transaction (Zod-validated).
 * DELETE /api/transactions?id=UUID — Delete a transaction by ID.
 */

export const POST: APIRoute = async ({ request, locals, cookies }) => {
    const user = locals.user;
    if (!user) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
        });
    }

    const body = await request.json();

    const raw = {
        type: body.type || "expense",
        amount: parseFloat(body.amount || "0"),
        category_id: body.category_id || null,
        method: body.method || "cash",
        date: body.date || new Date().toISOString().split("T")[0],
        notes: body.notes || "",
        entity: body.entity || "",
        account: body.account || "",
        installments: parseInt(body.installments || "1", 10),
    };

    const result = TransactionSchema.safeParse(raw);
    if (!result.success) {
        const errors = result.error.errors.map((e) => e.message).join(", ");
        return new Response(JSON.stringify({ error: errors }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const supabase = createServerClient(cookies, request);
    const method = (result.data.method || "cash");
    const capitalizedMethod = method.charAt(0).toUpperCase() + method.slice(1);

    const { error } = await supabase
        .from("transactions")
        .insert({ ...result.data, user_id: user.id, method: capitalizedMethod } as any);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
};

export const DELETE: APIRoute = async ({ url, cookies, request, locals }) => {
    const user = locals.user;
    if (!user) {
        return new Response("Unauthorized", { status: 401 });
    }

    const id = url.searchParams.get("id");
    if (!id) {
        return new Response("ID is required", { status: 400 });
    }

    const supabase = createServerClient(cookies, request);
    const { error } = await supabase.from("transactions").delete().eq("id", id);

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return new Response("OK", { status: 200 });
};
