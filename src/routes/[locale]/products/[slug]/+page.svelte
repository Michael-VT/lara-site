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
	import RelatedProductsStrip from '$lib/components/products/RelatedProductsStrip.svelte';
	import { formatAmount } from '$lib/utils/price.js';
	import { siteName, siteUrl } from '$lib/config/site.js';

	let { data } = $props();
	let locale = $derived(page.data.locale);
	let product = $derived(data.product);
	let title = $derived(localizeText(product.title, locale));
	let category = $derived(getCategory(product.category));

	let sold = $derived(product.status === 'sold');

	// Typical-range note, only when the "from" price carries a known upper bound.
	let typicalRange = $derived(
		product.price && product.price.mode === 'from' && product.price.typicalMax
			? m.product_priceTypical(
					{
						from: formatAmount(product.price.amount, product.price.currency, locale),
						to: formatAmount(product.price.typicalMax, product.price.currency, locale)
					},
					{ locale }
				)
			: null
	);

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
		brand: { '@type': 'Brand', name: siteName },
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

	let breadcrumbLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: m.product_breadcrumbHome({}, { locale }),
				item: `${siteUrl}/${locale}/`
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: m.product_breadcrumbProducts({}, { locale }),
				item: `${siteUrl}/${locale}/products/`
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: title,
				item: `${siteUrl}/${locale}/products/${product.slug}/`
			}
		]
	});

	let metaDescription = $derived(
		`${localizeText(product.shortDescription ?? product.description, locale)} ${m.product_metaDescriptionSuffix({}, { locale })}`
	);
</script>

<SeoHead {title} description={metaDescription} image={product.images[0].src} />
<JsonLd data={jsonLd} />
<JsonLd data={breadcrumbLd} />

<div class="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14">
	<Breadcrumbs current={title} />

	<div class="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
		<ProductGallery images={product.images} />

		<div class="rise-in rise-delay-1 flex flex-col gap-5">
			{#if category}
				<div class="flex items-center gap-3">
					<span class="eyebrow cat-eyebrow text-accent"
						>{t(category.messageKey, {}, { locale })}</span
					>
					<span class="bead-rule w-8 text-accent" aria-hidden="true"></span>
				</div>
			{/if}

			<h1 class="font-display text-3xl text-foreground sm:text-4xl">{title}</h1>

			<div class="flex flex-wrap items-center gap-x-5 gap-y-2">
				<ProductStatusBadge status={product.status} />
				<PriceDisplay price={product.price} class="text-xl font-semibold text-foreground" />
			</div>

			{#if typicalRange}
				<p class="-mt-3 text-sm text-muted-foreground">{typicalRange}</p>
			{/if}

			{#if product.status === 'made_to_order'}
				<p class="-mt-3 text-sm text-muted-foreground">
					{m.product_madeToOrderNote({}, { locale })}
				</p>
			{/if}

			<p class="text-sm text-muted-foreground">
				{m.common_sku({}, { locale })}:
				<span class="font-medium text-foreground">{product.sku}</span>
			</p>

			{#if sold}
				<p class="rounded-control bg-status-sold-bg px-3 py-2 text-sm text-status-sold">
					{m.product_soldNotice({}, { locale })}
				</p>
			{/if}

			<p class="max-w-prose leading-relaxed text-muted-foreground">
				{localizeText(product.description, locale)}
			</p>

			{#if details.length > 0}
				<dl class="grid grid-cols-1 gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-2">
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

			<div class="mt-2 flex flex-col items-start gap-3 border-t border-border pt-6">
				<OrderButton
					sku={product.sku}
					{sold}
					class="inline-flex min-h-12 w-full items-center justify-center rounded-control bg-accent-fill px-7 text-base font-semibold text-ink shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
				/>
				<p class="text-xs text-muted-foreground">{m.product_contactReassurance({}, { locale })}</p>
				<p class="text-xs text-muted-foreground">{m.product_shippingNote({}, { locale })}</p>
			</div>
		</div>
	</div>

	{#if data.related.length > 0}
		<div class="rise-in rise-delay-2 mt-16 sm:mt-20">
			<RelatedProductsStrip products={data.related} />
		</div>
	{/if}
</div>

<style>
	/*
		Gold eyebrow: the accent colour is only contract-safe below 14px when bold,
		so the .eyebrow utility's 500 is raised to Golos' 600 here.
	*/
	.cat-eyebrow {
		font-weight: 600;
	}
</style>
