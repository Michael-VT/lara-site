<script>
	import { page } from '$app/state';
	import { primaryNav } from '$lib/config/navigation.js';
	import { locales, localeNames } from '$lib/config/site.js';
	import { buildNavHref, toHref } from '$lib/utils/href.js';
	import { buildLocaleSwitchHref } from '$lib/utils/locale.js';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';

	/** @type {{ open: boolean, onclose: () => void }} */
	let { open = false, onclose } = $props();

	/** @type {HTMLElement | undefined} */
	let dialogEl = $state();

	/* Full class names kept literal so the stagger utilities are always in the source. */
	const stagger = ['rise-delay-1', 'rise-delay-2', 'rise-delay-3', 'rise-delay-4', 'rise-delay-4'];

	/** @param {import('$lib/config/site.js').Locale} targetLocale */
	function selectLocale(targetLocale) {
		try {
			localStorage.setItem('locale', targetLocale);
		} catch {
			// localStorage may be unavailable (private browsing, disabled storage) — safe to ignore.
		}
		onclose();
	}

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
			// Scroll lock — the tray holds the page still beneath the velvet overlay.
			const previousOverflow = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			return () => {
				document.body.style.overflow = previousOverflow;
			};
		}
	});
</script>

{#if open}
	<div
		bind:this={dialogEl}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		aria-label={m.nav_menu({}, { locale: page.data.locale })}
		onkeydown={handleKeydown}
		class="bead-field fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink px-6 pt-4 pb-8 sm:px-10"
	>
		<div class="flex items-center justify-between">
			<span class="eyebrow text-accent-bright">{m.nav_menu({}, { locale: page.data.locale })}</span>
			<button
				type="button"
				onclick={onclose}
				class="focus-dark flex min-h-11 min-w-11 items-center justify-center rounded-control text-accent-bright transition-colors hover:bg-ink-soft"
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

		<nav
			aria-label={m.nav_menu({}, { locale: page.data.locale })}
			class="flex flex-1 flex-col justify-center py-8"
		>
			<ul class="flex flex-col gap-3">
				{#each primaryNav as item, index (item.path)}
					{@const href = buildNavHref(page.data.locale, item.path)}
					{@const active = page.url.pathname === href}
					<li class="rise-in {stagger[index] ?? ''}">
						<a
							{href}
							aria-current={active ? 'page' : undefined}
							onclick={onclose}
							class="focus-dark flex min-h-11 items-center gap-4 py-1 font-display text-[2rem] leading-tight transition-colors duration-300 {active
								? 'text-accent-bright'
								: 'text-ivory hover:text-accent-bright'}"
						>
							{t(item.messageKey, {}, { locale: page.data.locale })}
							{#if active}
								<!-- Signature: the current page carries a stitched gold bead marker -->
								<span class="bead-rule w-10 text-accent-bright" aria-hidden="true"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex flex-col gap-6">
			<a
				href={toHref(`/${page.data.locale}/how-to-order/`)}
				onclick={onclose}
				class="focus-dark inline-flex min-h-11 items-center justify-center rounded-control bg-accent-fill px-6 py-3 text-center text-sm font-medium text-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-px"
			>
				{m.nav_order({}, { locale: page.data.locale })}
			</a>

			<nav aria-label={m.lang_label({}, { locale: page.data.locale })}>
				<ul class="flex flex-wrap items-center gap-2">
					{#each locales as targetLocale (targetLocale)}
						{@const active = page.data.locale === targetLocale}
						<li>
							<a
								href={toHref(buildLocaleSwitchHref(page.url, targetLocale))}
								aria-current={active ? 'page' : undefined}
								aria-label={m.lang_switchTo(
									{ language: localeNames[targetLocale] },
									{ locale: page.data.locale }
								)}
								onclick={() => selectLocale(targetLocale)}
								class="focus-dark flex min-h-11 items-center rounded-control px-4 text-sm font-medium tracking-widest uppercase transition-colors {active
									? 'bg-ink-soft text-accent-bright ring-1 ring-accent-bright/40 ring-inset'
									: 'text-sage hover:bg-ink-soft hover:text-ivory'}"
							>
								{targetLocale}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
{/if}
