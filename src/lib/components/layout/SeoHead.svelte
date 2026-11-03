<script>
	import { page } from '$app/state';
	import { siteUrl, siteName, locales } from '$lib/config/site.js';
	import { buildHreflangAlternates, buildCanonical, ogLocale } from '$lib/utils/seo.js';

	/**
	 * @type {{
	 * 	title: string,
	 * 	description: string,
	 * 	image?: string,
	 * 	imageAlt?: string,
	 * 	imageWidth?: number,
	 * 	imageHeight?: number,
	 * 	type?: 'website' | 'product' | 'article',
	 * 	publishedTime?: string
	 * }}
	 */
	let {
		title,
		description,
		image = '/images/og.jpg',
		imageAlt,
		imageWidth,
		imageHeight,
		type = 'website',
		publishedTime
	} = $props();

	let locale = $derived(page.data.locale);
	let alternates = $derived(buildHreflangAlternates(page.url.pathname));
	let canonical = $derived(buildCanonical(page.url.pathname));
	// Brand suffix only while the whole title fits the ~60-char SERP window;
	// long page titles keep their words instead (SEO.md 1.1).
	let fullTitle = $derived(
		`${title} - ${siteName}`.length <= 60 ? `${title} - ${siteName}` : title
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#each alternates as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={ogLocale(locale)} />
	{#each locales.filter((l) => l !== locale) as alt (alt)}
		<meta property="og:locale:alternate" content={ogLocale(alt)} />
	{/each}
	<meta property="og:image" content="{siteUrl}{image}" />
	{#if imageWidth}<meta property="og:image:width" content={String(imageWidth)} />{/if}
	{#if imageHeight}<meta property="og:image:height" content={String(imageHeight)} />{/if}
	<meta property="og:image:alt" content={imageAlt ?? fullTitle} />
	{#if type === 'article' && publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{siteUrl}{image}" />
</svelte:head>
