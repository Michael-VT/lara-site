<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';

	/** @type {{ sku: string, sold?: boolean, class?: string }} */
	let { sku, sold = false, class: className = '' } = $props();

	let locale = $derived(page.data.locale);
	let href = $derived(toHref(`/${locale}/how-to-order/?sku=${encodeURIComponent(sku)}`));

	const baseStyle =
		'inline-flex min-h-11 touch-manipulation items-center justify-center rounded-control border px-4 text-sm font-medium transition-colors duration-300';
	let stateStyle = $derived(
		sold
			? 'border-border bg-surface text-muted-foreground hover:border-ink/30 hover:bg-accent-wash hover:text-foreground'
			: 'border-ink/15 bg-surface text-foreground hover:border-ink/30 hover:bg-accent-wash'
	);
	let label = $derived(
		sold ? m.product_orderSimilar({}, { locale }) : m.product_order({}, { locale })
	);
</script>

<a {href} class={className || `${baseStyle} ${stateStyle}`}>{label}</a>
