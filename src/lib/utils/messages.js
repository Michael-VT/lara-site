import { m } from '$lib/paraglide/messages.js';

/**
 * Looks up and calls a paraglide message function by a dynamically-computed
 * key (e.g. a category or status label key stored in content/config data).
 * A plain `m[key](...)` triggers a "implicit any" error under `checkJs`
 * because `m`'s type only has statically-known string keys.
 * @param {string} key
 * @param {...any} args
 * @returns {string}
 */
export function t(key, ...args) {
	return /** @type {any} */ (m)[key](...args);
}

/**
 * Picks the CLDR-correct plural message key for a count in the given locale
 * (en/pt distinguish one/other; ru/uk use one/few/many). `prefix` selects
 * which `<prefix>_count*` message family to use (e.g. 'catalog', 'journal').
 * @param {import('$lib/config/site.js').Locale} locale
 * @param {number} count
 * @param {string} [prefix]
 * @returns {string}
 */
export function pluralCountKey(locale, count, prefix = 'catalog') {
	if (locale === 'ru' || locale === 'uk') {
		const mod10 = count % 10;
		const mod100 = count % 100;
		if (mod10 === 1 && mod100 !== 11) return `${prefix}_countOne`;
		if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `${prefix}_countFew`;
		return `${prefix}_count`;
	}
	return count === 1 ? `${prefix}_countOne` : `${prefix}_count`;
}
