import { error } from '@sveltejs/kit';
import { getProductBySlug, getRelatedProducts } from '$lib/services/catalog.js';

export const prerender = true;

export function load({ params }) {
	const product = getProductBySlug(params.slug);
	if (!product) {
		error(404, 'Product not found');
	}

	return {
		product,
		related: getRelatedProducts(product)
	};
}
