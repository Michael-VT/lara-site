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

	/** @type {{ product: import('$lib/schemas/product.js').Product, eager?: boolean }} */
	let { product, eager = false } = $props();

	let locale = $derived(page.data.locale);
	let title = $derived(localizeText(product.title, locale));
	let category = $derived(getCategory(product.category));
	let detailsHref = $derived(toHref(`/${locale}/products/${product.slug}/`));
	let meta = $derived(
		`${category ? `${t(category.messageKey, {}, { locale })} · ` : ''}${m.common_sku({}, { locale })}: ${product.sku}`
	);
</script>

<article
	class="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
>
	<a href={detailsHref} class="block touch-manipulation overflow-hidden">
		<img
			src={product.images[0].thumb ?? product.images[0].src}
			alt={localizeText(product.images[0].alt, locale)}
			width={product.images[0].width}
			height={product.images[0].height}
			loading={eager ? 'eager' : 'lazy'}
			class="aspect-square w-full bg-background object-contain transition-transform duration-500 group-hover:scale-[1.03]"
		/>
	</a>

	<div class="flex flex-1 flex-col gap-2 p-3.5 sm:p-4">
		<a
			href={detailsHref}
			class="flex min-h-11 touch-manipulation items-center py-1 font-display text-lg leading-snug text-foreground"
		>
			{title}
		</a>

		<p class="text-xs text-muted-foreground">{meta}</p>

		<div class="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
			<ProductStatusBadge status={product.status} />
			<PriceDisplay price={product.price} class="text-sm font-semibold text-foreground" />
		</div>

		<div
			class="mt-auto flex flex-wrap items-end justify-between gap-x-3 gap-y-2 border-t border-border pt-3"
		>
			<a
				href={detailsHref}
				class="group/link inline-flex min-h-11 touch-manipulation flex-col items-start justify-center gap-1.5 text-sm font-medium text-accent"
			>
				<span>{m.common_viewDetails({}, { locale })}</span>
				<span
					class="bead-rule w-0 text-accent transition-[width] duration-300 group-hover/link:w-6 group-focus-visible/link:w-6"
					aria-hidden="true"
				></span>
			</a>
			<OrderButton sku={product.sku} sold={product.status === 'sold'} />
		</div>
	</div>
</article>
