<script>
	/** @type {{ message: string, actionLabel?: string, onAction?: () => void }} */
	let { message, actionLabel, onAction } = $props();
</script>

<div
	class="flex flex-col items-center gap-5 rounded-card border border-border bg-surface px-6 py-16 text-center shadow-card"
>
	<span class="bead-rule w-10 text-accent" aria-hidden="true"></span>
	<h2 class="max-w-md font-display text-xl text-foreground">{message}</h2>
	{#if actionLabel && onAction}
		<button
			type="button"
			onclick={onAction}
			class="inline-flex min-h-11 items-center justify-center rounded-control bg-ink px-5 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-ink-soft"
		>
			{actionLabel}
		</button>
	{/if}
</div>
