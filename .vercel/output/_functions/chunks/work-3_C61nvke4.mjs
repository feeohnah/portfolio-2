import { e as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import { a as $$MarkdownPostLayout } from './MarkdownPostLayout_43sFI-Ko.mjs';

const html = () => "<p>Some more text</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","client":"Digital Moment","year":"2024","description":"Website refresh and content restructuring so as to more effectively showcase impact and streamline user access to essential resources.","background":"#515366","link":"https://fondfolio.com/","linkText":"View Figma file","image":{"url":"../../../public/work/digitalMoment-1.webp","alt":"The homepage of the Digital Moment website with their tagline in bold on the left and quick links to their 3 target audiences below."}};
				const file = "/Users/fiona/Projects/portfolio-2/src/pages/work/work-3.md";
				const url = "/work/work-3";
				function rawContent() {
					return "   \n                                              \n                        \n            \n                                                                                                                                                     \n                     \n                              \n                           \n      \n                                                    \n                                                                                                                                               \n   \n\nSome more text";
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

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_2 as _ };
