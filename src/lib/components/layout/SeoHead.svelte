<script>
	import { page } from '$app/state';
	import { siteUrl, siteName } from '$lib/config/site.js';
	import { buildHreflangAlternates, buildCanonical } from '$lib/utils/seo.js';

	/** @type {{ title: string, description: string, image?: string }} */
	let { title, description, image = '/images/hero/slide-1.svg' } = $props();

	let alternates = $derived(buildHreflangAlternates(page.url.pathname));
	let canonical = $derived(buildCanonical(page.url.pathname));
	// Brand suffix only while the whole title fits the ~60-char SERP window;
	// long page titles keep their words instead (SEO.md 1.1).
	let fullTitle = $derived(
		`${title} — ${siteName}`.length <= 60 ? `${title} — ${siteName}` : title
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
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content="{siteUrl}{image}" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
