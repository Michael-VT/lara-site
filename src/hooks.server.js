import { locales, defaultLocale } from '$lib/config/site.js';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const segment = event.url.pathname.split('/')[1];
	const locale = /** @type {string[]} */ (locales).includes(segment) ? segment : defaultLocale;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<html lang="en">', `<html lang="${locale}">`)
	});
}
