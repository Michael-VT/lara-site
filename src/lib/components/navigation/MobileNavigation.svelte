<script>
	import { page } from '$app/state';
	import { primaryNav } from '$lib/config/navigation.js';
	import { buildNavHref, toHref } from '$lib/utils/href.js';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	/** @type {{ open: boolean, onclose: () => void }} */
	let { open = false, onclose } = $props();

	/** @type {HTMLElement | undefined} */
	let dialogEl = $state();

	function handleKeydown(/** @type {KeyboardEvent} */ e) {
		if (e.key === 'Escape') {
			onclose();
			return;
		}
		if (e.key === 'Tab' && dialogEl) {
			const focusable = dialogEl.querySelectorAll('a[href], button:not([disabled])');
			if (focusable.length === 0) return;
			const first = /** @type {HTMLElement} */ (focusable[0]);
			const last = /** @type {HTMLElement} */ (focusable[focusable.length - 1]);
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}
	}

	$effect(() => {
		if (open && dialogEl) {
			/** @type {HTMLElement | null} */
			const firstLink = dialogEl.querySelector('a, button');
			firstLink?.focus();
		}
	});
</script>

{#if open}
	<div class="fixed inset-0 z-50 bg-foreground/40" onclick={onclose} aria-hidden="true"></div>
	<div
		bind:this={dialogEl}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		aria-label={m.nav_menu({}, { locale: page.data.locale })}
		onkeydown={handleKeydown}
		class="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-6 bg-surface p-6 shadow-xl"
	>
		<div class="flex items-center justify-between">
			<span class="font-display text-lg">{m.nav_menu({}, { locale: page.data.locale })}</span>
			<button
				type="button"
				onclick={onclose}
				class="flex min-h-11 min-w-11 items-center justify-center rounded-control text-foreground hover:bg-background"
			>
				<span class="sr-only">{m.nav_closeMenu({}, { locale: page.data.locale })}</span>
				<svg
					viewBox="0 0 24 24"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path d="M6 6l12 12M18 6L6 18" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
		</div>

		<nav aria-label={m.nav_menu({}, { locale: page.data.locale })}>
			<ul class="flex flex-col gap-1">
				{#each primaryNav as item (item.path)}
					<li>
						<a
							href={buildNavHref(page.data.locale, item.path)}
							class="block min-h-11 rounded-control px-3 py-3 text-base font-medium hover:bg-background"
							onclick={onclose}
						>
							{t(item.messageKey, {}, { locale: page.data.locale })}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<a
			href={toHref(`/${page.data.locale}/how-to-order/`)}
			class="inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-4 py-3 text-center font-medium text-accent-contrast"
			onclick={onclose}
		>
			{m.nav_order({}, { locale: page.data.locale })}
		</a>

		<LanguageSwitcher class="mt-auto" />
	</div>
{/if}
