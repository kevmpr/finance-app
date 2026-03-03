import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B5ZLN8Gj.mjs';
import { manifest } from './manifest_BHDonTJm.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/callback.astro.mjs');
const _page2 = () => import('./pages/api/auth/signin.astro.mjs');
const _page3 = () => import('./pages/api/auth/signout.astro.mjs');
const _page4 = () => import('./pages/api/transactions.astro.mjs');
const _page5 = () => import('./pages/en/data.astro.mjs');
const _page6 = () => import('./pages/en/login.astro.mjs');
const _page7 = () => import('./pages/en/savings.astro.mjs');
const _page8 = () => import('./pages/en/transactions.astro.mjs');
const _page9 = () => import('./pages/en.astro.mjs');
const _page10 = () => import('./pages/es/data.astro.mjs');
const _page11 = () => import('./pages/es/login.astro.mjs');
const _page12 = () => import('./pages/es/savings.astro.mjs');
const _page13 = () => import('./pages/es/transactions.astro.mjs');
const _page14 = () => import('./pages/es.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/callback.ts", _page1],
    ["src/pages/api/auth/signin.ts", _page2],
    ["src/pages/api/auth/signout.ts", _page3],
    ["src/pages/api/transactions.ts", _page4],
    ["src/pages/en/data.astro", _page5],
    ["src/pages/en/login.astro", _page6],
    ["src/pages/en/savings.astro", _page7],
    ["src/pages/en/transactions.astro", _page8],
    ["src/pages/en/index.astro", _page9],
    ["src/pages/es/data.astro", _page10],
    ["src/pages/es/login.astro", _page11],
    ["src/pages/es/savings.astro", _page12],
    ["src/pages/es/transactions.astro", _page13],
    ["src/pages/es/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "84f318ae-3cbd-4fd7-b44a-e610c90ebe39",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
