<script>
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import { categories } from '$lib/content/categories.js';
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

	let category = $derived(getSearchParam(page.url, 'category') ?? '');
	let status = $derived(getSearchParam(page.url, 'status') ?? '');

	let filtered = $derived(
		filterProducts(data.products, {
			category: category || null,
			status: status || null
		})
	);

	function updateFilters({ nextCategory = category, nextStatus = status } = {}) {
		const url = new URL(page.url);
		if (nextCategory) url.searchParams.set('category', nextCategory);
		else url.searchParams.delete('category');
		if (nextStatus) url.searchParams.set('status', nextStatus);
		else url.searchParams.delete('status');

		goto(toHref(`${url.pathname}${url.search}`), {
			replaceState: true,
			keepFocus: true,
			noScroll: true
		});
	}

	function clearFilters() {
		goto(toHref(page.url.pathname), { replaceState: true, keepFocus: true, noScroll: true });
	}
</script>

<SeoHead title={m.catalog_heading({}, { locale })} description={m.catalog_intro({}, { locale })} />
<JsonLd data={jsonLd} />

<div class="mx-auto max-w-content px-4 py-8 sm:px-6">
	<h1 class="font-display text-3xl text-foreground">{m.catalog_heading({}, { locale })}</h1>
	<p class="mt-2 max-w-2xl text-muted-foreground">{m.catalog_intro({}, { locale })}</p>

	<div class="mt-6 flex flex-wrap items-end gap-4">
		<div>
			<label for="filter-category" class="block text-sm font-medium text-foreground">
				{m.catalog_filterCategory({}, { locale })}
			</label>
			<select
				id="filter-category"
				class="mt-1 min-h-11 rounded-control border-border"
				value={category}
				onchange={(e) => updateFilters({ nextCategory: e.currentTarget.value })}
			>
				<option value="">{m.common_all({}, { locale })}</option>
				{#each categories as c (c.id)}
					<option value={c.id}>{t(c.messageKey, {}, { locale })}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for="filter-status" class="block text-sm font-medium text-foreground">
				{m.catalog_filterStatus({}, { locale })}
			</label>
			<select
				id="filter-status"
				class="mt-1 min-h-11 rounded-control border-border"
				value={status}
				onchange={(e) => updateFilters({ nextStatus: e.currentTarget.value })}
			>
				<option value="">{m.common_all({}, { locale })}</option>
				{#each statusOptions as s (s)}
					<option value={s}
						>{t(`status_${s === 'made_to_order' ? 'madeToOrder' : s}`, {}, { locale })}</option
					>
				{/each}
			</select>
		</div>

		{#if category || status}
			<button
				type="button"
				onclick={clearFilters}
				class="min-h-11 rounded-control border border-border px-4 text-sm font-medium hover:bg-surface"
			>
				{m.catalog_clearAll({}, { locale })}
			</button>
		{/if}

		<p class="ml-auto text-sm text-muted-foreground" aria-live="polite">
			{m.catalog_count({ count: filtered.length }, { locale })}
		</p>
	</div>

	<div class="mt-8">
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
