import { getFeaturedProducts, filterProducts, getPublicProducts } from '$lib/services/catalog.js';

export const prerender = true;

export function load() {
	const products = getPublicProducts();
	return {
		featured: getFeaturedProducts(),
		available: filterProducts(products, { status: 'available' }).slice(0, 4),
		madeToOrder: filterProducts(products, { status: 'made_to_order' }).slice(0, 4)
	};
}
