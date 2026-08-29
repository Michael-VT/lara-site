<script>
	/** @type {{ id: string, label: string }} */
	let { id, label } = $props();
</script>

<img
	src="/qr/{id}.svg"
	alt={label}
	width="140"
	height="140"
	class="rounded-control border border-border bg-white p-2 shadow-card"
/>
