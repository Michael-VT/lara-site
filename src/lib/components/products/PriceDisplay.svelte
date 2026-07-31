<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { formatPrice } from '$lib/utils/price.js';

	/** @type {{ price: import('$lib/schemas/product.js').Price | undefined, class?: string }} */
	let { price, class: className = '' } = $props();

	let locale = $derived(page.data.locale);
	let formatted = $derived(
		formatPrice(price, locale, {
			onRequestLabel: m.product_priceOnRequest({}, { locale }),
			fromLabel: (amount) => m.product_priceFrom({ amount }, { locale })
		})
	);
</script>

{#if formatted}
	<span class={className}>{formatted}</span>
{/if}
