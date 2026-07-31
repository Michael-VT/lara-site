<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';

	let locale = $derived(page.data.locale);
</script>

<section class="grid items-center gap-8 md:grid-cols-2">
	<img
		src="/images/about/portrait.svg"
		alt=""
		width="900"
		height="1100"
		loading="lazy"
		class="aspect-[4/5] w-full rounded-card object-cover"
	/>
	<div>
		<h2 class="font-display text-2xl text-foreground">
			{m.home_aboutPreviewHeading({}, { locale })}
		</h2>
		<p class="mt-3 text-muted-foreground">{m.about_intro({}, { locale })}</p>
		<a
			href={toHref(`/${locale}/about/`)}
			class="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
		>
			{m.home_aboutPreviewCta({}, { locale })} →
		</a>
	</div>
</section>
