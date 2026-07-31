import { getPublicProducts } from '$lib/services/catalog.js';

export const prerender = true;

export function load() {
	return { products: getPublicProducts() };
}
