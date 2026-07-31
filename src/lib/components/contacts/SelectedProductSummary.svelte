<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeText } from '$lib/services/catalog.js';
	import ProductStatusBadge from '$lib/components/products/ProductStatusBadge.svelte';

	/** @type {{ product: import('$lib/schemas/product.js').Product }} */
	let { product } = $props();

	let locale = $derived(page.data.locale);
	let title = $derived(localizeText(product.title, locale));
</script>

<div class="flex items-center gap-4 rounded-card border border-border bg-surface p-4">
	<img
		src={product.images[0].src}
		alt={localizeText(product.images[0].alt, locale)}
		width="80"
		height="80"
		class="h-20 w-20 shrink-0 rounded-control object-cover"
	/>
	<div>
		<p class="text-sm text-muted-foreground">{m.order_askingAbout({}, { locale })}</p>
		<p class="font-medium text-foreground">{title}</p>
		<p class="text-sm text-muted-foreground">{m.common_sku({}, { locale })}: {product.sku}</p>
		<div class="mt-1"><ProductStatusBadge status={product.status} /></div>
	</div>
</div>
