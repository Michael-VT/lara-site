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

<div
	class="flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-card sm:gap-5 sm:p-5"
>
	<img
		src={product.images[0].src}
		alt={localizeText(product.images[0].alt, locale)}
		width="80"
		height="80"
		class="h-20 w-20 shrink-0 rounded-control border border-border bg-background object-contain"
	/>
	<div class="min-w-0">
		<p class="eyebrow text-accent">{m.order_askingAbout({}, { locale })}</p>
		<p class="mt-2 font-display text-lg text-foreground sm:text-xl">{title}</p>
		<p class="mt-1 text-sm text-accent">
			{m.common_sku({}, { locale })}: <span class="font-medium">{product.sku}</span>
		</p>
		<div class="mt-2"><ProductStatusBadge status={product.status} /></div>
	</div>
</div>
