<script>
	/** @type {{ data: Record<string, unknown> }} */
	let { data } = $props();

	let script = $derived(
		`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</` +
			'script>'
	);
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html script}
</svelte:head>
