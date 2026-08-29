<script>
	import '@fontsource/prata/400.css';
	import '@fontsource/golos-text/400.css';
	import '@fontsource/golos-text/500.css';
	import '@fontsource/golos-text/600.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
