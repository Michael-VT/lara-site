<script>
	import { page } from '$app/state';
	import { t } from '$lib/utils/messages.js';
	import { toHref } from '$lib/utils/href.js';

	/** @type {{ category: import('$lib/content/categories.js').CategoryDef }} */
	let { category } = $props();

	let locale = $derived(page.data.locale);
	let href = $derived(toHref(`/${locale}/products/?category=${category.id}`));
</script>

<a
	{href}
	class="flex flex-col items-center gap-2 rounded-card border border-border bg-surface p-6 text-center transition-colors hover:border-accent"
>
	<span class="font-display text-base font-medium text-foreground"
		>{t(category.messageKey, {}, { locale })}</span
	>
</a>
