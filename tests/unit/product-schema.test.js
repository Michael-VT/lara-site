import { describe, it, expect } from 'vitest';
import { productSchema } from '$lib/schemas/product.js';

const base = {
	sku: 'BAG-100',
	slug: 'valid-product',
	category: 'bags',
	status: 'available',
	title: { en: 'Title' },
	description: { en: 'Description' },
	images: [{ src: '/x.jpg', width: 100, height: 100, alt: { en: 'alt' } }]
};

describe('productSchema', () => {
	it('accepts a minimal valid product', () => {
		expect(() => productSchema.parse(base)).not.toThrow();
	});

	it('rejects an invalid SKU', () => {
		expect(() => productSchema.parse({ ...base, sku: 'bad sku' })).toThrow();
	});

	it('rejects a missing English title', () => {
		// eslint-disable-next-line no-unused-vars
		const { title, ...rest } = base;
		expect(() => productSchema.parse(rest)).toThrow();
	});

	it('rejects an unsupported category', () => {
		expect(() => productSchema.parse({ ...base, category: 'shoes' })).toThrow();
	});

	it('rejects an unsupported status', () => {
		expect(() => productSchema.parse({ ...base, status: 'reserved' })).toThrow();
	});

	it('rejects a product with no images', () => {
		expect(() => productSchema.parse({ ...base, images: [] })).toThrow();
	});

	it('rejects an invalid slug', () => {
		expect(() => productSchema.parse({ ...base, slug: 'Not Valid Slug!' })).toThrow();
	});

	it('accepts on_request price without amount', () => {
		expect(() => productSchema.parse({ ...base, price: { mode: 'on_request' } })).not.toThrow();
	});

	it('rejects a fixed price without an amount', () => {
		expect(() =>
			productSchema.parse({ ...base, price: { mode: 'fixed', currency: 'EUR' } })
		).toThrow();
	});
});
