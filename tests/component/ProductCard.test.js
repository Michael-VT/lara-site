import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ProductCard from '$lib/components/products/ProductCard.svelte';

/** @type {import('$lib/schemas/product.js').Product} */
const baseProduct = {
	sku: 'BAG-001',
	slug: 'ocean-beaded-bag',
	category: 'bags',
	status: 'available',
	title: { en: 'Ocean beaded bag' },
	description: { en: 'A bag.' },
	images: [{ src: '/x.jpg', width: 100, height: 100, alt: { en: 'alt' } }]
};

describe('ProductCard', () => {
	it('shows title, SKU, status and an Order action', () => {
		render(ProductCard, { props: { product: baseProduct } });

		expect(screen.getByText('Ocean beaded bag')).toBeInTheDocument();
		expect(screen.getByText(/BAG-001/)).toBeInTheDocument();
		expect(screen.getByText('Ready to ship')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Order' })).toBeInTheDocument();
	});

	it('renders without a broken layout when optional fields are missing', () => {
		const { container } = render(ProductCard, { props: { product: baseProduct } });
		expect(container.querySelector('article')).toBeInTheDocument();
	});

	it('marks a sold product as sold, not available', () => {
		render(ProductCard, { props: { product: { ...baseProduct, status: 'sold' } } });
		expect(screen.getByText('Sold')).toBeInTheDocument();
		expect(screen.queryByText('Ready to ship')).not.toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Order a similar item' })).toBeInTheDocument();
	});
});
