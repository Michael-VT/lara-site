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

<button
	type="button"
	onclick={copy}
	class={className ||
		'inline-flex min-h-11 items-center justify-center rounded-control border border-border px-4 text-sm font-medium hover:bg-background'}
>
	{label}
</button>
<p aria-live="polite" class="sr-only">
	{#if status === 'success'}{m.order_copySuccess({}, { locale })}{/if}
	{#if status === 'error'}{m.order_copyError({}, { locale })}{/if}
</p>
{#if status === 'success'}
	<span class="ml-2 text-sm text-status-available" aria-hidden="true"
		>{m.order_copySuccess({}, { locale })}</span
	>
{:else if status === 'error'}
	<span class="ml-2 text-sm text-status-sold" aria-hidden="true"
		>{m.order_copyError({}, { locale })}</span
	>
{/if}
