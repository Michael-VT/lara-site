<script>
	import ProductCard from './ProductCard.svelte';

	/** @type {{ products: import('$lib/schemas/product.js').Product[] }} */
	let { products } = $props();
</script>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each products as product (product.sku)}
		<ProductCard {product} />
	{/each}
</div>
