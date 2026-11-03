<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { contactIconPaths } from '$lib/config/contact-icons.js';
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
				<path d={contactIconPaths[channel]} />
			</svg>
		</span>
		<div class="min-w-0">
			<h3 class="font-display text-lg text-foreground">{label}</h3>
			<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
			<a
				{href}
				rel={external ? 'nofollow noopener noreferrer' : undefined}
				target={external ? '_blank' : undefined}
				class="mt-3 inline-flex min-h-11 items-center justify-center rounded-control border border-border-strong bg-surface px-5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent-wash hover:text-accent"
			>
				{displayValue}
				{#if external}
					<span class="sr-only"> - {m.common_openInNewTab({}, { locale })}</span>
				{/if}
			</a>
		</div>
	</div>

	<div class="flex flex-col items-center gap-2 self-center">
		<QrCode id={channel} label={m.order_qrLabel({ channel: label }, { locale })} />
		<span class="text-xs text-muted-foreground">{m.order_scanHint({}, { locale })}</span>
	</div>
</article>
