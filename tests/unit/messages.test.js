import { describe, it, expect } from 'vitest';
import { m } from '$lib/paraglide/messages.js';
import { t } from '$lib/utils/messages.js';

/** @type {import('$lib/config/site.js').Locale[]} */
const locales = ['en', 'pt', 'uk', 'ru'];

describe('message locale plumbing', () => {
	it('m.<name>({}, { locale }) resolves per-locale text for a zero-input message', () => {
		// Regression test: calling m.nav_home({ locale }) (locale merged into the
		// first/"inputs" argument instead of passed as a separate options object)
		// silently ignores the locale and always falls back to the base locale.
		const results = locales.map((locale) => m.nav_home({}, { locale }));
		expect(new Set(results).size).toBe(locales.length);
	});

	it('t(key, {}, { locale }) resolves per-locale text through the dynamic-key helper', () => {
		const results = locales.map((locale) => t('nav_home', {}, { locale }));
		expect(new Set(results).size).toBe(locales.length);
	});

	it('a message called with locale only in the first argument stays on the base locale (documents the pitfall)', () => {
		// Intentionally calling with the wrong argument shape — locale merged into
		// the "inputs" object instead of passed as a separate options argument.
		const results = locales.map((locale) => m.nav_home(/** @type {any} */ ({ locale })));
		expect(new Set(results).size).toBe(1);
	});
});
