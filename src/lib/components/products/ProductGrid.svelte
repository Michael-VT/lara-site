<script>
	import ProductCard from './ProductCard.svelte';

	/** @type {{ products: import('$lib/schemas/product.js').Product[] }} */
	let { products } = $props();
</script>

<div class="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
	{#each products as product, i (product.sku)}
		<ProductCard {product} eager={i < 4} />
	{/each}
</div>
