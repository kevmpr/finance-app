import { d as defineMiddleware, s as sequence } from './chunks/index_BzFF2Smg.mjs';
import { s as supabase, e as ensureProfile } from './chunks/supabase_ZWfVKi9Z.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_B-MufUSJ.mjs';
import 'piccolore';
import './chunks/astro/server_C15p_7UW.mjs';
import 'clsx';

const protectedPrefixes = ["/es/", "/en/"];
const publicSuffixes = ["/login"];
const publicPaths = ["/api/auth/callback", "/api/auth/signin", "/api/auth/signout", "/"];
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (pathname.startsWith("/_") || pathname.includes(".") || publicPaths.includes(pathname)) {
    return next();
  }
  if (publicSuffixes.some((s) => pathname.endsWith(s))) {
    return next();
  }
  const isProtected = protectedPrefixes.some((p) => pathname.startsWith(p));
  if (!isProtected) {
    return next();
  }
  const accessToken = context.cookies.get("sb-access-token");
  const refreshToken = context.cookies.get("sb-refresh-token");
  const lang = pathname.split("/")[1] || "es";
  const validLang = ["es", "en"].includes(lang) ? lang : "es";
  if (!accessToken || !refreshToken) {
    return context.redirect(`/${validLang}/login`);
  }
  const { data, error } = await supabase.auth.setSession({
    access_token: accessToken.value,
    refresh_token: refreshToken.value
  });
  if (error || !data.session) {
    context.cookies.delete("sb-access-token", { path: "/" });
    context.cookies.delete("sb-refresh-token", { path: "/" });
    return context.redirect(`/${validLang}/login`);
  }
  if (data.session.access_token !== accessToken.value) {
    context.cookies.set("sb-access-token", data.session.access_token, { path: "/" });
    context.cookies.set("sb-refresh-token", data.session.refresh_token, { path: "/" });
  }
  const user = data.session.user;
  await ensureProfile(user.id, {
    full_name: user.user_metadata?.full_name ?? user.user_metadata?.name ?? null
  });
  context.locals.user = user;
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
