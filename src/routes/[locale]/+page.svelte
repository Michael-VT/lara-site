<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { categories } from '$lib/content/categories.js';
	import { toHref } from '$lib/utils/href.js';
	import { siteName, siteUrl } from '$lib/config/site.js';
	import { getPublicProducts } from '$lib/services/catalog.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';
	import JsonLd from '$lib/components/layout/JsonLd.svelte';
	import HeroSlider from '$lib/components/products/HeroSlider.svelte';
	import CategoryCard from '$lib/components/products/CategoryCard.svelte';
	import ProductGrid from '$lib/components/products/ProductGrid.svelte';
	import HowToOrderSteps from '$lib/components/contacts/HowToOrderSteps.svelte';
	import AboutPreview from '$lib/components/layout/AboutPreview.svelte';

	let { data } = $props();
	let locale = $derived(page.data.locale);
	let productCount = $derived(getPublicProducts().length);

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

<!-- Hero — light, photographic backdrop -->
<section class="relative overflow-hidden">
	<img
		src="/images/hero/hero-bg.webp"
		alt=""
		aria-hidden="true"
		width="1672"
		height="941"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div
		class="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto w-full max-w-content px-4 py-16 sm:px-6 sm:py-24">
		<div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
			<div>
				<div class="rise-in rise-delay-1">
					<span class="bead-rule w-12 text-accent" aria-hidden="true"></span>
					<p class="eyebrow mt-4 text-accent">{m.siteName({}, { locale })}</p>
				</div>
				<h1
					class="rise-in rise-delay-2 mt-6 font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.08] text-balance text-foreground"
				>
					{m.siteTagline({}, { locale })}
				</h1>
				<p class="rise-in rise-delay-3 mt-5 max-w-md leading-relaxed text-muted-foreground">
					{m.home_heroSlide1Body({}, { locale })}
				</p>
				<div class="rise-in rise-delay-4 mt-9 flex flex-wrap items-center gap-4">
					<a
						href={toHref(`/${locale}/products/`)}
						class="inline-flex min-h-11 items-center justify-center rounded-control bg-accent-fill px-7 text-sm font-semibold text-ink transition-[filter,transform] duration-300 ease-out hover:scale-[1.02] hover:brightness-105"
					>
						{m.home_heroCta({}, { locale })}
					</a>
					<a
						href={toHref(`/${locale}/how-to-order/`)}
						class="inline-flex min-h-11 items-center justify-center rounded-control border border-border-strong px-6 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent"
					>
						{m.home_howItWorksCta({}, { locale })}
					</a>
				</div>
				<div
					class="rise-in rise-delay-4 mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-border pt-6"
				>
					<div>
						<p class="font-display text-3xl text-foreground">{productCount}+</p>
						<p class="eyebrow mt-1 text-muted-foreground">
							{m.home_statProductsLabel({}, { locale })}
						</p>
					</div>
					<div>
						<p class="font-display text-3xl text-foreground">
							{m.home_statUniqueValue({}, { locale })}
						</p>
						<p class="eyebrow mt-1 text-muted-foreground">
							{m.home_statUniqueLabel({}, { locale })}
						</p>
					</div>
					<div>
						<p class="font-display text-3xl text-foreground">
							{m.home_statLeadTimeValue({}, { locale })}
						</p>
						<p class="eyebrow mt-1 text-muted-foreground">
							{m.home_statLeadTimeLabel({}, { locale })}
						</p>
					</div>
				</div>
			</div>
			<HeroSlider />
		</div>
	</div>
</section>

<!-- Craft-keyword marquee ribbon -->
<div
	class="overflow-hidden border-y border-accent/30 bg-gradient-to-r from-accent-wash via-background to-accent-wash py-3.5"
>
	<div class="brand-marquee gap-10" aria-hidden="true">
		<!-- Duplicated so the CSS translateX(-50%) loop is seamless. -->
		<span class="eyebrow shrink-0 whitespace-nowrap text-accent">
			{m.home_marqueeText({}, { locale })} · {m.home_marqueeText({}, { locale })} ·
			{m.home_marqueeText({}, { locale })} · {m.home_marqueeText({}, { locale })}
		</span>
		<span class="eyebrow shrink-0 whitespace-nowrap text-accent">
			{m.home_marqueeText({}, { locale })} · {m.home_marqueeText({}, { locale })} ·
			{m.home_marqueeText({}, { locale })} · {m.home_marqueeText({}, { locale })}
		</span>
	</div>
</div>

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

<!-- How ordering works — light, full-bleed band -->
<section aria-labelledby="how-it-works-heading" class="bead-field bg-accent-wash">
	<div class="mx-auto w-full max-w-content px-4 py-20 sm:px-6 sm:py-24">
		<span class="bead-rule w-10 text-accent" aria-hidden="true"></span>
		<h2 id="how-it-works-heading" class="mt-4 font-display text-3xl text-foreground sm:text-4xl">
			{m.home_howItWorksHeading({}, { locale })}
		</h2>
		<p class="mt-4 max-w-xl leading-relaxed text-muted-foreground">
			{m.home_howItWorksIntro({}, { locale })}
		</p>
		<div class="mt-12">
			<HowToOrderSteps />
		</div>
		<a
			href={toHref(`/${locale}/how-to-order/`)}
			class="mt-10 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
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
