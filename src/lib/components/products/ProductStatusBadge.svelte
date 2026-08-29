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
			dot: 'bg-status-available'
		},
		made_to_order: {
			labelKey: 'status_madeToOrder',
			bg: 'bg-status-made-to-order-bg',
			fg: 'text-status-made-to-order',
			dot: 'bg-status-made-to-order'
		},
		sold: {
			labelKey: 'status_sold',
			bg: 'bg-status-sold-bg',
			fg: 'text-status-sold',
			dot: 'bg-status-sold'
		}
	};

	// `hidden` products are never rendered publicly, but the status field is typed
	// broadly (it mirrors the full schema); fall back to the `sold` styling for
	// type-safety in that unreachable case.
	let current = $derived(/** @type {any} */ (config)[status] ?? config.sold);
</script>

<span class="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 {current.bg}">
	<span class="h-1.5 w-1.5 rounded-full {current.dot}" aria-hidden="true"></span>
	<span class="text-[0.7rem] font-semibold tracking-[0.1em] uppercase {current.fg}">
		{t(current.labelKey, {}, { locale: page.data.locale })}
	</span>
</span>
