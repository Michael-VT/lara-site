<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';
	import { siteName } from '$lib/config/site.js';

	let locale = $derived(page.data.locale);
</script>

<svelte:head>
	<title>{page.status} — {siteName}</title>
</svelte:head>

<section class="bead-field bg-ink">
	<div
		class="mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[75vh] sm:px-6"
	>
		<span class="h-2.5 w-2.5 rounded-full bg-accent-bright" aria-hidden="true"></span>
		<p class="rise-in mt-6 font-display text-7xl leading-none text-ivory sm:text-8xl">
			{page.status}
		</p>
		<h1 class="rise-in rise-delay-1 mt-5 font-display text-3xl text-ivory sm:text-4xl">
			{m.notFound_heading({}, { locale })}
		</h1>
		<p class="rise-in rise-delay-2 mt-3 max-w-md leading-relaxed text-sage">
			{m.notFound_body({}, { locale })}
		</p>
		<a
			href={toHref(`/${locale}/`)}
			class="rise-in rise-delay-3 focus-dark mt-8 inline-flex min-h-11 items-center justify-center rounded-control bg-accent-fill px-6 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-accent-bright"
		>
			{m.notFound_cta({}, { locale })}
		</a>
	</div>
</section>
