/**
 * @typedef {'en' | 'pt' | 'uk' | 'ru'} Locale
 */

/** @type {Locale[]} */
export const locales = ['en', 'pt', 'uk', 'ru'];

/** @type {Locale} */
export const defaultLocale = 'en';

/** @type {Record<Locale, string>} */
export const localeNames = Object.freeze({
	en: 'English',
	pt: 'Português',
	uk: 'Українська',
	ru: 'Русский'
});

/** @type {Record<string, Locale>} */
export const browserLocaleMap = Object.freeze({
	pt: 'pt',
	uk: 'uk',
	ru: 'ru',
	en: 'en'
});

export const siteName = 'IX Lara Handmade';

/**
 * Public base URL used for canonical/OG/sitemap generation.
 */
export const siteUrl = 'https://larise.art';

export const isDemoContent = false;
