<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import CopyButton from '$lib/components/ui/CopyButton.svelte';

	/** @type {{ message: string }} */
	let { message } = $props();

	let locale = $derived(page.data.locale);
</script>

<div class="rounded-card border border-border bg-surface p-4">
	<p class="text-sm whitespace-pre-wrap text-foreground">{message}</p>
	<div class="mt-3">
		<CopyButton text={message} label={m.order_copyMessage({}, { locale })} />
	</div>
</div>
