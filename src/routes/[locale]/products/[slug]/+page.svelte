<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import { localizeText } from '$lib/services/catalog.js';
	import { getCategory } from '$lib/content/categories.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';
	import JsonLd from '$lib/components/layout/JsonLd.svelte';
	import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
	import ProductGallery from '$lib/components/gallery/ProductGallery.svelte';
	import ProductStatusBadge from '$lib/components/products/ProductStatusBadge.svelte';
	import PriceDisplay from '$lib/components/products/PriceDisplay.svelte';
	import OrderButton from '$lib/components/products/OrderButton.svelte';
	import ProductGrid from '$lib/components/products/ProductGrid.svelte';

	let { data } = $props();
	let locale = $derived(page.data.locale);
	let product = $derived(data.product);
	let title = $derived(localizeText(product.title, locale));
	let category = $derived(getCategory(product.category));
	let sold = $derived(product.status === 'sold');

	/** @type {{ key: string, value: import('$lib/schemas/product.js').LocalizedText | undefined }[]} */
	let details = $derived(
		[
			{ key: 'product_materials', value: product.materials },
			{ key: 'product_dimensions', value: product.dimensions },
			{ key: 'product_colours', value: product.colours },
			{ key: 'product_care', value: product.care },
			{ key: 'product_customisation', value: product.customisation },
			{ key: 'product_productionTime', value: product.productionTime }
		].filter((d) => d.value)
	);

	let jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: title,
		sku: product.sku,
		category: category ? t(category.messageKey, {}, { locale }) : undefined,
		description: localizeText(product.description, locale),
		image: product.images.map((img) => img.src),
		offers:
			product.price && product.price.mode !== 'on_request'
				? {
						'@type': 'Offer',
						priceCurrency: product.price.currency,
						price: product.price.amount,
						availability:
							product.status === 'available'
								? 'https://schema.org/InStock'
								: product.status === 'made_to_order'
									? 'https://schema.org/PreOrder'
									: 'https://schema.org/SoldOut'
					}
				: undefined
	});
</script>

<SeoHead
	{title}
	description={localizeText(product.shortDescription ?? product.description, locale)}
	image={product.images[0].src}
/>
<JsonLd data={jsonLd} />

<div class="mx-auto max-w-content px-4 py-8 sm:px-6">
	<Breadcrumbs current={title} />

	<div class="mt-6 grid gap-10 lg:grid-cols-2">
		<ProductGallery images={product.images} />

		<div class="flex flex-col gap-4">
			<div class="flex items-start justify-between gap-3">
				<h1 class="font-display text-3xl text-foreground">{title}</h1>
				<ProductStatusBadge status={product.status} />
			</div>

			<p class="text-sm text-muted-foreground">
				{m.common_sku({}, { locale })}:
				<span class="font-medium text-foreground">{product.sku}</span>
				{#if category}
					&middot; {t(category.messageKey, {}, { locale })}
				{/if}
			</p>

			<PriceDisplay price={product.price} class="text-xl font-semibold text-foreground" />

			{#if sold}
				<p class="rounded-control bg-status-sold-bg px-3 py-2 text-sm text-status-sold">
					{m.product_soldNotice({}, { locale })}
				</p>
			{/if}

			<p class="text-foreground">{localizeText(product.description, locale)}</p>

			{#if details.length > 0}
				<dl class="grid grid-cols-1 gap-3 border-t border-border pt-4 sm:grid-cols-2">
					{#each details as detail (detail.key)}
						<div>
							<dt class="text-xs font-medium tracking-wide text-muted-foreground uppercase">
								{t(detail.key, {}, { locale })}
							</dt>
							<dd class="text-sm text-foreground">{localizeText(detail.value, locale)}</dd>
						</div>
					{/each}
				</dl>
			{/if}

			<div class="mt-2 flex flex-col gap-3 border-t border-border pt-4">
				<OrderButton
					sku={product.sku}
					{sold}
					class="inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-6 text-base font-medium text-accent-contrast hover:opacity-90"
				/>
				<p class="text-sm text-muted-foreground">{m.product_contactReassurance({}, { locale })}</p>
			</div>
		</div>
	</div>

	{#if data.related.length > 0}
		<section class="mt-16" aria-labelledby="related-heading">
			<h2 id="related-heading" class="font-display text-2xl text-foreground">
				{m.product_related({}, { locale })}
			</h2>
			<div class="mt-6">
				<ProductGrid products={data.related} />
			</div>
		</section>
	{/if}
</div>

<div class="sticky bottom-0 z-30 border-t border-border bg-surface/95 p-3 backdrop-blur lg:hidden">
	<OrderButton
		sku={product.sku}
		{sold}
		class="flex min-h-11 w-full items-center justify-center rounded-control bg-accent text-base font-medium text-accent-contrast"
	/>
</div>
