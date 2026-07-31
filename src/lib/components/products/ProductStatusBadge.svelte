<script>
	import { page } from '$app/state';
	import { t } from '$lib/utils/messages.js';

	/** @type {{ status: import('$lib/schemas/product.js').ProductStatus }} */
	let { status } = $props();

	const config = {
		available: {
			labelKey: 'status_available',
			bg: 'bg-status-available-bg',
			fg: 'text-status-available',
			icon: 'M5 13l4 4L19 7'
		},
		made_to_order: {
			labelKey: 'status_madeToOrder',
			bg: 'bg-status-made-to-order-bg',
			fg: 'text-status-made-to-order',
			icon: 'M12 6v6l4 2'
		},
		sold: {
			labelKey: 'status_sold',
			bg: 'bg-status-sold-bg',
			fg: 'text-status-sold',
			icon: 'M6 6l12 12M18 6L6 18'
		}
	};

	// `hidden` products are never rendered publicly, but the status field is typed
	// broadly (it mirrors the full schema); fall back to the `sold` styling for
	// type-safety in that unreachable case.
	let current = $derived(/** @type {any} */ (config)[status] ?? config.sold);
</script>

<span
	class="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium {current.bg} {current.fg}"
>
	<svg
		viewBox="0 0 24 24"
		width="12"
		height="12"
		fill="none"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path d={current.icon} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
	{t(current.labelKey, {}, { locale: page.data.locale })}
</span>
