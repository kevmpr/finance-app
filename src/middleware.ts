import { defineMiddleware } from 'astro:middleware';
import { supabase, ensureProfile } from './lib/supabase';

const protectedPrefixes = ['/es/', '/en/'];
const publicSuffixes = ['/login'];
const publicPaths = ['/api/auth/callback', '/api/auth/signin', '/api/auth/signout', '/'];

export const onRequest = defineMiddleware(async (context, next) => {
    const { pathname } = context.url;

    // Always allow: static assets, API auth routes, root
    if (pathname.startsWith('/_') || pathname.includes('.') || publicPaths.includes(pathname)) {
        return next();
    }

    // Allow login pages
    if (publicSuffixes.some((s) => pathname.endsWith(s))) {
        return next();
    }

    // Only protect locale routes (/es/*, /en/*)
    const isProtected = protectedPrefixes.some((p) => pathname.startsWith(p));
    if (!isProtected) {
        return next();
    }

    // ── Check cookies ──
    const accessToken = context.cookies.get('sb-access-token');
    const refreshToken = context.cookies.get('sb-refresh-token');

    const lang = pathname.split('/')[1] || 'es';
    const validLang = ['es', 'en'].includes(lang) ? lang : 'es';

    if (!accessToken || !refreshToken) {
        return context.redirect(`/${validLang}/login`);
    }

    // ── Validate session ──
    const { data, error } = await supabase.auth.setSession({
        access_token: accessToken.value,
        refresh_token: refreshToken.value,
    });

    if (error || !data.session) {
        context.cookies.delete('sb-access-token', { path: '/' });
        context.cookies.delete('sb-refresh-token', { path: '/' });
        return context.redirect(`/${validLang}/login`);
    }

    // ── Refresh cookies if tokens changed ──
    if (data.session.access_token !== accessToken.value) {
        context.cookies.set('sb-access-token', data.session.access_token, { path: '/' });
        context.cookies.set('sb-refresh-token', data.session.refresh_token, { path: '/' });
    }

    // ── Profile sync (first login) ──
    const user = data.session.user;
    await ensureProfile(user.id, {
        full_name: user.user_metadata?.full_name ?? user.user_metadata?.name ?? null,
    });

    // ── Store user for pages ──
    context.locals.user = user;
    return next();
});
