import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Cs7aoHZ2.mjs';
import { manifest } from './manifest_B8uHIaj5.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/work/work-1.astro.mjs');
const _page2 = () => import('./pages/work/work-2.astro.mjs');
const _page3 = () => import('./pages/work/work-3.astro.mjs');
const _page4 = () => import('./pages/work/work-4.astro.mjs');
const _page5 = () => import('./pages/work/work-5.astro.mjs');
const _page6 = () => import('./pages/work/work-6.astro.mjs');
const _page7 = () => import('./pages/work/work-7.astro.mjs');
const _page8 = () => import('./pages/work/work-8.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/work/work-1.md", _page1],
    ["src/pages/work/work-2.md", _page2],
    ["src/pages/work/work-3.md", _page3],
    ["src/pages/work/work-4.md", _page4],
    ["src/pages/work/work-5.md", _page5],
    ["src/pages/work/work-6.md", _page6],
    ["src/pages/work/work-7.md", _page7],
    ["src/pages/work/work-8.md", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c4bf6aa1-0828-4c30-b0e1-6f0ffcd162ff",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
