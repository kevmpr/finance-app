import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";
import { TransactionSchema } from "../../lib/schemas";

/**
 * POST /api/transactions — Create a new transaction (Zod-validated).
 * DELETE /api/transactions?id=UUID — Delete a transaction by ID.
 */

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();

    const raw = {
        type: formData.get("type")?.toString() || "expense",
        amount: parseFloat(formData.get("amount")?.toString() || "0"),
        category_id: formData.get("category_id")?.toString() || null,
        method: formData.get("method")?.toString() || "cash",
        date: formData.get("date")?.toString() || new Date().toISOString().split("T")[0],
        notes: formData.get("notes")?.toString() || "",
        entity: formData.get("entity")?.toString() || "",
        account: formData.get("account")?.toString() || "",
        installments: parseInt(formData.get("installments")?.toString() || "1", 10),
    };

    const result = TransactionSchema.safeParse(raw);
    if (!result.success) {
        const errors = result.error.errors.map((e) => e.message).join(", ");
        return new Response(errors, { status: 400 });
    }

    const { error } = await supabase.from("transactions").insert(result.data);

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    const referer = request.headers.get("referer") || "/es/";
    return redirect(referer);
};

export const DELETE: APIRoute = async ({ url }) => {
    const id = url.searchParams.get("id");
    if (!id) {
        return new Response("ID is required", { status: 400 });
    }

    const { error } = await supabase.from("transactions").delete().eq("id", id);

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return new Response("OK", { status: 200 });
};
