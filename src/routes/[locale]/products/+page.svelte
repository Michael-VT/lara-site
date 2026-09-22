<script>
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
	import { t, pluralCountKey } from '$lib/utils/messages.js';
	import { categories, categoryIds } from '$lib/content/categories.js';
	import { filterProducts } from '$lib/services/catalog.js';
	import { toHref } from '$lib/utils/href.js';
	import { getSearchParam } from '$lib/utils/locale.js';
	import { localizeText } from '$lib/services/catalog.js';
	import { siteUrl } from '$lib/config/site.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';
	import JsonLd from '$lib/components/layout/JsonLd.svelte';
	import ProductGrid from '$lib/components/products/ProductGrid.svelte';
	import EmptyState from '$lib/components/ui/EmptyState.svelte';

	let { data } = $props();
	let locale = $derived(page.data.locale);

	let jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: data.products.map((product, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: localizeText(product.title, locale),
			url: `${siteUrl}/${locale}/products/${product.slug}/`
		}))
	});

	const statusOptions = ['available', 'made_to_order', 'sold'];

	/**
	 * Parses the comma-joined `?category=` param into known category ids.
	 * Unknown ids are dropped (an old/garbage link degrades to "all products"
	 * rather than an empty grid); duplicates are removed.
	 * @param {string | null} param
	 * @returns {string[]}
	 */
	function parseCategoryParam(param) {
		if (!param) return [];
		const known = /** @type {string[]} */ (categoryIds);
		const seen = new Set();
		for (const raw of param.split(',')) {
			const id = raw.trim().toLowerCase();
			if (known.includes(id)) seen.add(id);
		}
		return [...seen];
	}

	let selectedCategories = $derived(parseCategoryParam(getSearchParam(page.url, 'category')));
	let status = $derived(getSearchParam(page.url, 'status') ?? '');

	let filtered = $derived(
		filterProducts(data.products, {
			category: selectedCategories,
			status: status || null
		})
	);

	/**
	 * @param {{ nextCategory?: string, nextStatus?: string }} [updates]
	 */
	function updateFilters({ nextCategory, nextStatus } = {}) {
		const url = new URL(page.url);
		const categoryValue = nextCategory ?? selectedCategories.join(',');
		const statusValue = nextStatus ?? status;
		if (categoryValue) url.searchParams.set('category', categoryValue);
		else url.searchParams.delete('category');
		if (statusValue) url.searchParams.set('status', statusValue);
		else url.searchParams.delete('status');

		goto(toHref(`${url.pathname}${url.search}`), {
			replaceState: true,
			keepFocus: true,
			noScroll: true
		});
	}

	/** @param {string} id */
	function toggleCategory(id) {
		const next = selectedCategories.includes(id)
			? selectedCategories.filter((c) => c !== id)
			: [...selectedCategories, id];
		// Canonical (categories.js) order in the URL so shared links are stable.
		const ordered = categories.map((c) => c.id).filter((c) => next.includes(c));
		updateFilters({ nextCategory: ordered.join(',') });
	}

	function clearFilters() {
		goto(toHref(page.url.pathname), { replaceState: true, keepFocus: true, noScroll: true });
	}

	const pillBase =
		'inline-flex min-h-11 touch-manipulation items-center rounded-control px-4 text-sm font-medium transition-colors duration-300';
	const pillActive = `${pillBase} bg-ink text-ivory`;
	const pillIdle = `${pillBase} border border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground`;
</script>

<SeoHead title={m.catalog_heading({}, { locale })} description={m.catalog_intro({}, { locale })} />
<JsonLd data={jsonLd} />

<div class="mx-auto max-w-content px-4 py-20 sm:px-6 sm:py-24">
	<header class="rise-in">
		<p class="eyebrow text-accent">{m.siteTagline({}, { locale })}</p>
		<span class="bead-rule mt-3 w-10 text-accent" aria-hidden="true"></span>
		<h1 class="mt-4 font-display text-3xl text-foreground sm:text-4xl">
			{m.catalog_heading({}, { locale })}
		</h1>
		<p class="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
			{m.catalog_intro({}, { locale })}
		</p>
	</header>

	<div class="rise-in rise-delay-1 mt-10 border-t border-border pt-6">
		<div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
			<div class="flex flex-col gap-4">
				<div
					role="group"
					aria-labelledby="catalog-filter-category"
					class="flex flex-wrap items-center gap-2"
				>
					<span
						id="catalog-filter-category"
						class="eyebrow min-w-20 shrink-0 text-muted-foreground"
					>
						{m.catalog_filterCategory({}, { locale })}
					</span>
					<button
						type="button"
						onclick={() => updateFilters({ nextCategory: '' })}
						aria-pressed={selectedCategories.length === 0}
						class={selectedCategories.length === 0 ? pillActive : pillIdle}
					>
						{m.common_all({}, { locale })}
					</button>
					{#each categories as c (c.id)}
						<button
							type="button"
							onclick={() => toggleCategory(c.id)}
							aria-pressed={selectedCategories.includes(c.id)}
							class={selectedCategories.includes(c.id) ? pillActive : pillIdle}
						>
							{t(c.messageKey, {}, { locale })}
						</button>
					{/each}
				</div>

				<div
					role="group"
					aria-labelledby="catalog-filter-status"
					class="flex flex-wrap items-center gap-2"
				>
					<span id="catalog-filter-status" class="eyebrow min-w-20 shrink-0 text-muted-foreground">
						{m.catalog_filterStatus({}, { locale })}
					</span>
					<button
						type="button"
						onclick={() => updateFilters({ nextStatus: '' })}
						aria-pressed={!status}
						class={!status ? pillActive : pillIdle}
					>
						{m.common_all({}, { locale })}
					</button>
					{#each statusOptions as s (s)}
						<button
							type="button"
							onclick={() => updateFilters({ nextStatus: s })}
							aria-pressed={status === s}
							class={status === s ? pillActive : pillIdle}
						>
							{t(`status_${s === 'made_to_order' ? 'madeToOrder' : s}`, {}, { locale })}
						</button>
					{/each}
				</div>
			</div>

			<div class="flex flex-wrap items-center gap-x-5 gap-y-2 lg:flex-col lg:items-end">
				{#if selectedCategories.length > 0 || status}
					<button
						type="button"
						onclick={clearFilters}
						class="inline-flex min-h-11 items-center rounded-control px-1 text-sm font-medium text-accent transition-colors duration-300 hover:text-foreground"
					>
						{m.catalog_clearAll({}, { locale })}
					</button>
				{/if}
				<p class="text-sm text-muted-foreground" aria-live="polite">
					{t(pluralCountKey(locale, filtered.length), { count: filtered.length }, { locale })}
				</p>
			</div>
		</div>
	</div>

	<div class="rise-in rise-delay-2 mt-10">
		{#if filtered.length > 0}
			<ProductGrid products={filtered} />
		{:else}
			<EmptyState
				message={m.catalog_empty({}, { locale })}
				actionLabel={m.catalog_clearAll({}, { locale })}
				onAction={clearFilters}
			/>
		{/if}
	</div>
</div>
