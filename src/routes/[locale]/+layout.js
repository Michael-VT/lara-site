import { error } from '@sveltejs/kit';
import { locales } from '$lib/config/site.js';

export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export function load({ params }) {
	if (!(/** @type {string[]} */ (locales).includes(params.locale))) {
		error(404, 'Not found');
	}

	return {
		/** @type {import('$lib/config/site.js').Locale} */
		locale: /** @type {import('$lib/config/site.js').Locale} */ (params.locale)
	};
}
