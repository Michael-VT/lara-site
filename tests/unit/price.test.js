import { describe, it, expect } from 'vitest';
import { formatPrice } from '$lib/utils/price.js';

const labels = {
	onRequestLabel: 'Price on request',
	/** @param {string} amount */
	fromLabel: (amount) => `from ${amount}`
};

describe('formatPrice', () => {
	it('returns null when there is no price', () => {
		expect(formatPrice(undefined, 'en', labels)).toBeNull();
	});

	it('formats on_request', () => {
		expect(formatPrice({ mode: 'on_request' }, 'en', labels)).toBe('Price on request');
	});

	it('formats a fixed EUR price', () => {
		const result = formatPrice({ mode: 'fixed', amount: 22, currency: 'EUR' }, 'en', labels);
		expect(result).toContain('22');
		expect(result).toMatch(/€/);
	});

	it('formats a "from" price using the fromLabel', () => {
		const result = formatPrice({ mode: 'from', amount: 35, currency: 'EUR' }, 'en', labels);
		expect(result?.startsWith('from ')).toBe(true);
		expect(result).toContain('35');
	});

	it('formats consistently across all four locales', () => {
		/** @type {import('$lib/config/site.js').Locale[]} */
		const testLocales = ['en', 'pt', 'uk', 'ru'];
		for (const locale of testLocales) {
			const result = formatPrice({ mode: 'fixed', amount: 10, currency: 'EUR' }, locale, labels);
			expect(result).toContain('10');
		}
	});

	it('drops decimals for whole-euro amounts', () => {
		const result = formatPrice(
			{ mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },
			'en',
			labels
		);
		expect(result).not.toContain('.00');
		expect(result).toContain('8');
	});
});
