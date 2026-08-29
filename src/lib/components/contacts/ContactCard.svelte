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
			'M12 3a9 9 0 0 0-7.9 13.3L2.5 21.5l5.3-1.5A9 9 0 1 0 12 3Zm-3.2 5.6c-.5.5-.7 1.3-.3 2.1a7.2 7.2 0 0 0 4.8 4.8c.8.4 1.6.2 2.1-.3l.6-.6-2-1.2-.8.8a6 6 0 0 1-2.4-2.4l.8-.8-1.2-2-.6.6Z',
		telegram:
			'M21.9 4.3 2.7 11.6c-1 .4-1 1 .1 1.3l4.9 1.5 1.9 5.8c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.3 4.7 3.5c.9.5 1.4.2 1.6-.8L22 5.3c.3-1.2-.2-1.7-1.1-1Zm-3.7 3.4-8.4 7.6-.3 3.1-1.5-4.9 10-6.4c.5-.3.9-.1.5.3Z',
		email:
			'M4 4.5h16A1.5 1.5 0 0 1 21.5 6v12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 18V6A1.5 1.5 0 0 1 4 4.5Zm.4 2 7.6 6.2 7.6-6.2'
	};
</script>

<article
	class="group flex flex-col gap-5 rounded-card border border-border bg-surface p-5 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-6"
>
	<div class="flex items-start gap-4">
		<span
			class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-accent-wash text-accent"
			aria-hidden="true"
		>
			<svg
				viewBox="0 0 24 24"
				width="20"
				height="20"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d={icons[channel]} />
			</svg>
		</span>
		<div class="min-w-0">
			<h3 class="font-display text-lg text-foreground">{label}</h3>
			<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
			<a
				{href}
				rel={external ? 'noopener noreferrer' : undefined}
				target={external ? '_blank' : undefined}
				class="mt-3 inline-flex min-h-11 items-center justify-center rounded-control border border-border-strong bg-surface px-5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent-wash hover:text-accent"
			>
				{displayValue}
				{#if external}
					<span class="sr-only"> — {m.common_openInNewTab({}, { locale })}</span>
				{/if}
			</a>
		</div>
	</div>

	<div class="flex flex-col items-center gap-2 self-center">
		<QrCode id={channel} label={m.order_qrLabel({ channel: label }, { locale })} />
		<span class="text-xs text-muted-foreground">{m.order_scanHint({}, { locale })}</span>
	</div>
</article>
