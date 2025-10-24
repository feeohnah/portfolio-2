import { e as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import { a as $$MarkdownPostLayout } from './MarkdownPostLayout_43sFI-Ko.mjs';

const html = () => "<p>Some more text</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","client":"Eli’s Place","year":"2021","background":"#CEF6FF","link":"https://fondfolio.com/","linkText":"View Figma file","description":"Development of a UI design system for their website as well as guidance on copywriting and content creation.","image":{"url":"../../../public/work/elisPlace-1.webp","alt":"Homepage from the Eli’s place charity website."}};
				const file = "/Users/fiona/Projects/portfolio-2/src/pages/work/work-5.md";
				const url = "/work/work-5";
				function rawContent() {
					return "   \n                                              \n                     \n            \n                     \n                              \n                           \n                                                                                                                           \n      \n                                                \n                                                         \n   \nSome more text";
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

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_4 as _ };
