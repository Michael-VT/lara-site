<script>
	import { page } from '$app/state';
	import { t, pluralCountKey } from '$lib/utils/messages.js';
	import { toHref } from '$lib/utils/href.js';
	import { getPublicProducts } from '$lib/services/catalog.js';

	/** @type {{ category: import('$lib/content/categories.js').CategoryDef }} */
	let { category } = $props();

	let locale = $derived(page.data.locale);
	let href = $derived(toHref(`/${locale}/products/?category=${category.id}`));
	let count = $derived(
		getPublicProducts().filter((product) => product.category === category.id).length
	);
</script>

<a
	{href}
	class="group flex flex-col items-center justify-center gap-3 rounded-card border border-border bg-surface px-6 py-8 text-center shadow-card transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift"
>
	<span class="font-display text-lg text-foreground">
		{t(category.messageKey, {}, { locale })}
	</span>
	{#if count > 1}
		<span class="text-sm text-muted-foreground">
			{t(pluralCountKey(locale, count), { count }, { locale })}
		</span>
	{/if}
</a>
