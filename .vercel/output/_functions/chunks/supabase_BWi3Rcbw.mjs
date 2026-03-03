import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://wrhevigkcgiapaghlppo.supabase.co",
  "sb_publishable_iftOS--NhYS0sxRMqpC6fA_WgizP5Fg",
  {
    auth: {
      flowType: "pkce"
    }
  }
);
async function ensureProfile(userId, meta) {
  const { data: existing } = await supabase.from("profiles").select("id").eq("id", userId).single();
  if (!existing) {
    await supabase.from("profiles").insert({
      id: userId,
      full_name: meta.full_name ?? null,
      preferred_currency: "ARS"
    });
  }
}

export { ensureProfile as e, supabase as s };
