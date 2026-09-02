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

<SeoHead
	title={m.home_seoTitle({}, { locale })}
	description={m.home_seoDescription({}, { locale })}
/>
<JsonLd data={jsonLd} />

<!-- Hero — full-bleed velvet tray -->
<section class="bead-field bg-ink">
	<div class="mx-auto w-full max-w-content px-4 py-16 sm:px-6 sm:py-24">
		<div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
			<div>
				<div class="rise-in rise-delay-1">
					<span class="bead-rule w-12 text-accent-bright" aria-hidden="true"></span>
					<p class="eyebrow mt-4 text-accent-bright">{m.siteName({}, { locale })}</p>
				</div>
				<h1
					class="rise-in rise-delay-2 mt-6 font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.08] text-balance text-ivory"
				>
					{m.siteTagline({}, { locale })}
				</h1>
				<p class="rise-in rise-delay-3 mt-5 max-w-md leading-relaxed text-sage">
					{m.home_heroSlide1Body({}, { locale })}
				</p>
				<div class="rise-in rise-delay-4 mt-9 flex flex-wrap items-center gap-4">
					<a
						href={toHref(`/${locale}/products/`)}
						class="focus-dark inline-flex min-h-11 items-center justify-center rounded-control bg-accent-fill px-7 text-sm font-semibold text-ink transition-[filter,transform] duration-300 ease-out hover:scale-[1.02] hover:brightness-105"
					>
						{m.home_heroCta({}, { locale })}
					</a>
					<a
						href={toHref(`/${locale}/how-to-order/`)}
						class="focus-dark inline-flex min-h-11 items-center justify-center rounded-control border border-ivory/30 px-6 text-sm font-medium text-ivory transition-colors duration-300 hover:border-ivory"
					>
						{m.home_howItWorksCta({}, { locale })}
					</a>
				</div>
			</div>
			<HeroSlider />
		</div>
	</div>
</section>

<div class="mx-auto w-full max-w-content px-4 sm:px-6">
	<!-- Categories -->
	<section aria-labelledby="categories-heading" class="py-20 sm:py-24">
		<span class="bead-rule w-10 text-accent" aria-hidden="true"></span>
		<h2 id="categories-heading" class="mt-4 font-display text-3xl text-foreground sm:text-4xl">
			{m.home_categoriesHeading({}, { locale })}
		</h2>
		<div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
			{#each categories as category (category.id)}
				<CategoryCard {category} />
			{/each}
		</div>
	</section>

	{#if data.featured.length > 0}
		<section aria-labelledby="featured-heading" class="py-20 sm:py-24">
			<div class="flex flex-wrap items-end justify-between gap-4">
				<div>
					<span class="bead-rule w-10 text-accent" aria-hidden="true"></span>
					<h2 id="featured-heading" class="mt-4 font-display text-3xl text-foreground sm:text-4xl">
						{m.home_featuredHeading({}, { locale })}
					</h2>
				</div>
				<a
					href={toHref(`/${locale}/products/`)}
					class="inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-4 hover:underline"
				>
					{m.home_viewAll({}, { locale })}
				</a>
			</div>
			<div class="mt-10">
				<ProductGrid products={data.featured} />
			</div>
		</section>
	{/if}

	{#if data.available.length > 0}
		<section aria-labelledby="available-heading" class="py-20 sm:py-24">
			<span class="bead-rule w-10 text-accent" aria-hidden="true"></span>
			<h2 id="available-heading" class="mt-4 font-display text-3xl text-foreground sm:text-4xl">
				{m.home_availableHeading({}, { locale })}
			</h2>
			<div class="mt-10">
				<ProductGrid products={data.available} />
			</div>
		</section>
	{/if}

	{#if data.madeToOrder.length > 0}
		<section aria-labelledby="made-to-order-heading" class="py-20 sm:py-24">
			<span class="bead-rule w-10 text-accent" aria-hidden="true"></span>
			<h2 id="made-to-order-heading" class="mt-4 font-display text-3xl text-foreground sm:text-4xl">
				{m.home_madeToOrderHeading({}, { locale })}
			</h2>
			<div class="mt-10">
				<ProductGrid products={data.madeToOrder} />
			</div>
		</section>
	{/if}
</div>

<!-- How ordering works — full-bleed velvet band -->
<section aria-labelledby="how-it-works-heading" class="bead-field bg-ink">
	<div class="mx-auto w-full max-w-content px-4 py-20 sm:px-6 sm:py-24">
		<span class="bead-rule w-10 text-accent-bright" aria-hidden="true"></span>
		<h2 id="how-it-works-heading" class="mt-4 font-display text-3xl text-ivory sm:text-4xl">
			{m.home_howItWorksHeading({}, { locale })}
		</h2>
		<p class="mt-4 max-w-xl leading-relaxed text-sage">
			{m.home_howItWorksIntro({}, { locale })}
		</p>
		<div class="mt-12">
			<HowToOrderSteps />
		</div>
		<a
			href={toHref(`/${locale}/how-to-order/`)}
			class="focus-dark mt-10 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-bright underline-offset-4 hover:underline"
		>
			{m.home_howItWorksCta({}, { locale })}
			<span aria-hidden="true">→</span>
		</a>
	</div>
</section>

<div class="mx-auto w-full max-w-content px-4 sm:px-6">
	<AboutPreview />

	<div class="pb-20 sm:pb-24">
		<section
			aria-labelledby="contact-cta-heading"
			class="rounded-card bg-accent-wash px-8 py-12 text-center sm:px-12 sm:py-16"
		>
			<h2 id="contact-cta-heading" class="font-display text-3xl text-foreground sm:text-4xl">
				{m.home_contactCtaHeading({}, { locale })}
			</h2>
			<p class="mx-auto mt-4 max-w-xl leading-relaxed text-foreground">
				{m.home_contactCtaBody({}, { locale })}
			</p>
			<a
				href={toHref(`/${locale}/how-to-order/`)}
				class="mt-8 inline-flex min-h-11 items-center justify-center rounded-control bg-ink px-8 text-sm font-medium text-ivory transition-[transform,background-color] duration-300 ease-out hover:scale-[1.02] hover:bg-ink-soft"
			>
				{m.home_contactCtaButton({}, { locale })}
			</a>
		</section>
	</div>
</div>
