<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';

	/** @type {{ sku: string, sold?: boolean, class?: string }} */
	let { sku, sold = false, class: className = '' } = $props();

	let locale = $derived(page.data.locale);
	let href = $derived(toHref(`/${locale}/how-to-order/?sku=${encodeURIComponent(sku)}`));
</script>

<a
	{href}
	class={className ||
		'inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-4 text-sm font-medium text-accent-contrast hover:opacity-90'}
>
	{sold ? m.product_orderSimilar({}, { locale }) : m.product_order({}, { locale })}
</a>
