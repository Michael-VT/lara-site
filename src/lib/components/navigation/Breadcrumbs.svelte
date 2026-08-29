<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';

	/** @type {{ current: string }} */
	let { current } = $props();

	let locale = $derived(page.data.locale);
</script>

<nav aria-label={m.common_breadcrumb({}, { locale })} class="text-sm text-muted-foreground">
	<ol class="flex flex-wrap items-center">
		<li>
			<a
				href={toHref(`/${locale}/`)}
				class="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-foreground"
				>{m.product_breadcrumbHome({}, { locale })}</a
			>
		</li>
		<li aria-hidden="true" class="mx-2 h-1 w-1 rounded-full bg-accent"></li>
		<li>
			<a
				href={toHref(`/${locale}/products/`)}
				class="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-foreground"
				>{m.product_breadcrumbProducts({}, { locale })}</a
			>
		</li>
		<li aria-hidden="true" class="mx-2 h-1 w-1 rounded-full bg-accent"></li>
		<li aria-current="page" class="flex min-h-11 items-center text-foreground">{current}</li>
	</ol>
</nav>
