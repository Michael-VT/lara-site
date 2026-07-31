<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { categories } from '$lib/content/categories.js';
	import { toHref } from '$lib/utils/href.js';
	import { siteName, siteUrl } from '$lib/config/site.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';
	import JsonLd from '$lib/components/layout/JsonLd.svelte';
	import HeroSlider from '$lib/components/products/HeroSlider.svelte';
	import CategoryCard from '$lib/components/products/CategoryCard.svelte';
	import ProductGrid from '$lib/components/products/ProductGrid.svelte';
	import HowToOrderSteps from '$lib/components/contacts/HowToOrderSteps.svelte';
	import AboutPreview from '$lib/components/layout/AboutPreview.svelte';

	let { data } = $props();
	let locale = $derived(page.data.locale);

	let jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: siteName,
		url: `${siteUrl}/${locale}/`
	});
</script>

<SeoHead title={m.siteName({}, { locale })} description={m.siteTagline({}, { locale })} />
<JsonLd data={jsonLd} />

<div class="mx-auto flex max-w-content flex-col gap-16 px-4 py-8 sm:px-6">
	<h1 class="sr-only">{m.siteName({}, { locale })} — {m.siteTagline({}, { locale })}</h1>

	<HeroSlider />

	<section aria-labelledby="categories-heading">
		<h2 id="categories-heading" class="font-display text-2xl text-foreground">
			{m.home_categoriesHeading({}, { locale })}
		</h2>
		<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
			{#each categories as category (category.id)}
				<CategoryCard {category} />
			{/each}
		</div>
	</section>

	{#if data.featured.length > 0}
		<section aria-labelledby="featured-heading">
			<div class="flex items-center justify-between">
				<h2 id="featured-heading" class="font-display text-2xl text-foreground">
					{m.home_featuredHeading({}, { locale })}
				</h2>
				<a
					href={toHref(`/${locale}/products/`)}
					class="text-sm font-medium text-accent hover:underline"
				>
					{m.home_viewAll({}, { locale })}
				</a>
			</div>
			<div class="mt-6">
				<ProductGrid products={data.featured} />
			</div>
		</section>
	{/if}

	{#if data.available.length > 0}
		<section aria-labelledby="available-heading">
			<h2 id="available-heading" class="font-display text-2xl text-foreground">
				{m.home_availableHeading({}, { locale })}
			</h2>
			<div class="mt-6">
				<ProductGrid products={data.available} />
			</div>
		</section>
	{/if}

	{#if data.madeToOrder.length > 0}
		<section aria-labelledby="made-to-order-heading">
			<h2 id="made-to-order-heading" class="font-display text-2xl text-foreground">
				{m.home_madeToOrderHeading({}, { locale })}
			</h2>
			<div class="mt-6">
				<ProductGrid products={data.madeToOrder} />
			</div>
		</section>
	{/if}

	<section aria-labelledby="how-it-works-heading">
		<h2 id="how-it-works-heading" class="font-display text-2xl text-foreground">
			{m.home_howItWorksHeading({}, { locale })}
		</h2>
		<p class="mt-2 text-muted-foreground">{m.home_howItWorksIntro({}, { locale })}</p>
		<div class="mt-6">
			<HowToOrderSteps />
		</div>
		<a
			href={toHref(`/${locale}/how-to-order/`)}
			class="mt-6 inline-flex text-sm font-medium text-accent hover:underline"
		>
			{m.home_howItWorksCta({}, { locale })} →
		</a>
	</section>

	<AboutPreview />

	<section class="rounded-card bg-surface p-8 text-center sm:p-12">
		<h2 class="font-display text-2xl text-foreground">
			{m.home_contactCtaHeading({}, { locale })}
		</h2>
		<p class="mx-auto mt-2 max-w-xl text-muted-foreground">
			{m.home_contactCtaBody({}, { locale })}
		</p>
		<a
			href={toHref(`/${locale}/how-to-order/`)}
			class="mt-6 inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-6 text-sm font-medium text-accent-contrast"
		>
			{m.home_contactCtaButton({}, { locale })}
		</a>
	</section>
</div>
