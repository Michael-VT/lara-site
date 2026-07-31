import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { locales, siteUrl } from '../src/lib/config/site.js';
import { getPublicProducts } from '../src/lib/services/catalog.js';

const staticPaths = ['', 'products/', 'how-to-order/', 'about/', 'contacts/', 'privacy/'];
const products = getPublicProducts();
const productPaths = products.map((p) => `products/${p.slug}/`);
const allPaths = [...staticPaths, ...productPaths];

function alternatesFor(path) {
	const links = locales
		.map(
			(locale) =>
				`<xhtml:link rel="alternate" hreflang="${locale}" href="${siteUrl}/${locale}/${path}" />`
		)
		.join('');
	const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/${path}" />`;
	return `${links}${xDefault}`;
}

const urlEntries = locales
	.flatMap((locale) => allPaths.map((path) => ({ locale, path })))
	.map(
		({ locale, path }) =>
			`\t<url>\n\t\t<loc>${siteUrl}/${locale}/${path}</loc>\n\t\t${alternatesFor(path)}\n\t</url>`
	)
	.join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

const outDir = join(import.meta.dir, '..', 'build');
writeFileSync(join(outDir, 'sitemap.xml'), sitemap);
console.log(`✔ Generated build/sitemap.xml with ${locales.length * allPaths.length} URLs.`);
