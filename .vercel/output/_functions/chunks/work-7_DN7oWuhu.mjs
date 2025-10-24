import { e as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import { a as $$MarkdownPostLayout } from './MarkdownPostLayout_43sFI-Ko.mjs';

const html = () => "<p>some text if I want to say more at some point</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","client":"Corey Robinson","year":"2022","background":"#2727E6","link":"https://fondfolio.com/","linkText":"View Figma file","description":"To showcase his research and publications I designed a new online identity for Corey, incorporating subtle references to his focus on migration.","image":{"url":"../../../public/work/coreyRobinson-1.webp","alt":"A screen-cap of Corey’s homepage, showing his full name, and excerpt from his most recent publication. In the background large blue shaded spheres give a subtle reference to his research focus on migration."}};
				const file = "/Users/fiona/Projects/portfolio-2/src/pages/work/work-7.md";
				const url = "/work/work-7";
				function rawContent() {
					return "   \n                                              \n                        \n            \n                     \n                              \n                           \n                                                                                                                                                               \n      \n                                                    \n                                                                                                                                                                                                                         \n   \n\nsome text if I want to say more at some point";
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

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_6 as _ };
