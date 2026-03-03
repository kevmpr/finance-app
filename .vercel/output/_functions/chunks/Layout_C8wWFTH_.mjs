import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, l as renderScript, h as createAstro, k as renderComponent, n as Fragment, o as renderSlot, p as renderHead } from './astro/server_C15p_7UW.mjs';
import 'piccolore';
import 'clsx';
import { g as getLangFromUrl, l as languages, u as useTranslations } from './utils_ZRIF6T7E.mjs';
/* empty css                        */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button id="theme-toggle" class="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-300" aria-label="Toggle theme"> <svg id="sun-icon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <svg id="moon-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> <script>
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function updateIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
    } else {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
    }
  }

  updateIcons();

  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    updateIcons();
  });
<\/script>`])), maybeRenderHead());
}, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/components/ThemeToggle.astro", void 0);

const $$Astro$3 = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const lang = getLangFromUrl(Astro2.url);
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="relative" id="lang-selector"> <button id="lang-toggle" class="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-sm font-medium text-slate-300 flex items-center gap-1" aria-label="Change language"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${lang.toUpperCase()} </button> <div id="lang-dropdown" class="absolute right-0 top-full mt-1 py-1 rounded-lg glass shadow-xl min-w-[100px] opacity-0 invisible transition-all duration-200 translate-y-1"> ${Object.entries(languages).map(([code, label]) => renderTemplate`<a${addAttribute(currentPath.replace(`/${lang}/`, `/${code}/`).replace(`/${lang}`, `/${code}`), "href")}${addAttribute(`block px-3 py-1.5 text-sm transition-colors ${code === lang ? "text-emerald-400 bg-emerald-900/20" : "text-slate-300 hover:text-emerald-400 hover:bg-slate-700/50"}`, "class")}> ${label} </a>`)} </div> </div> ${renderScript($$result, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/components/LanguageSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/components/LanguageSelector.astro", void 0);

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const user = Astro2.locals.user;
  const isLoggedIn = !!user;
  const userInitial = user?.email?.charAt(0).toUpperCase() || "?";
  const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "";
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" class="fixed top-0 left-0 right-0 z-50" data-astro-cid-5blmo7yk> <div class="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/30" data-astro-cid-5blmo7yk> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-5blmo7yk> <div class="flex items-center justify-between h-16" data-astro-cid-5blmo7yk> <!-- Logo --> <a${addAttribute(`/${lang}/`, "href")} class="flex items-center gap-2 group" data-astro-cid-5blmo7yk> <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-5blmo7yk></path> </svg> </div> <span class="font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent" data-astro-cid-5blmo7yk>
FinApp
</span> </a> <!-- Desktop Navigation (only when logged in) --> ${isLoggedIn && renderTemplate`<div class="hidden md:flex items-center gap-1" data-astro-cid-5blmo7yk> <a${addAttribute(`/${lang}/`, "href")} class="nav-link" data-page="dashboard" data-astro-cid-5blmo7yk> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-5blmo7yk></path></svg> ${t("nav.dashboard")} </a> <a${addAttribute(`/${lang}/transactions`, "href")} class="nav-link" data-page="transactions" data-astro-cid-5blmo7yk> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" data-astro-cid-5blmo7yk></path></svg> ${t("nav.transactions")} </a> <a${addAttribute(`/${lang}/savings`, "href")} class="nav-link" data-page="savings" data-astro-cid-5blmo7yk> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-5blmo7yk></path></svg> ${t("nav.savings")} </a> <a${addAttribute(`/${lang}/data`, "href")} class="nav-link" data-page="data" data-astro-cid-5blmo7yk> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-5blmo7yk></path></svg> ${t("nav.data")} </a> </div>`} <!-- Controls --> <div class="flex items-center gap-2" data-astro-cid-5blmo7yk> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "data-astro-cid-5blmo7yk": true })} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-5blmo7yk": true })} ${isLoggedIn ? renderTemplate`<!-- Logged in: user avatar + sign out -->
            <a href="/api/auth/signout" class="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-700/50 transition-colors text-sm text-slate-300 group" data-astro-cid-5blmo7yk> <div class="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold" data-astro-cid-5blmo7yk> ${userInitial} </div> <span class="hidden sm:inline" data-astro-cid-5blmo7yk>${userName}</span> <svg class="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-5blmo7yk></path></svg> </a>` : renderTemplate`<!-- Not logged in: login button -->
            <a${addAttribute(`/${lang}/login`, "href")} class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors text-sm font-medium text-white" data-astro-cid-5blmo7yk>
Login
</a>`} <!-- Mobile menu button --> <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-colors" aria-label="Menu" data-astro-cid-5blmo7yk> <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/30 overflow-hidden transition-[max-height,opacity] duration-300 ease-out max-h-0 opacity-0" data-astro-cid-5blmo7yk> <div class="px-4 py-3 space-y-1" data-astro-cid-5blmo7yk> ${isLoggedIn ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(`/${lang}/`, "href")} class="mobile-nav-link" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-5blmo7yk></path></svg> ${t("nav.dashboard")} </a> <a${addAttribute(`/${lang}/transactions`, "href")} class="mobile-nav-link" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" data-astro-cid-5blmo7yk></path></svg> ${t("nav.transactions")} </a> <a${addAttribute(`/${lang}/savings`, "href")} class="mobile-nav-link" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-5blmo7yk></path></svg> ${t("nav.savings")} </a> <a${addAttribute(`/${lang}/data`, "href")} class="mobile-nav-link" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-5blmo7yk></path></svg> ${t("nav.data")} </a> <a href="/api/auth/signout" class="mobile-nav-link text-rose-400" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-5blmo7yk></path></svg> ${t("nav.logout")} </a> ` })}` : renderTemplate`<a${addAttribute(`/${lang}/login`, "href")} class="mobile-nav-link text-emerald-400" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" data-astro-cid-5blmo7yk></path></svg>
Login
</a>`} </div> </div> </div> </nav>  ${renderScript($$result, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-slate-800/50 py-6"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500"> <p>${t("footer.text")} &copy; ${year}. ${t("footer.rights")}</p> </div> </footer>`;
}, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(["<html", ` class=""> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Personal Finance App \u2014 Track income, expenses, and savings"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">`, '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"></noscript><style>\n      /* Critical CSS \u2014 inlined to eliminate render-blocking */\n      *,*::before,*::after{box-sizing:border-box;border-width:0;border-style:solid}\n      html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:Inter,system-ui,sans-serif;scroll-behavior:smooth;scroll-padding-top:5rem}\n      body{margin:0;line-height:inherit;min-height:100vh;contain:style;background-color:#020617;color:#f1f5f9}\n      .dark body,html.dark body{background-color:#020617;color:#f1f5f9}\n      img,svg,video{display:block;max-width:100%;height:auto}\n      h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}\n      a{color:inherit;text-decoration:inherit}\n      ::selection{background-color:rgba(16,185,129,0.3);color:inherit}\n      .reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);transition-delay:var(--reveal-delay,0ms)}\n      .reveal.revealed{opacity:1;transform:translateY(0)}\n    </style><title>', "</title>", '</head> <body class="bg-slate-950 text-slate-100 font-sans transition-colors duration-300 overflow-x-hidden"> ', ' <main class="min-h-screen pt-16"> ', " </main> ", " <script>\n      // Dark mode initialization - runs before paint\n      (function() {\n        const theme = localStorage.getItem('theme');\n        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n          document.documentElement.classList.add('dark');\n        } else {\n          document.documentElement.classList.remove('dark');\n        }\n      })();\n    <\/script> <script>\n      // Scroll-reveal animations using IntersectionObserver\n      (function() {\n        const observer = new IntersectionObserver((entries) => {\n          entries.forEach((entry) => {\n            if (entry.isIntersecting) {\n              entry.target.classList.add('revealed');\n              observer.unobserve(entry.target);\n            }\n          });\n        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });\n\n        function observeElements() {\n          document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));\n        }\n\n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', observeElements);\n        } else {\n          observeElements();\n        }\n      })();\n    <\/script> </body> </html> "])), addAttribute(lang, "lang"), maybeRenderHead(), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
