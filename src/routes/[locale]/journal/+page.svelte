<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { t, pluralCountKey } from '$lib/utils/messages.js';
	import { localizeText } from '$lib/services/catalog.js';
	import { journalPosts, journalTagKeys } from '$lib/content/journal.js';
	import { toHref } from '$lib/utils/href.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';

	let locale = $derived(page.data.locale);

	let lead = $derived(journalPosts.find((p) => p.featured) ?? journalPosts[0]);
	let rest = $derived(journalPosts.filter((p) => p !== lead));

	let activeTag = $state('');

	let filtered = $derived(activeTag ? rest.filter((p) => p.tagKey === activeTag) : rest);

	/** @param {string} iso */
	function formatDate(iso) {
		return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long' }).format(new Date(iso));
	}

	const pillBase =
		'inline-flex min-h-11 touch-manipulation items-center rounded-control px-4 text-sm font-medium transition-colors duration-300';
	const pillActive = `${pillBase} bg-ink text-ivory`;
	const pillIdle = `${pillBase} border border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground`;
</script>

<SeoHead
	title={m.journal_seoTitle({}, { locale })}
	description={m.journal_seoDescription({}, { locale })}
/>

<div class="mx-auto max-w-content px-4 py-20 sm:px-6 sm:py-24">
	<header class="rise-in">
		<p class="eyebrow text-accent">{m.journal_eyebrow({}, { locale })}</p>
		<span class="bead-rule mt-3 w-10 text-accent" aria-hidden="true"></span>
		<div class="mt-4 flex flex-wrap items-end justify-between gap-4">
			<h1 class="font-display text-3xl text-foreground sm:text-4xl">
				{m.journal_heading({}, { locale })}
			</h1>
			<p class="eyebrow text-muted-foreground">
				{t(
					pluralCountKey(locale, journalPosts.length, 'journal'),
					{ count: journalPosts.length },
					{ locale }
				)}
			</p>
		</div>
		<p class="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
			{m.journal_intro({}, { locale })}
		</p>

		<div class="mt-7 flex flex-wrap items-center gap-2">
			<button
				type="button"
				onclick={() => (activeTag = '')}
				aria-pressed={activeTag === ''}
				class={activeTag === '' ? pillActive : pillIdle}
			>
				{m.common_all({}, { locale })}
			</button>
			{#each journalTagKeys as tagKey (tagKey)}
				<button
					type="button"
					onclick={() => (activeTag = tagKey)}
					aria-pressed={activeTag === tagKey}
					class={activeTag === tagKey ? pillActive : pillIdle}
				>
					{t(tagKey, {}, { locale })}
				</button>
			{/each}
		</div>
	</header>

	<!-- Lead post — full-bleed velvet banner. Individual article pages don't
	     exist yet, so this is presented as a static teaser, not a link. -->
	<article
		class="rise-in rise-delay-1 mt-10 flex flex-col gap-6 rounded-card bg-ink p-7 text-ivory sm:p-10"
	>
		<span class="eyebrow text-accent-bright">
			{t(lead.tagKey, {}, { locale })} · {formatDate(lead.date)} ·
			{m.journal_minRead({ minutes: lead.readMinutes }, { locale })}
		</span>
		<h2 class="max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl">
			{localizeText(lead.title, locale)}
		</h2>
		<p class="max-w-xl leading-relaxed text-sage">{localizeText(lead.excerpt, locale)}</p>
	</article>

	<div
		class="rise-in rise-delay-2 mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
	>
		{#each filtered as post (post.slug)}
			{#if post.body}
				<a
					href={toHref(`/${locale}/journal/${post.slug}/`)}
					class="flex flex-col gap-3 rounded-card border border-border bg-surface p-6 shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lift"
				>
					<span class="eyebrow text-accent">
						{t(post.tagKey, {}, { locale })} · {formatDate(post.date)}
					</span>
					<h3 class="font-display text-xl leading-snug text-foreground">
						{localizeText(post.title, locale)}
					</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						{localizeText(post.excerpt, locale)}
					</p>
					<span class="mt-1 text-sm font-medium text-accent">
						{m.journal_readStory({}, { locale })} →
					</span>
				</a>
			{:else}
				<article
					class="flex flex-col gap-3 rounded-card border border-border bg-surface p-6 shadow-card"
				>
					<span class="eyebrow text-accent">
						{t(post.tagKey, {}, { locale })} · {formatDate(post.date)}
					</span>
					<h3 class="font-display text-xl leading-snug text-foreground">
						{localizeText(post.title, locale)}
					</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						{localizeText(post.excerpt, locale)}
					</p>
				</article>
			{/if}
		{/each}
	</div>
</div>
