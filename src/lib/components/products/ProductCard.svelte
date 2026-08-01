<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import { localizeText } from '$lib/services/catalog.js';
	import { getCategory } from '$lib/content/categories.js';
	import { toHref } from '$lib/utils/href.js';
	import ProductStatusBadge from './ProductStatusBadge.svelte';
	import PriceDisplay from './PriceDisplay.svelte';
	import OrderButton from './OrderButton.svelte';

	/** @type {{ product: import('$lib/schemas/product.js').Product }} */
	let { product } = $props();

	let locale = $derived(page.data.locale);
	let title = $derived(localizeText(product.title, locale));
	let category = $derived(getCategory(product.category));
	let detailsHref = $derived(toHref(`/${locale}/products/${product.slug}/`));
</script>

<article
	class="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface"
>
	<a href={detailsHref} class="block touch-manipulation">
		<img
			src={product.images[0].thumb ?? product.images[0].src}
			alt={localizeText(product.images[0].alt, locale)}
			width={product.images[0].width}
			height={product.images[0].height}
			loading="lazy"
			class="aspect-square w-full object-cover"
		/>
	</a>

	<div class="flex flex-1 flex-col gap-2 p-4">
		<div class="flex items-start justify-between gap-2">
			<a
				href={detailsHref}
				class="font-display text-base font-medium text-foreground hover:underline"
			>
				{title}
			</a>
			<ProductStatusBadge status={product.status} />
		</div>

		<p class="text-xs text-muted-foreground">
			{#if category}{t(category.messageKey, {}, { locale })} &middot;
			{/if}{m.common_sku({}, { locale })}: {product.sku}
		</p>

		<PriceDisplay price={product.price} class="text-sm font-medium text-foreground" />

		<div class="mt-auto flex items-center justify-between gap-3 pt-2">
			<a href={detailsHref} class="text-sm font-medium text-accent hover:underline">
				{m.common_viewDetails({}, { locale })}
			</a>
			<OrderButton sku={product.sku} sold={product.status === 'sold'} />
		</div>
	</div>
</article>
