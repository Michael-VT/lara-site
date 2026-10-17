/**
 * Cloudflare Worker in front of the static build. Its only job beyond
 * serving assets is redirecting the bare `/` gateway to the right locale
 * at the edge (HTTP 302), before any HTML/JS ships — the old approach
 * redirected via client-side JS in `src/routes/+page.svelte`, which Lighthouse
 * flags as a "client-side redirect" and which delays the first real paint.
 *
 * Locale choice priority mirrors `src/lib/utils/locale.js`'s `resolveLocale`:
 * 1. an explicit prior choice, carried here via the `locale` cookie (set by
 *    LanguageSwitcher/MobileNavigation — localStorage can't be read here)
 * 2. the `Accept-Language` request header
 * 3. the default locale
 */

const SUPPORTED_LOCALES = ['en', 'pt', 'uk', 'ru'];
const DEFAULT_LOCALE = 'en';

/** @param {string} tag */
function mapLanguageTag(tag) {
	const lower = String(tag ?? '').toLowerCase();
	if (lower.startsWith('pt')) return 'pt';
	if (lower.startsWith('uk')) return 'uk';
	if (lower.startsWith('ru')) return 'ru';
	if (lower.startsWith('en')) return 'en';
	return null;
}

/** @param {Request} request */
function resolveLocale(request) {
	const cookieHeader = request.headers.get('cookie') ?? '';
	const cookieMatch = cookieHeader.match(/(?:^|;\s*)locale=([a-z]{2})/);
	if (cookieMatch && SUPPORTED_LOCALES.includes(cookieMatch[1])) {
		return cookieMatch[1];
	}

	const acceptLanguage = request.headers.get('accept-language') ?? '';
	const tags = acceptLanguage
		.split(',')
		.map((part) => part.split(';')[0].trim())
		.filter(Boolean);
	for (const tag of tags) {
		const mapped = mapLanguageTag(tag);
		if (mapped) return mapped;
	}

	return DEFAULT_LOCALE;
}

export default {
	/**
	 * @param {Request} request
	 * @param {{ ASSETS: { fetch: (request: Request) => Promise<Response> } }} env
	 */
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname === '/') {
			const locale = resolveLocale(request);
			return new Response(null, {
				status: 302,
				headers: {
					Location: `${url.origin}/${locale}/`,
					// Varies per visitor (cookie/Accept-Language) — never cache this hop.
					'Cache-Control': 'private, no-store'
				}
			});
		}

		return env.ASSETS.fetch(request);
	}
};
