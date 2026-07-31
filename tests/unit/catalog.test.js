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
		expect(product?.sku).toBe('BAG-001');
	});

	it('finds a known product by SKU, case-insensitively', () => {
		expect(getProductBySku('bag-001')?.slug).toBe('white-beaded-coin-purse');
		expect(getProductBySku('BAG-001')?.slug).toBe('white-beaded-coin-purse');
	});

	it('returns null for unknown slug/SKU', () => {
		expect(getProductBySlug('does-not-exist')).toBeNull();
		expect(getProductBySku('ZZZ-999')).toBeNull();
	});
});

describe('filterProducts', () => {
	const products = getPublicProducts();

	it('filters by category', () => {
		const result = filterProducts(products, { category: 'bags' });
		expect(result.every((p) => p.category === 'bags')).toBe(true);
		expect(result.length).toBeGreaterThan(0);
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
