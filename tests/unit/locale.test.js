import { describe, it, expect } from 'vitest';
import { mapLanguageTag, resolveLocale, switchLocaleInPath } from '$lib/utils/locale.js';

describe('mapLanguageTag', () => {
	it('maps pt variants', () => {
		expect(mapLanguageTag('pt')).toBe('pt');
		expect(mapLanguageTag('pt-PT')).toBe('pt');
		expect(mapLanguageTag('pt-BR')).toBe('pt');
	});

	it('maps uk and ru', () => {
		expect(mapLanguageTag('uk-UA')).toBe('uk');
		expect(mapLanguageTag('ru-RU')).toBe('ru');
	});

	it('falls back to en for anything else', () => {
		expect(mapLanguageTag('fr-FR')).toBe('en');
		expect(mapLanguageTag('de')).toBe('en');
	});
});

describe('resolveLocale', () => {
	it('prefers a stored explicit choice', () => {
		expect(resolveLocale({ stored: 'ru', browserLanguages: ['en-US'] })).toBe('ru');
	});

	it('ignores an invalid stored value', () => {
		expect(resolveLocale({ stored: 'xx', browserLanguages: ['uk-UA'] })).toBe('uk');
	});

	it('falls back to browser languages when nothing stored', () => {
		expect(resolveLocale({ stored: null, browserLanguages: ['pt-PT', 'en-US'] })).toBe('pt');
	});

	it('falls back to English by default', () => {
		expect(resolveLocale({ stored: null, browserLanguages: [] })).toBe('en');
		expect(resolveLocale({ stored: null, browserLanguages: null })).toBe('en');
	});
});

describe('switchLocaleInPath', () => {
	it('replaces the leading locale segment', () => {
		expect(switchLocaleInPath('/en/products/ocean-beaded-bag/', 'pt')).toBe(
			'/pt/products/ocean-beaded-bag/'
		);
	});

	it('preserves nested paths', () => {
		expect(switchLocaleInPath('/en/how-to-order/', 'ru')).toBe('/ru/how-to-order/');
	});

	it('prepends a locale when missing', () => {
		expect(switchLocaleInPath('/products/', 'uk')).toBe('/uk/products/');
	});
});
