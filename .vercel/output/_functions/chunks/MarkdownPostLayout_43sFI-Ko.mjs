import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, n as renderHead, l as renderComponent, o as renderSlot } from './astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="header-title"> <h1>Fiona McDougall</h1> <p>An independent designer working with people and companies who strive to create meaningful, positive change in the world.</p> </div> <img class="avatar" src="../../public/profile.jpg" width="auto" alt="profile image of Fiona"> </header>`;
}, "/Users/fiona/Projects/portfolio-2/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <ul> <li><a href="../../public/sv-fiona.pdf">Résumé</a></li> <li><a href="https://www.linkedin.com/in/fimcd/">LinkedIn</a></li> <li><a href="https://www.instagram.com/feeemcdeee/">Instagram</a></li> </ul> <ul> <li><a href="mailto:mcdougaf@gmail.com">Email me</a></li> </ul> </footer>`;
}, "/Users/fiona/Projects/portfolio-2/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <div class="main"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/fiona/Projects/portfolio-2/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p><em>${frontmatter.description}</em></p> <img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")}> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/fiona/Projects/portfolio-2/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$BaseLayout as $, $$MarkdownPostLayout as a };
