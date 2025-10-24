import { e as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_DZynHiDL.mjs';
import 'kleur/colors';
import { a as $$MarkdownPostLayout } from './MarkdownPostLayout_43sFI-Ko.mjs';

const html = () => "";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","client":"ProntoMobile","year":"2025","background":"#dee9ff","link":"https://fondfolio.com/","linkText":"View Figma file","description":"Brand development and marketing website design for startup ProntoMobile, to help them attract founding customers and stand out from competitors.","image":{"url":"../../../public/work/prontoMobile-1.webp","alt":"Homepage of the ProntoMobile website."}};
				const file = "/Users/fiona/Projects/portfolio-2/src/pages/work/work-1.md";
				const url = "/work/work-1";
				function rawContent() {
					return "   \n                                              \n                      \n            \n                     \n                              \n                           \n                                                                                                                                                               \n      \n                                                   \n                                                \n   ";
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

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_0 as _ };
