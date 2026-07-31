<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';

	let locale = $derived(page.data.locale);
</script>

<SeoHead
	title={m.about_heading({}, { locale })}
	description={m.about_intro({}, { locale })}
	image="/images/about/portrait.webp"
/>

<div class="mx-auto max-w-content px-4 py-8 sm:px-6">
	<div class="grid items-start gap-10 md:grid-cols-2">
		<img
			src="/images/about/portrait.webp"
			alt=""
			width="1000"
			height="473"
			class="aspect-[2/1] w-full rounded-card object-cover"
		/>

		<div>
			<h1 class="font-display text-3xl text-foreground">{m.about_heading({}, { locale })}</h1>
			<p class="mt-4 text-foreground">{m.about_intro({}, { locale })}</p>
			<p class="mt-4 text-foreground">{m.about_story({}, { locale })}</p>
			<p class="mt-4 text-foreground">{m.about_process({}, { locale })}</p>
			<p class="mt-4 text-foreground">{m.about_materials({}, { locale })}</p>

			<p class="mt-6 text-sm text-muted-foreground">
				<span class="font-medium text-foreground">{m.about_locationLabel({}, { locale })}:</span>
				{m.about_location({}, { locale })}
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href={toHref(`/${locale}/products/`)}
					class="inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-5 text-sm font-medium text-accent-contrast"
				>
					{m.about_ctaProducts({}, { locale })}
				</a>
				<a
					href={toHref(`/${locale}/how-to-order/`)}
					class="inline-flex min-h-11 items-center justify-center rounded-control border border-border px-5 text-sm font-medium hover:bg-surface"
				>
					{m.about_ctaOrder({}, { locale })}
				</a>
			</div>
		</div>
	</div>
</div>
