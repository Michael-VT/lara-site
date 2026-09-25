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
		mainEntityOfPage: `${siteUrl}/${locale}/journal/${post.slug}/`
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
				name: m.journal_breadcrumbJournal({}, { locale }),
				item: `${siteUrl}/${locale}/journal/`
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: title,
				item: `${siteUrl}/${locale}/journal/${post.slug}/`
			}
		]
	});
</script>

<SeoHead {title} description={excerpt} image={firstImage?.src} />
<JsonLd data={jsonLd} />
<JsonLd data={breadcrumbLd} />

<article class="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-14">
	<nav aria-label={m.common_breadcrumb({}, { locale })} class="text-sm text-muted-foreground">
		<ol class="flex flex-wrap items-center">
			<li>
				<a
					href={toHref(`/${locale}/`)}
					class="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-foreground"
					>{m.product_breadcrumbHome({}, { locale })}</a
				>
			</li>
			<li aria-hidden="true" class="mx-2 h-1 w-1 rounded-full bg-accent"></li>
			<li>
				<a
					href={toHref(`/${locale}/journal/`)}
					class="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-foreground"
					>{m.journal_breadcrumbJournal({}, { locale })}</a
				>
			</li>
			<li aria-hidden="true" class="mx-2 h-1 w-1 rounded-full bg-accent"></li>
			<li aria-current="page" class="flex min-h-11 items-center text-foreground">{title}</li>
		</ol>
	</nav>

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
				<p class="leading-relaxed text-muted-foreground">
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
