<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import QrCode from './QrCode.svelte';

	/**
	 * @type {{
	 * 	channel: 'whatsapp' | 'telegram' | 'email',
	 * 	label: string,
	 * 	description: string,
	 * 	href: string,
	 * 	displayValue: string,
	 * 	external?: boolean
	 * }}
	 */
	let { channel, label, description, href, displayValue, external = true } = $props();

	let locale = $derived(page.data.locale);

	const icons = {
		whatsapp:
			'M20.5 3.5A11 11 0 0 0 3.7 17L2 22l5.1-1.7A11 11 0 1 0 20.5 3.5ZM12 20.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 1 1-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.3-3.2-2.9-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z',
		telegram:
			'M21.9 4.3 2.7 11.6c-1 .4-1 1 .1 1.3l4.9 1.5 1.9 5.8c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.3 4.7 3.5c.9.5 1.4.2 1.6-.8L22 5.3c.3-1.2-.2-1.7-1.1-1Zm-3.7 3.4-8.4 7.6-.3 3.1-1.5-4.9 10-6.4c.5-.3.9-.1.5.3Z',
		email: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2 8 6 8-6'
	};
</script>

<div
	class="flex flex-col gap-4 rounded-card border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
>
	<div class="flex items-start gap-3">
		<svg
			viewBox="0 0 24 24"
			width="28"
			height="28"
			fill="none"
			stroke="currentColor"
			class="mt-0.5 shrink-0 text-accent"
			aria-hidden="true"
		>
			<path d={icons[channel]} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<div>
			<h3 class="font-medium text-foreground">{label}</h3>
			<p class="text-sm text-muted-foreground">{description}</p>
			<a
				{href}
				rel={external ? 'noopener noreferrer' : undefined}
				target={external ? '_blank' : undefined}
				class="mt-2 inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-4 text-sm font-medium text-accent-contrast"
			>
				{displayValue}
			</a>
			{#if external}
				<span class="sr-only">{m.common_openInNewTab({}, { locale })}</span>
			{/if}
		</div>
	</div>

	<div class="flex flex-col items-center gap-1 self-center">
		<QrCode id={channel} label={m.order_qrLabel({ channel: label }, { locale })} />
		<span class="text-xs text-muted-foreground">{m.order_scanHint({}, { locale })}</span>
	</div>
</div>
