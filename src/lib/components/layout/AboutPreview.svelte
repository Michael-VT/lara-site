<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';

	let locale = $derived(page.data.locale);
</script>

<section class="grid items-center gap-10 py-20 sm:py-24 md:grid-cols-2 md:gap-16">
	<div
		class="frame-arch w-full max-w-md justify-self-center bg-accent-wash p-2 shadow-card ring-1 ring-accent/50"
	>
		<img
			src="/images/about/home-portrait.webp"
			alt={m.about_portraitAlt({}, { locale })}
			width="570"
			height="1280"
			loading="lazy"
			class="frame-arch aspect-[3/4] w-full object-cover object-top"
		/>
	</div>
	<div class="max-w-xl">
		<h2 class="font-display text-3xl text-foreground sm:text-4xl">
			{m.home_aboutPreviewHeading({}, { locale })}
		</h2>
		<p class="mt-4 leading-relaxed text-muted-foreground">{m.about_intro({}, { locale })}</p>
		<a
			href={toHref(`/${locale}/about/`)}
			class="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
		>
			{m.home_aboutPreviewCta({}, { locale })}
			<span aria-hidden="true">→</span>
		</a>
	</div>
</section>
