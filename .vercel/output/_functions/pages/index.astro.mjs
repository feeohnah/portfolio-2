import { _ as __vite_glob_0_0 } from '../chunks/work-1_DPKnCFct.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/work-2_DkqdOlLQ.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/work-3_C61nvke4.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/work-4_n0D31xoT.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/work-5_CXgDuhyi.mjs';
import { _ as __vite_glob_0_5 } from '../chunks/work-6_LXcldWPb.mjs';
import { _ as __vite_glob_0_6 } from '../chunks/work-7_DN7oWuhu.mjs';
import { _ as __vite_glob_0_7 } from '../chunks/work-8_DcfhoNKp.mjs';
import { e as createComponent, f as createAstro, k as defineStyleVars, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent } from '../chunks/astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/MarkdownPostLayout_43sFI-Ko.mjs';
/* empty css                                 */
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Work = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const { background, link, linkText, client, year, image, description } = Astro2.props;
  const $$definedVars = defineStyleVars([{ background }]);
  return renderTemplate`${maybeRenderHead()}<li id="work" class="work-post" data-astro-cid-wkx7uqji${addAttribute($$definedVars, "style")}><div class="thumbnail" data-astro-cid-wkx7uqji${addAttribute($$definedVars, "style")}><img${addAttribute(image.url, "src")} width="auto"${addAttribute(image.alt, "alt")} data-astro-cid-wkx7uqji${addAttribute($$definedVars, "style")}></div><span class="title" data-astro-cid-wkx7uqji${addAttribute($$definedVars, "style")}><h4 data-astro-cid-wkx7uqji${addAttribute($$definedVars, "style")}>${client}</h4><h4 data-astro-cid-wkx7uqji${addAttribute($$definedVars, "style")}>${year}</h4></span><p data-astro-cid-wkx7uqji${addAttribute($$definedVars, "style")}>${description}</p><a${addAttribute(link, "href")} data-astro-cid-wkx7uqji${addAttribute($$definedVars, "style")}>${linkText}</a></li> `;
}, "/Users/fiona/Projects/portfolio-2/src/components/Work.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allWork = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6,__vite_glob_0_7]);
  const pageTitle = "Work";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container"> <h2>For more than 12 years, I’ve been helping brands and teams craft thoughtful, high-quality digital products. I collaborate closely with developers and in-house teams to make sure every project comes to life exactly as intended.</h2> <ul class="work-list"> ${allWork.map((work) => renderTemplate`${renderComponent($$result2, "Work", $$Work, { "client": work.frontmatter.client, "year": work.frontmatter.year, "image": work.frontmatter.image, "description": work.frontmatter.description, "background": work.frontmatter.background, "link": work.frontmatter.link, "linkText": work.frontmatter.linkText })}`)} </ul> </section> ` })}`;
}, "/Users/fiona/Projects/portfolio-2/src/pages/index.astro", void 0);

const $$file = "/Users/fiona/Projects/portfolio-2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
