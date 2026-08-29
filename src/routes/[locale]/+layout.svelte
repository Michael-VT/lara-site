<script>
	import { m } from '$lib/paraglide/messages.js';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';

	let { data, children } = $props();

	// Keep <html lang> in sync with the rendered locale (screen readers, hyphenation)
	$effect(() => {
		document.documentElement.lang = data.locale;
	});
</script>

<a href="#main-content" class="skip-link">{m.common_skipToContent({}, { locale: data.locale })}</a>

<SiteHeader />

<main id="main-content">
	{@render children()}
</main>

<SiteFooter />
