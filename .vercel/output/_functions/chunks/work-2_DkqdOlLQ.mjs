import { e as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import { a as $$MarkdownPostLayout } from './MarkdownPostLayout_43sFI-Ko.mjs';

const html = () => "<p>Some text</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","client":"Caladan Bio","year":"2024","background":"#CCE8BA","link":"https://fondfolio.com/","linkText":"View Figma file","description":"Working within their established brand palette, I created a UI design system for the app that powers their desktop bio reactors.","image":{"url":"../../../public/work/caladan-1.webp","alt":"Screenshot from the Bioreactor UI used for monitoring the growth of cell cultures."}};
				const file = "/Users/fiona/Projects/portfolio-2/src/pages/work/work-2.md";
				const url = "/work/work-2";
				function rawContent() {
					return "   \n                                              \n                     \n            \n                     \n                              \n                           \n                                                                                                                                               \n      \n                                              \n                                                                                             \n   \nSome text";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_1 as _ };
