import { describe, it, expect } from 'vitest';
import { buildProductEnquiryMessage, buildEmailSubject } from '$lib/services/order-message.js';
import { getProductBySku } from '$lib/services/catalog.js';

/** @type {import('$lib/config/site.js').Locale[]} */
const locales = ['en', 'pt', 'uk', 'ru'];

describe('buildProductEnquiryMessage', () => {
	const available = getProductBySku('BAG-001');
	if (!available) throw new Error('Fixture product BAG-001 not found');

	// Synthetic fixture: the current catalog has no real sold item, so the
	// sold-wording behavior is tested against a constructed object rather
	// than asserting a false "sold" status on a real product.
	const sold = { ...available, sku: 'BAG-999', status: /** @type {const} */ ('sold') };

	it('generates a message for every locale for an available product', () => {
		for (const locale of locales) {
			const message = buildProductEnquiryMessage({ product: available, locale });
			expect(message).toContain('BAG-001');
			expect(message.length).toBeGreaterThan(0);
		}
	});

	it('uses "similar item" wording for a sold product', () => {
		const message = buildProductEnquiryMessage({ product: sold, locale: 'en' });
		expect(message).toContain('similar');
		expect(message).toContain('BAG-999');
	});

	it('does not use similar-item wording for an available product', () => {
		const message = buildProductEnquiryMessage({ product: available, locale: 'en' });
		expect(message).not.toContain('similar to');
	});

	it('asks about the price when the price is "on request"', () => {
		expect(available.price?.mode).toBe('on_request');
		const message = buildProductEnquiryMessage({ product: available, locale: 'en' });
		expect(message).toContain('price');
	});

	it('does not ask about the price when a fixed price is set', () => {
		const fixed = {
			...available,
			price: /** @type {const} */ ({ mode: 'fixed', amount: 20, currency: 'EUR' })
		};
		const message = buildProductEnquiryMessage({ product: fixed, locale: 'en' });
		expect(message).not.toContain('price');
	});
});

describe('buildEmailSubject', () => {
	it('includes the SKU when provided', () => {
		expect(buildEmailSubject({ sku: 'BAG-001', locale: 'en' })).toContain('BAG-001');
	});

	it('falls back to a generic subject without a SKU', () => {
		const subject = buildEmailSubject({ sku: null, locale: 'en' });
		expect(subject.length).toBeGreaterThan(0);
		expect(subject).not.toContain('undefined');
	});
});
