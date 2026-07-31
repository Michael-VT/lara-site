<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';

	let locale = $derived(page.data.locale);
</script>

<SeoHead title={m.notFound_heading({}, { locale })} description={m.notFound_body({}, { locale })} />

<div class="mx-auto flex max-w-content flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
	<h1 class="font-display text-3xl text-foreground">{m.notFound_heading({}, { locale })}</h1>
	<p class="text-muted-foreground">{m.notFound_body({}, { locale })}</p>
	<a
		href={toHref(`/${locale}/`)}
		class="mt-2 inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-5 text-sm font-medium text-accent-contrast"
	>
		{m.notFound_cta({}, { locale })}
	</a>
</div>
