<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { toHref } from '$lib/utils/href.js';

	/** @type {{ current: string }} */
	let { current } = $props();

	let locale = $derived(page.data.locale);
</script>

<nav aria-label={m.common_breadcrumb({}, { locale })} class="text-sm text-muted-foreground">
	<ol class="flex flex-wrap items-center gap-1">
		<li>
			<a href={toHref(`/${locale}/`)} class="hover:text-foreground"
				>{m.product_breadcrumbHome({}, { locale })}</a
			>
		</li>
		<li aria-hidden="true">/</li>
		<li>
			<a href={toHref(`/${locale}/products/`)} class="hover:text-foreground"
				>{m.product_breadcrumbProducts({}, { locale })}</a
			>
		</li>
		<li aria-hidden="true">/</li>
		<li aria-current="page" class="text-foreground">{current}</li>
	</ol>
</nav>
