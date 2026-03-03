import { s as supabase } from '../../chunks/supabase_BWi3Rcbw.mjs';
import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

const TransactionType = z.enum(["income", "expense"]);
const PaymentMethod = z.enum(["cash", "debit", "credit", "transfer"]);
const TransactionSchema = z.object({
  type: TransactionType,
  amount: z.number({ required_error: "Amount is required" }).positive("Amount must be positive"),
  category_id: z.string().uuid("Invalid category").nullable().optional().default(null),
  entity: z.string().max(100).optional().default(""),
  account: z.string().max(100).optional().default(""),
  method: PaymentMethod.optional().default("cash"),
  installments: z.number().int().min(1).max(48).optional().default(1),
  notes: z.string().max(500).optional().default(""),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD")
});
z.object({
  name: z.string().min(1, "Name is required").max(100),
  target_amount: z.number({ required_error: "Target amount is required" }).positive("Target must be positive"),
  current_amount: z.number().min(0, "Current amount cannot be negative").optional().default(0),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD").nullable().optional().default(null)
});
z.object({
  name: z.string().min(1, "Name is required").max(50),
  icon: z.string().max(10).optional().default("📁"),
  type: TransactionType.nullable().optional().default(null)
});
z.object({
  Fecha: z.string().min(1, "Date is required"),
  Tipo: z.string().min(1, "Type is required"),
  Monto: z.number({ required_error: "Amount is required" }).positive(),
  Categoria: z.string().min(1, "Category is required"),
  Entidad: z.string().optional().default(""),
  Cuenta: z.string().optional().default(""),
  Metodo: z.string().optional().default("cash"),
  Notas: z.string().optional().default("")
});
z.object({
  full_name: z.string().max(100).nullable().optional(),
  preferred_currency: z.string().max(10).optional().default("ARS"),
  monthly_budget_cap: z.number().positive().nullable().optional().default(null)
});

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const raw = {
    type: formData.get("type")?.toString() || "expense",
    amount: parseFloat(formData.get("amount")?.toString() || "0"),
    category_id: formData.get("category_id")?.toString() || null,
    method: formData.get("method")?.toString() || "cash",
    date: formData.get("date")?.toString() || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    notes: formData.get("notes")?.toString() || "",
    entity: formData.get("entity")?.toString() || "",
    account: formData.get("account")?.toString() || "",
    installments: parseInt(formData.get("installments")?.toString() || "1", 10)
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
const DELETE = async ({ url }) => {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    DELETE,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
