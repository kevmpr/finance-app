import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wrhevigkcgiapaghlppo.supabase.co";
const supabaseKey = "sb_publishable_iftOS--NhYS0sxRMqpC6fA_WgizP5Fg";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    flowType: "pkce"
  }
});
async function ensureProfile(userId, meta) {
  try {
    const { data: existing } = await supabase.from("profiles").select("id").eq("id", userId).single();
    if (!existing) {
      await supabase.from("profiles").insert({
        id: userId,
        full_name: meta.full_name ?? null,
        preferred_currency: "ARS"
      });
    }
  } catch (err) {
    console.error("[ensureProfile] Error:", err);
  }
}

export { ensureProfile as e, supabase as s };
