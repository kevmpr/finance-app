import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_C15p_7UW.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C8wWFTH_.mjs';
import { g as getLangFromUrl, u as useTranslations } from '../../chunks/utils_ZRIF6T7E.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Data = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Data;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${t("data.title")} \u2014 FinApp` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <h1 class="text-2xl font-bold text-slate-100 mb-6 reveal">${t("data.title")}</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Export --> <div class="glass rounded-2xl p-6 reveal hover:border-emerald-500/20 transition-all" style="--reveal-delay: 100ms"> <div class="flex items-center gap-3 mb-4"> <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center"> <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg> </div> <div> <h2 class="text-lg font-semibold text-slate-200">${t("data.export")}</h2> <p class="text-xs text-slate-500">${t("data.exportDesc")}</p> </div> </div> <p class="text-xs text-slate-500 mb-4 font-mono bg-slate-800/50 rounded-lg p-2">${t("data.columns")}</p> <button id="export-btn" class="w-full py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 font-medium text-sm border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"> ${t("data.export")} (.xlsx)
</button> </div> <!-- Import --> <div class="glass rounded-2xl p-6 reveal hover:border-cyan-500/20 transition-all" style="--reveal-delay: 200ms"> <div class="flex items-center gap-3 mb-4"> <div class="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center"> <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path> </svg> </div> <div> <h2 class="text-lg font-semibold text-slate-200">${t("data.import")}</h2> <p class="text-xs text-slate-500">${t("data.importDesc")}</p> </div> </div> <label class="block w-full py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 font-medium text-sm text-center border border-cyan-500/20 hover:bg-cyan-500/20 transition-all cursor-pointer"> <input type="file" id="import-file" accept=".xlsx,.xls" class="hidden"> ${t("data.import")} (.xlsx)
</label> </div> </div> <!-- Import Preview --> <div id="import-preview" class="hidden mt-6"> <div class="glass rounded-2xl p-6"> <h3 class="text-lg font-semibold text-slate-200 mb-4">${t("data.preview")}</h3> <!-- Progress bar --> <div id="import-progress" class="mb-4 hidden"> <div class="h-2 rounded-full bg-slate-800 overflow-hidden"> <div id="progress-bar" class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300" style="width: 0%"></div> </div> <p id="progress-text" class="text-xs text-slate-500 mt-1 text-center">${t("data.processing")}</p> </div> <!-- Errors --> <div id="import-errors" class="hidden mb-4"> <h4 class="text-sm font-medium text-rose-400 mb-2">${t("data.errors")}</h4> <div id="error-list" class="max-h-40 overflow-y-auto space-y-1 text-xs"></div> </div> <!-- Preview table --> <div id="preview-table-container" class="overflow-x-auto mb-4"> <table class="w-full text-sm text-left"> <thead> <tr class="border-b border-slate-700/50"> <th class="py-2 px-3 text-xs text-slate-500">Fecha</th> <th class="py-2 px-3 text-xs text-slate-500">Tipo</th> <th class="py-2 px-3 text-xs text-slate-500">Monto</th> <th class="py-2 px-3 text-xs text-slate-500">Categoría</th> <th class="py-2 px-3 text-xs text-slate-500">Entidad</th> <th class="py-2 px-3 text-xs text-slate-500">Método</th> <th class="py-2 px-3 text-xs text-slate-500">Notas</th> </tr> </thead> <tbody id="preview-body"></tbody> </table> </div> <div class="flex gap-3"> <button id="confirm-import" class="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all"> ${t("data.confirm")} </button> <button id="cancel-import" class="px-6 py-2.5 rounded-xl bg-white/5 border border-slate-700/50 text-slate-400 text-sm hover:text-slate-200 transition-colors"> ${t("common.cancel")} </button> </div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/pages/en/data.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/pages/en/data.astro", void 0);

const $$file = "C:/Users/Usuario/OneDrive/Documents/projects/finance app/src/pages/en/data.astro";
const $$url = "/en/data";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Data,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
