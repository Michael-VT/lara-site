<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';

	let locale = $derived(page.data.locale);
</script>

<SeoHead
	title={m.privacy_heading({}, { locale })}
	description={m.privacy_reviewNotice({}, { locale })}
/>

<div class="mx-auto max-w-content px-4 py-8 sm:px-6">
	<h1 class="font-display text-3xl text-foreground">{m.privacy_heading({}, { locale })}</h1>

	<p
		class="mt-4 rounded-control bg-status-made-to-order-bg px-4 py-3 text-sm text-status-made-to-order"
	>
		{m.privacy_reviewNotice({}, { locale })}
	</p>

	<div class="prose mt-6 max-w-2xl prose-neutral">
		<p>{m.privacy_p1({}, { locale })}</p>
		<p>{m.privacy_p2({}, { locale })}</p>
		<p>{m.privacy_p3({}, { locale })}</p>
		<p>{m.privacy_p4({}, { locale })}</p>
		<p>{m.privacy_p5({}, { locale })}</p>
	</div>
</div>
