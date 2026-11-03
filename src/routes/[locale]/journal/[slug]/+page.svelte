<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import { localizeText } from '$lib/services/catalog.js';
	import { renderInline } from '$lib/utils/richtext.js';
	import { toHref } from '$lib/utils/href.js';
	import { siteName, siteUrl } from '$lib/config/site.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';
	import JsonLd from '$lib/components/layout/JsonLd.svelte';
	import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
	import { buildBreadcrumbLd } from '$lib/utils/seo.js';

	let { data } = $props();
	let locale = $derived(page.data.locale);
	let post = $derived(data.post);
	let title = $derived(localizeText(post.title, locale));
	let excerpt = $derived(localizeText(post.excerpt, locale));
	let body = $derived(post.body ?? []);
	let firstImage = $derived(body.find((b) => b.type === 'img'));

	/** @param {string} iso */
	function formatDate(iso) {
		return new Intl.DateTimeFormat(locale, {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(iso));
	}

	let jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: title,
		description: excerpt,
		datePublished: post.date,
		image: firstImage ? `${siteUrl}${firstImage.src}` : undefined,
		author: { '@type': 'Person', name: siteName },
		publisher: { '@id': `${siteUrl}/#organization` },
		mainEntityOfPage: `${siteUrl}/${locale}/journal/${post.slug}/`
	});

	let breadcrumbLd = $derived(
		buildBreadcrumbLd([
			{ name: m.product_breadcrumbHome({}, { locale }), path: `/${locale}/` },
			{ name: m.journal_breadcrumbJournal({}, { locale }), path: `/${locale}/journal/` },
			{ name: title, path: `/${locale}/journal/${post.slug}/` }
		])
	);
</script>

<SeoHead
	{title}
	description={excerpt}
	image={firstImage?.src}
	imageAlt={firstImage ? localizeText(firstImage.alt, locale) : undefined}
	imageWidth={firstImage?.width}
	imageHeight={firstImage?.height}
	type="article"
	publishedTime={post.date}
/>
<JsonLd data={jsonLd} />
<JsonLd data={breadcrumbLd} />

<article class="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-14">
	<Breadcrumbs
		current={title}
		section={{
			label: m.journal_breadcrumbJournal({}, { locale }),
			href: toHref(`/${locale}/journal/`)
		}}
	/>

	<header class="rise-in mt-6">
		<span class="eyebrow text-accent">
			{t(post.tagKey, {}, { locale })} · {formatDate(post.date)} ·
			{m.journal_minRead({ minutes: post.readMinutes }, { locale })}
		</span>
		<h1 class="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">{title}</h1>
	</header>

	<div class="rise-in rise-delay-1 mt-8 flex flex-col gap-6">
		{#each body as block, i (i)}
			{#if block.type === 'h2'}
				<h2 class="mt-4 font-display text-2xl text-foreground">
					{localizeText(block.text, locale)}
				</h2>
			{:else if block.type === 'p'}
				<p class="leading-relaxed font-medium text-muted-foreground">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html renderInline(localizeText(block.text, locale))}
				</p>
			{:else if block.type === 'img'}
				<figure class="my-2">
					{#if block.linkPath}
						<a href={toHref(`/${locale}${block.linkPath}`)}>
							<img
								src={block.src}
								width={block.width}
								height={block.height}
								alt={localizeText(block.alt, locale)}
								loading="lazy"
								class="w-full rounded-card object-cover shadow-card transition-opacity duration-200 hover:opacity-90"
							/>
						</a>
					{:else}
						<img
							src={block.src}
							width={block.width}
							height={block.height}
							alt={localizeText(block.alt, locale)}
							loading="lazy"
							class="w-full rounded-card object-cover shadow-card"
						/>
					{/if}
					{#if block.caption}
						<figcaption class="mt-2 text-center text-sm text-muted-foreground">
							{localizeText(block.caption, locale)}
						</figcaption>
					{/if}
				</figure>
			{:else if block.type === 'link'}
				<a
					href={toHref(`/${locale}${block.path}`)}
					rel={block.path.includes('?') ? 'nofollow' : undefined}
					class="inline-flex min-h-11 w-fit items-center rounded-control bg-accent-fill px-6 text-base font-semibold text-ink shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lift"
				>
					{localizeText(block.text, locale)}
				</a>
			{/if}
		{/each}
	</div>

	<div class="mt-10 border-t border-border pt-6">
		<a
			href={toHref(`/${locale}/journal/`)}
			class="inline-flex min-h-11 items-center text-sm font-medium text-accent transition-colors duration-200 hover:text-foreground"
		>
			← {m.journal_backToJournal({}, { locale })}
		</a>
	</div>
</article>
