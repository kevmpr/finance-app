import { e as createComponent, r as renderTemplate } from '../chunks/astro/server_C15p_7UW.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta http-equiv="refresh" content="0;url=/es/">`;
}, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
