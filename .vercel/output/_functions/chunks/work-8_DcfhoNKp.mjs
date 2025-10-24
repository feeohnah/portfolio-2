import { e as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import { a as $$MarkdownPostLayout } from './MarkdownPostLayout_43sFI-Ko.mjs';

const html = () => "<p>some text if I want to say more at some point</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","client":"Daniel Faria Gallery","year":"2018","background":"#fdba74","link":"https://danielfariagallery.com/","linkText":"Visit website","description":"I refreshed Daniel’s website creating a responsive experience while maintaining a minimal aesthetic that prioritizes the work of his artists.","image":{"url":"../../../public/work/danielFaria-1.webp","alt":"Daniel Faria Gallery’s current homepage, showing an image fro the current exhibition as well as the main navigation."}};
				const file = "/Users/fiona/Projects/portfolio-2/src/pages/work/work-8.md";
				const url = "/work/work-8";
				function rawContent() {
					return "   \n                                              \n                              \n            \n                     \n                                       \n                         \n                                                                                                                                                            \n      \n                                                  \n                                                                                                                               \n   \n\nsome text if I want to say more at some point";
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

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_7 as _ };
