import { e as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import { a as $$MarkdownPostLayout } from './MarkdownPostLayout_43sFI-Ko.mjs';

const html = () => "<p>some text if I want to say more at some point</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","client":"Fondfolio","year":"Ongoing","background":"#57534e","link":"https://fondfolio.com/","linkText":"Visit website","description":"A self-funded venture between myself and my partner Matt. I make each book by hand and manage all of the day to day operations.","image":{"url":"../../../public/work/fondfolio-1.webp","alt":"The Fondfolio website homepage, showing one of the handmade coptic-bound books on the right and some explainer text on the left."}};
				const file = "/Users/fiona/Projects/portfolio-2/src/pages/work/work-6.md";
				const url = "/work/work-6";
				function rawContent() {
					return "   \n                                              \n                   \n               \n                     \n                              \n                         \n                                                                                                                                              \n      \n                                                \n                                                                                                                                           \n   \nsome text if I want to say more at some point";
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

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_5 as _ };
