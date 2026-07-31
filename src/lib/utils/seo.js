import { locales, siteUrl } from '$lib/config/site.js';
import { switchLocaleInPath } from '$lib/utils/locale.js';

/**
 * @param {string} pathname
 * @returns {{ hreflang: string, href: string }[]}
 */
export function buildHreflangAlternates(pathname) {
	/** @type {{ hreflang: string, href: string }[]} */
	const alternates = locales.map((locale) => ({
		hreflang: locale,
		href: `${siteUrl}${switchLocaleInPath(pathname, locale)}`
	}));

	alternates.push({
		hreflang: 'x-default',
		href: `${siteUrl}${switchLocaleInPath(pathname, 'en')}`
	});
	return alternates;
}

/** @param {string} pathname */
export function buildCanonical(pathname) {
	return `${siteUrl}${pathname}`;
}
