<script>
	import { page } from '$app/state';
	import { locales, localeNames } from '$lib/config/site.js';
	import { buildLocaleSwitchHref } from '$lib/utils/locale.js';
	import { toHref } from '$lib/utils/href.js';
	import { m } from '$lib/paraglide/messages.js';

	/** @type {{ class?: string }} */
	let { class: className = '' } = $props();

	let open = $state(false);
	/** @type {HTMLElement | undefined} */
	let buttonEl = $state();
	/** @type {HTMLElement | undefined} */
	let menuEl = $state();

	function toggle() {
		open = !open;
	}

	function close() {
		open = false;
	}

	/** @param {import('$lib/config/site.js').Locale} targetLocale */
	function onSelect(targetLocale) {
		try {
			localStorage.setItem('locale', targetLocale);
		} catch {
			// localStorage may be unavailable (private browsing, disabled storage) — safe to ignore.
		}
		close();
	}

	function handleKeydown(/** @type {KeyboardEvent} */ e) {
		if (e.key === 'Escape') {
			close();
			buttonEl?.focus();
		}
	}

	$effect(() => {
		if (!open) return;
		/** @param {MouseEvent} e */
		function onDocumentClick(e) {
			const target = /** @type {Node} */ (e.target);
			if (!menuEl?.contains(target) && !buttonEl?.contains(target)) close();
		}
		document.addEventListener('click', onDocumentClick);
		return () => document.removeEventListener('click', onDocumentClick);
	});
</script>

<div class="relative {className}">
	<button
		bind:this={buttonEl}
		type="button"
		onclick={toggle}
		onkeydown={handleKeydown}
		aria-haspopup="true"
		aria-expanded={open}
		aria-label={m.lang_label({}, { locale: page.data.locale })}
		class="inline-flex min-h-11 items-center gap-1.5 rounded-control px-3 text-sm font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:bg-accent-wash hover:text-foreground"
	>
		<svg
			viewBox="0 0 24 24"
			width="18"
			height="18"
			fill="none"
			stroke="currentColor"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="9" stroke-width="1.6" />
			<path
				d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"
				stroke-width="1.6"
			/>
		</svg>
		{page.data.locale}
		<svg
			viewBox="0 0 24 24"
			width="14"
			height="14"
			fill="none"
			stroke="currentColor"
			aria-hidden="true"
			class="transition-transform duration-200 {open ? 'rotate-180' : ''}"
		>
			<path d="m6 9 6 6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>

	{#if open}
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions (Escape-to-close is a standard dropdown/disclosure keyboard pattern) -->
		<nav
			bind:this={menuEl}
			onkeydown={handleKeydown}
			aria-label={m.lang_label({}, { locale: page.data.locale })}
			class="lang-menu absolute top-full right-0 z-50 mt-2 min-w-44 overflow-hidden rounded-card border border-border bg-surface py-1.5 shadow-lift"
		>
			<ul>
				{#each locales as targetLocale (targetLocale)}
					{@const active = page.data.locale === targetLocale}
					<li>
						<a
							href={toHref(buildLocaleSwitchHref(page.url, targetLocale))}
							aria-current={active ? 'page' : undefined}
							onclick={() => onSelect(targetLocale)}
							class="flex min-h-11 items-center gap-2 px-4 text-sm transition-colors {active
								? 'font-medium text-accent'
								: 'text-foreground hover:bg-accent-wash'}"
						>
							{localeNames[targetLocale]}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</div>

<style>
	/* The menu unrolls softly from beneath the control, like a tray sliding out. */
	.lang-menu {
		transform-origin: top right;
		animation: menu-unroll 0.22s var(--ease-out-soft) both;
	}

	@keyframes menu-unroll {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
