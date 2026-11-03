import { writeFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { locales, siteUrl } from '../src/lib/config/site.js';
import { getPublicProducts } from '../src/lib/services/catalog.js';
import { journalPosts } from '../src/lib/content/journal.js';

const buildDate = new Date().toISOString().slice(0, 10);

/**
 * @typedef {{ path: string, priority: string, changefreq: string, lastmod?: string }} SitemapEntry
 */

/** @type {SitemapEntry[]} */
const staticEntries = [
	{ path: '', priority: '1.0', changefreq: 'weekly' },
	{ path: 'products/', priority: '0.9', changefreq: 'daily' },
	{ path: 'how-to-order/', priority: '0.7', changefreq: 'monthly' },
	{ path: 'journal/', priority: '0.7', changefreq: 'weekly' },
	{ path: 'about/', priority: '0.5', changefreq: 'monthly' },
	{ path: 'contacts/', priority: '0.5', changefreq: 'monthly' },
	{ path: 'privacy/', priority: '0.3', changefreq: 'yearly' }
];

const products = getPublicProducts();
/** @type {SitemapEntry[]} */
const productEntries = products.map((p) => ({
	path: `products/${p.slug}/`,
	priority: '0.8',
	changefreq: 'weekly',
	lastmod: p.createdAt ?? buildDate
}));

const posts = journalPosts.filter((p) => p.body);
/** @type {SitemapEntry[]} */
const journalEntries = posts.map((p) => ({
	path: `journal/${p.slug}/`,
	priority: '0.6',
	changefreq: 'monthly',
	lastmod: p.date ?? buildDate
}));

const allEntries = [...staticEntries, ...productEntries, ...journalEntries];

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
	.flatMap((locale) => allEntries.map((entry) => ({ locale, ...entry })))
	.map(
		({ locale, path, priority, changefreq, lastmod }) =>
			`\t<url>\n\t\t<loc>${siteUrl}/${locale}/${path}</loc>\n\t\t${alternatesFor(path)}\n\t\t<lastmod>${lastmod ?? buildDate}</lastmod>\n\t\t<changefreq>${changefreq}</changefreq>\n\t\t<priority>${priority}</priority>\n\t</url>`
	)
	.join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

const repoRoot = join(import.meta.dir, '..');
const outDir = join(repoRoot, 'build');
writeFileSync(join(outDir, 'sitemap.xml'), sitemap);

// robots.txt has a single source of truth at static/robots.txt (copied here
// verbatim by vite build already); re-copying after this script keeps the
// two from ever drifting apart even if build/ was produced from a stale run.
copyFileSync(join(repoRoot, 'static', 'robots.txt'), join(outDir, 'robots.txt'));

// llms.txt - same idea, hand-maintained once at static/llms.txt.
copyFileSync(join(repoRoot, 'static', 'llms.txt'), join(outDir, 'llms.txt'));

console.log(
	`✓ Generated build/sitemap.xml with ${locales.length * allEntries.length} URLs.`
);
console.log('✓ Synced build/robots.txt and build/llms.txt from static/.');
