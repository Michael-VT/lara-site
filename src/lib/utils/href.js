import { resolve } from '$app/paths';

/**
 * Thin wrapper around SvelteKit's `resolve()` for internal links whose
 * pathname is built dynamically (e.g. `/${locale}/products/`), which can't
 * be expressed as a statically-typed route id.
 * @param {string} pathname
 */
export function toHref(pathname) {
	return resolve(/** @type {import('$app/types').Pathname} */ (pathname));
}

/**
 * Builds an href for a locale-prefixed nav item, avoiding a trailing double slash
 * when the item's path is empty (the home page).
 * @param {string} locale
 * @param {string} path
 */
export function buildNavHref(locale, path) {
	return toHref(path ? `/${locale}/${path}/` : `/${locale}/`);
}
