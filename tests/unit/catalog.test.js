import { describe, it, expect } from 'vitest';
import {
	getPublicProducts,
	getProductBySlug,
	getProductBySku,
	filterProducts,
	getRelatedProducts,
	getFeaturedProducts,
	localizeText
} from '$lib/services/catalog.js';

describe('getPublicProducts', () => {
	it('excludes hidden products', () => {
		const products = getPublicProducts();
		expect(products.every((p) => p.status !== 'hidden')).toBe(true);
		expect(products.length).toBeGreaterThan(0);
	});
});

describe('getProductBySlug / getProductBySku', () => {
	it('finds a known product by slug', () => {
		const product = getProductBySlug('white-beaded-coin-purse');
		expect(product?.sku).toBe('AAA000001');
	});

	it('finds a known product by SKU, case-insensitively', () => {
		expect(getProductBySku('aaa000001')?.slug).toBe('white-beaded-coin-purse');
		expect(getProductBySku('AAA000001')?.slug).toBe('white-beaded-coin-purse');
	});

	it('resolves legacy SKUs through the alias map', () => {
		expect(getProductBySku('BAG-001')?.slug).toBe('white-beaded-coin-purse');
		expect(getProductBySku('br-013')?.slug).toBe('white-pearl-large-small-bracelet');
	});

	it('returns null for unknown slug/SKU', () => {
		expect(getProductBySlug('does-not-exist')).toBeNull();
		expect(getProductBySku('ZZZ-999')).toBeNull();
		expect(getProductBySku('AAA999999')).toBeNull();
	});
});

describe('filterProducts', () => {
	const products = getPublicProducts();

	it('filters by a single category (OR-union of one)', () => {
		const result = filterProducts(products, { category: ['bags'] });
		expect(result.every((p) => p.categories.includes('bags'))).toBe(true);
		expect(result.length).toBeGreaterThan(0);
	});

	it('unions multiple categories', () => {
		const bags = filterProducts(products, { category: ['bags'] });
		const knitted = filterProducts(products, { category: ['knitted'] });
		const both = filterProducts(products, { category: ['bags', 'knitted'] });
		expect(both.length).toBeGreaterThanOrEqual(bags.length);
		expect(both.length).toBeGreaterThanOrEqual(knitted.length);
		for (const p of [...bags, ...knitted]) expect(both).toContain(p);
	});

	it('lists a multi-category product under each of its categories', () => {
		const product = getProductBySlug('white-beaded-coin-purse');
		expect(product?.categories.length).toBeGreaterThan(1);
		for (const id of product?.categories ?? []) {
			expect(filterProducts(products, { category: [id] })).toContain(product);
		}
	});

	it('treats an empty category array as no filter', () => {
		expect(filterProducts(products, { category: [] })).toHaveLength(products.length);
	});

	it('filters by status', () => {
		const result = filterProducts(products, { status: 'available' });
		expect(result.every((p) => p.status === 'available')).toBe(true);
		expect(result.length).toBeGreaterThan(0);
	});

	it('returns everything when no filters are set', () => {
		expect(filterProducts(products, {})).toHaveLength(products.length);
	});
});

describe('getRelatedProducts', () => {
	it('resolves related SKUs to products', () => {
		const product = getProductBySlug('white-beaded-coin-purse');
		const related = getRelatedProducts(product);
		expect(related.length).toBeGreaterThan(0);
		expect(related.every((p) => p !== null)).toBe(true);
	});

	it('returns an empty array when there are no related SKUs', () => {
		expect(getRelatedProducts(null)).toEqual([]);
	});
});

describe('getFeaturedProducts', () => {
	it('only returns products flagged as featured, sorted by featuredOrder', () => {
		const featured = getFeaturedProducts();
		expect(featured.every((p) => p.featured)).toBe(true);
		const orders = featured.map((p) => p.featuredOrder ?? 999);
		expect(orders).toEqual([...orders].sort((a, b) => a - b));
	});
});

describe('localizeText', () => {
	it('returns the requested locale when present', () => {
		expect(localizeText({ en: 'Hello', pt: 'Olá' }, 'pt')).toBe('Olá');
	});

	it('falls back to English when the locale is missing', () => {
		expect(localizeText({ en: 'Hello' }, 'ru')).toBe('Hello');
	});

	it('returns empty string for missing text', () => {
		expect(localizeText(undefined, 'en')).toBe('');
	});
});
