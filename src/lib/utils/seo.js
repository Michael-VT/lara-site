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

/** @type {Record<import('$lib/config/site.js').Locale, string>} */
const OG_LOCALE_MAP = {
	en: 'en_US',
	pt: 'pt_PT',
	uk: 'uk_UA',
	ru: 'ru_RU'
};

/**
 * og:locale wants an underscore-joined language_TERRITORY tag, not the bare
 * two-letter locale code used elsewhere in the app.
 * @param {import('$lib/config/site.js').Locale} locale
 */
export function ogLocale(locale) {
	return OG_LOCALE_MAP[locale] ?? locale;
}

/**
 * Builds a schema.org BreadcrumbList JSON-LD object from an ordered list of
 * {name, path} entries (path is site-relative, e.g. `/en/products/`).
 * Shared by every page that renders a visible breadcrumb trail, so the
 * JSON-LD can't drift from the markup.
 * @param {{ name: string, path: string }[]} items
 */
export function buildBreadcrumbLd(items) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: `${siteUrl}${item.path}`
		}))
	};
}
