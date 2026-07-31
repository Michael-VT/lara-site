<script>
	/** @type {{ message: string, actionLabel?: string, onAction?: () => void }} */
	let { message, actionLabel, onAction } = $props();
</script>

<div
	class="flex flex-col items-center gap-4 rounded-card border border-dashed border-border bg-surface p-10 text-center"
>
	<p class="text-muted-foreground">{message}</p>
	{#if actionLabel && onAction}
		<button
			type="button"
			onclick={onAction}
			class="inline-flex min-h-11 items-center justify-center rounded-control border border-border px-4 text-sm font-medium hover:bg-background"
		>
			{actionLabel}
		</button>
	{/if}
</div>
