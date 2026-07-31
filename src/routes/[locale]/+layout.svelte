<script>
	import { m } from '$lib/paraglide/messages.js';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';

	let { data, children } = $props();
</script>

<a href="#main-content" class="skip-link">{m.common_skipToContent({}, { locale: data.locale })}</a>

<SiteHeader />

<main id="main-content">
	{@render children()}
</main>

<SiteFooter />
