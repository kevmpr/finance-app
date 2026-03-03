import { s as supabase } from '../../../chunks/supabase_ZWfVKi9Z.mjs';
import { m as mapSupabaseError, u as useTranslations } from '../../../chunks/utils_ZRIF6T7E.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return redirect("/es/login?error=No+code+provided");
  }
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) {
    const t = useTranslations("es");
    const errorKey = mapSupabaseError(error);
    const msg = encodeURIComponent(t(errorKey));
    return redirect(`/es/login?error=${msg}`);
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7
    // 7 days
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7
  });
  return redirect("/es/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
