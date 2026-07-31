import { rawProducts } from '../content/products/index.js';
import { productSchema } from '../schemas/product.js';
import { normalizeSku } from '../utils/sku.js';

/**
 * Validates and parses raw product content. Throws on any schema violation,
 * which is what we want at build/test time — invalid content must fail loudly.
 */
function buildValidatedProducts() {
	const parsed = rawProducts.map((p) => productSchema.parse(p));

	const skuSeen = new Set();
	const slugSeen = new Set();
	for (const p of parsed) {
		const sku = normalizeSku(p.sku);
		if (skuSeen.has(sku)) throw new Error(`Duplicate SKU: ${p.sku}`);
		skuSeen.add(sku);

		if (slugSeen.has(p.slug)) throw new Error(`Duplicate slug: ${p.slug}`);
		slugSeen.add(p.slug);
	}

	for (const p of parsed) {
		for (const related of p.relatedSkus ?? []) {
			if (!skuSeen.has(normalizeSku(related))) {
				throw new Error(`Product ${p.sku} references unknown related SKU: ${related}`);
			}
		}
	}

	return parsed;
}

/** All validated products, including hidden ones. */
export const allProducts = buildValidatedProducts();

/** Products eligible for public routes, catalog, sitemap and search. */
export function getPublicProducts() {
	return allProducts.filter((p) => p.status !== 'hidden');
}

/** @param {string} slug */
export function getProductBySlug(slug) {
	return getPublicProducts().find((p) => p.slug === slug) ?? null;
}

/** @param {string} sku */
export function getProductBySku(sku) {
	const normalized = normalizeSku(sku);
	return getPublicProducts().find((p) => normalizeSku(p.sku) === normalized) ?? null;
}

/**
 * @param {ReturnType<typeof getPublicProducts>} products
 * @param {{ category?: string | null, status?: string | null }} filters
 */
export function filterProducts(products, filters) {
	return products.filter((p) => {
		if (filters.category && p.category !== filters.category) return false;
		if (filters.status && p.status !== filters.status) return false;
		return true;
	});
}

/**
 * @param {import('$lib/schemas/product.js').Product | null} p
 * @returns {p is import('$lib/schemas/product.js').Product}
 */
function isPublicProduct(p) {
	return p !== null && p.status !== 'hidden';
}

/** @param {ReturnType<typeof getProductBySlug>} product */
export function getRelatedProducts(product) {
	if (!product?.relatedSkus?.length) return [];
	return product.relatedSkus.map((sku) => getProductBySku(sku)).filter(isPublicProduct);
}

export function getFeaturedProducts() {
	return getPublicProducts()
		.filter((p) => p.featured)
		.sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
}

/**
 * Resolves a localized text field with the required fallback order:
 * requested locale -> English.
 * @param {import('$lib/schemas/product.js').LocalizedText | undefined} text
 * @param {import('$lib/config/site.js').Locale} locale
 */
export function localizeText(text, locale) {
	if (!text) return '';
	return text[locale] ?? text.en ?? '';
}
