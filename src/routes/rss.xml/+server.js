import { journalPosts } from '$lib/content/journal.js';
import { localizeText } from '$lib/services/catalog.js';
import { siteName, siteUrl, defaultLocale } from '$lib/config/site.js';

export const prerender = true;

/** @param {string} value */
function escapeXml(value) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export function GET() {
	const posts = journalPosts
		.filter((post) => post.body)
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date));

	const items = posts
		.map((post) => {
			const url = `${siteUrl}/${defaultLocale}/journal/${post.slug}/`;
			const title = escapeXml(localizeText(post.title, defaultLocale));
			const description = escapeXml(localizeText(post.excerpt, defaultLocale));
			const pubDate = new Date(post.date).toUTCString();
			return `\t\t<item>\n\t\t\t<title>${title}</title>\n\t\t\t<link>${url}</link>\n\t\t\t<guid>${url}</guid>\n\t\t\t<pubDate>${pubDate}</pubDate>\n\t\t\t<description>${description}</description>\n\t\t</item>`;
		})
		.join('\n');

	const lastBuildDate = posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n\t<channel>\n\t\t<title>${escapeXml(siteName)} - Journal</title>\n\t\t<link>${siteUrl}/${defaultLocale}/journal/</link>\n\t\t<description>Notes on handmade beadwork, crochet and knitted pieces, straight from the workshop.</description>\n\t\t<language>${defaultLocale}</language>\n\t\t<lastBuildDate>${lastBuildDate}</lastBuildDate>\n${items}\n\t</channel>\n</rss>\n`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
	});
}
