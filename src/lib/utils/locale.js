import { locales, defaultLocale } from '$lib/config/site.js';

/**
 * Maps a single BCP-47 language tag to one of the site's supported locales.
 * @param {string} tag
 * @returns {import('$lib/config/site.js').Locale}
 */
export function mapLanguageTag(tag) {
	const lower = String(tag ?? '').toLowerCase();
	if (lower.startsWith('pt')) return 'pt';
	if (lower.startsWith('uk')) return 'uk';
	if (lower.startsWith('ru')) return 'ru';
	if (lower.startsWith('en')) return 'en';
	return defaultLocale;
}

/**
 * Resolves the locale to redirect to from the root gateway route, following:
 * 1. a previously stored explicit choice
 * 2. the browser's preferred languages
 * 3. the default locale
 * @param {{ stored?: string | null, browserLanguages?: readonly string[] | null }} params
 * @returns {import('$lib/config/site.js').Locale}
 */
export function resolveLocale({ stored, browserLanguages }) {
	if (stored && /** @type {string[]} */ (locales).includes(stored)) {
		return /** @type {import('$lib/config/site.js').Locale} */ (stored);
	}

	for (const tag of browserLanguages ?? []) {
		const mapped = mapLanguageTag(tag);
		if (mapped !== defaultLocale) return mapped;
	}

	if (browserLanguages && browserLanguages.length > 0) {
		return mapLanguageTag(browserLanguages[0]);
	}

	return defaultLocale;
}

/**
 * Persists an explicit language choice so the next visit to `/` lands on it:
 * localStorage for fallback, and a cookie because the edge redirect in
 * `worker/index.js` runs before any JS loads and can only read cookies.
 * @param {import('$lib/config/site.js').Locale} locale
 */
export function persistLocaleChoice(locale) {
	try {
		localStorage.setItem('locale', locale);
	} catch {
		// localStorage may be unavailable (private browsing, disabled storage) — safe to ignore.
	}
	try {
		// 1 year, all paths, Lax is enough since this never needs to be sent cross-site.
		document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
	} catch {
		// document.cookie can throw under strict privacy settings — safe to ignore.
	}
}

/**
 * Reads a query parameter from `url`, safely returning `null` while a page
 * is being prerendered (SvelteKit disallows reading query state then, since
 * a statically-generated page can't vary by query string).
 * @param {URL} url
 * @param {string} key
 * @returns {string | null}
 */
export function getSearchParam(url, key) {
	try {
		return url.searchParams.get(key);
	} catch {
		return null;
	}
}

/**
 * Rewrites the leading /{locale}/ segment of a path to a new locale,
 * preserving the rest of the path (and query string, if included).
 * @param {string} pathname
 * @param {import('$lib/config/site.js').Locale} toLocale
 * @returns {string}
 */
export function switchLocaleInPath(pathname, toLocale) {
	const segments = pathname.split('/').filter(Boolean);
	if (segments.length > 0 && /** @type {string[]} */ (locales).includes(segments[0])) {
		segments[0] = toLocale;
	} else {
		segments.unshift(toLocale);
	}
	return `/${segments.join('/')}/`;
}

/**
 * Builds the href to switch the current page to another locale, preserving
 * the path (including product slug) and query string (including a `sku`
 * param on the ordering page).
 * @param {URL} url
 * @param {import('$lib/config/site.js').Locale} toLocale
 * @returns {string}
 */
export function buildLocaleSwitchHref(url, toLocale) {
	// `url.search` is inaccessible while a page is being prerendered (SvelteKit
	// disallows reading query state for statically-generated output), but is
	// safe to read once hydrated in the browser, which is when it matters for
	// preserving catalog filters / the `sku` param across a language switch.
	let search;
	try {
		search = url.search;
	} catch {
		search = '';
	}
	return `${switchLocaleInPath(url.pathname, toLocale)}${search}`;
}
