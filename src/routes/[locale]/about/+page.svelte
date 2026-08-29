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
	image="/images/about/home-portrait.webp"
/>

<div class="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
	<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<div class="rise-in relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-none">
			<div class="frame-arch absolute -inset-2.5 border border-accent/35" aria-hidden="true"></div>
			<img
				src="/images/about/home-portrait.webp"
				alt={m.about_portraitAlt({}, { locale })}
				width="570"
				height="1280"
				loading="eager"
				class="frame-arch relative aspect-[3/4] w-full object-cover object-top shadow-lift"
			/>
		</div>

		<header class="rise-in rise-delay-1">
			<p class="flex items-center gap-3 text-accent">
				<span class="bead-rule w-10" aria-hidden="true"></span>
				<span class="eyebrow">{m.siteTagline({}, { locale })}</span>
			</p>
			<h1 class="mt-5 font-display text-3xl text-foreground sm:text-4xl">
				{m.about_heading({}, { locale })}
			</h1>
			<p class="mt-5 text-lg leading-relaxed text-muted-foreground">
				{m.about_intro({}, { locale })}
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href={toHref(`/${locale}/products/`)}
					class="inline-flex min-h-11 items-center justify-center rounded-control bg-accent-fill px-6 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-accent-bright"
				>
					{m.about_ctaProducts({}, { locale })}
				</a>
				<a
					href={toHref(`/${locale}/how-to-order/`)}
					class="inline-flex min-h-11 items-center justify-center rounded-control border border-border-strong bg-surface px-6 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
				>
					{m.about_ctaOrder({}, { locale })}
				</a>
			</div>
		</header>
	</div>

	<div class="rise-in rise-delay-2 mx-auto mt-16 max-w-prose sm:mt-20">
		<span class="bead-rule w-12 text-accent" aria-hidden="true"></span>
		<div class="prose mt-8 max-w-none prose-neutral prose-p:text-foreground">
			<p>{m.about_story({}, { locale })}</p>
			<p>{m.about_process({}, { locale })}</p>
			<p>{m.about_materials({}, { locale })}</p>
		</div>

		<p class="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
			<span class="font-medium text-foreground">{m.about_locationLabel({}, { locale })}:</span>
			{m.about_location({}, { locale })}
		</p>
	</div>
</div>
