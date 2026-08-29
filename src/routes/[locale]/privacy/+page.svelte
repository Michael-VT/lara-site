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

<div class="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
	<header class="rise-in max-w-2xl">
		<p class="flex items-center gap-3 text-accent">
			<span class="bead-rule w-10" aria-hidden="true"></span>
			<span class="eyebrow">{m.siteTagline({}, { locale })}</span>
		</p>
		<h1 class="mt-5 font-display text-3xl text-foreground sm:text-4xl">
			{m.privacy_heading({}, { locale })}
		</h1>
	</header>

	<p
		class="rise-in rise-delay-1 mt-8 rounded-card border border-border bg-status-made-to-order-bg px-4 py-3 text-sm leading-relaxed text-status-made-to-order"
	>
		{m.privacy_reviewNotice({}, { locale })}
	</p>

	<div
		class="rise-in rise-delay-1 prose mt-8 max-w-prose prose-neutral prose-p:leading-relaxed prose-p:text-foreground prose-strong:text-foreground"
	>
		<p>{m.privacy_p1({}, { locale })}</p>
		<p>{m.privacy_p2({}, { locale })}</p>
		<p>{m.privacy_p3({}, { locale })}</p>
		<p>{m.privacy_p4({}, { locale })}</p>
		<p>{m.privacy_p5({}, { locale })}</p>
	</div>
</div>
