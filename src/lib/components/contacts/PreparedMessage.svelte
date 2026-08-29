<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import CopyButton from '$lib/components/ui/CopyButton.svelte';

	/** @type {{ message: string }} */
	let { message } = $props();

	let locale = $derived(page.data.locale);
</script>

<div class="bead-field rounded-card bg-ink p-5 shadow-lift sm:p-6">
	<p class="eyebrow text-accent-bright">{m.order_copyMessage({}, { locale })}</p>
	<p class="mt-3 text-sm leading-relaxed whitespace-pre-wrap text-ivory">{message}</p>
	<div class="mt-5">
		<CopyButton text={message} label={m.order_copyMessage({}, { locale })} />
	</div>
</div>
