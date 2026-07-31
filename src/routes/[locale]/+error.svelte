<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';
</script>

<div class="mx-auto flex max-w-content flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
	<h1 class="font-display text-3xl text-foreground">
		{m.notFound_heading({}, { locale: page.data.locale })}
	</h1>
	<p class="text-muted-foreground">{m.notFound_body({}, { locale: page.data.locale })}</p>
	<a
		href={toHref(`/${page.data.locale}/`)}
		class="mt-2 inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-5 text-sm font-medium text-accent-contrast"
	>
		{m.notFound_cta({}, { locale: page.data.locale })}
	</a>
</div>
