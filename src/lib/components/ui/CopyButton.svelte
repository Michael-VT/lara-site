<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';

	/** @type {{ text: string, label: string, class?: string }} */
	let { text, label, class: className = '' } = $props();

	let locale = $derived(page.data.locale);

	/** @type {'idle' | 'success' | 'error'} */
	let status = $state('idle');

	async function copy() {
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(text);
			} else {
				const textarea = document.createElement('textarea');
				textarea.value = text;
				textarea.style.position = 'fixed';
				textarea.style.opacity = '0';
				document.body.appendChild(textarea);
				textarea.focus();
				textarea.select();
				document.execCommand('copy');
				document.body.removeChild(textarea);
			}
			status = 'success';
		} catch {
			status = 'error';
		}
		setTimeout(() => (status = 'idle'), 3000);
	}
</script>

<span class="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
	<button
		type="button"
		onclick={copy}
		class={className ||
			'focus-dark inline-flex min-h-11 items-center justify-center gap-2 rounded-control border px-5 text-sm font-semibold transition-colors duration-300 ' +
				(status === 'success'
					? 'border-accent-bright/60 bg-ink text-accent-bright'
					: 'border-transparent bg-accent-fill text-ink hover:bg-accent-bright')}
	>
		{#if status === 'success'}
			<svg
				viewBox="0 0 24 24"
				width="16"
				height="16"
				fill="none"
				stroke="currentColor"
				stroke-width="2.2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="M5 13l4 4L19 7" />
			</svg>
			{m.order_copySuccess({}, { locale })}
		{:else}
			<svg
				viewBox="0 0 24 24"
				width="16"
				height="16"
				fill="none"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<rect x="9" y="9" width="11" height="11" rx="2.5" />
				<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
			</svg>
			{label}
		{/if}
	</button>
	{#if status === 'error'}
		<span class="text-xs text-accent-bright" aria-hidden="true">
			{m.order_copyError({}, { locale })}
		</span>
	{/if}
</span>
<p aria-live="polite" class="sr-only">
	{#if status === 'success'}{m.order_copySuccess({}, { locale })}{/if}
	{#if status === 'error'}{m.order_copyError({}, { locale })}{/if}
</p>
