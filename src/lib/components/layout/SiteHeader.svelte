<script>
	import { page } from '$app/state';
	import { primaryNav } from '$lib/config/navigation.js';
	import { siteName } from '$lib/config/site.js';
	import { buildNavHref, toHref } from '$lib/utils/href.js';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import LanguageSwitcher from '$lib/components/navigation/LanguageSwitcher.svelte';
	import MobileNavigation from '$lib/components/navigation/MobileNavigation.svelte';

	let mobileOpen = $state(false);

	/** @type {HTMLButtonElement | undefined} */
	let menuTriggerEl = $state();

	function closeMobileNavigation() {
		mobileOpen = false;
		// Return keyboard focus to the trigger — Escape/overlay close must not
		// drop users to <body>.
		menuTriggerEl?.focus();
	}
</script>

<header class="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
	<div class="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6">
		<a
			href={buildNavHref(page.data.locale, '')}
			class="-mx-1 flex min-h-11 items-center gap-3 px-1"
		>
			<span class="font-display text-[1.3rem] leading-none whitespace-nowrap text-foreground">
				{siteName}
			</span>
			<!-- Signature: a short stitch of gold seed beads after the wordmark -->
			<span class="bead-rule w-8 shrink-0 text-accent" aria-hidden="true"></span>
		</a>

		<nav aria-label={m.nav_primary({}, { locale: page.data.locale })} class="hidden lg:block">
			<ul class="flex items-center gap-7">
				{#each primaryNav as item (item.path)}
					{@const href = buildNavHref(page.data.locale, item.path)}
					{@const active = page.url.pathname === href}
					<li>
						<a
							{href}
							aria-current={active ? 'page' : undefined}
							class="nav-link -mx-2 inline-flex min-h-11 items-center px-2 text-[0.9rem] font-medium {active
								? 'nav-link-current text-foreground'
								: 'text-muted-foreground hover:text-foreground'}"
						>
							<span>{t(item.messageKey, {}, { locale: page.data.locale })}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex items-center gap-2">
			<LanguageSwitcher class="hidden sm:block" />

			<a
				href={toHref(`/${page.data.locale}/how-to-order/`)}
				class="hidden min-h-11 items-center justify-center rounded-control bg-ink px-5 text-sm font-medium text-ivory shadow-card transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:bg-ink-soft lg:inline-flex"
			>
				{m.nav_order({}, { locale: page.data.locale })}
			</a>

			<button
				type="button"
				class="flex min-h-11 min-w-11 items-center justify-center rounded-control text-foreground transition-colors hover:bg-accent-wash lg:hidden"
				onclick={() => (mobileOpen = true)}
				aria-haspopup="dialog"
				bind:this={menuTriggerEl}
			>
				<span class="sr-only">{m.nav_openMenu({}, { locale: page.data.locale })}</span>
				<svg
					viewBox="0 0 24 24"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path d="M4 7h16M4 12h16M4 17h16" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
		</div>
	</div>
</header>

<MobileNavigation open={mobileOpen} onclose={closeMobileNavigation} />

<style>
	/* Nav links — quiet Golos labels stitched with a gold bead-thread underline
	   that draws itself in on hover and stays sewn on the current page. */
	.nav-link {
		transition: color 0.2s ease;
	}

	.nav-link > span {
		padding-bottom: 3px;
		background-image: linear-gradient(var(--color-accent-fill), var(--color-accent-fill));
		background-repeat: no-repeat;
		background-position: 0 100%;
		background-size: 0% 2px;
		transition: background-size 0.35s var(--ease-out-soft);
	}

	.nav-link:hover > span,
	.nav-link:focus-visible > span {
		background-size: 100% 2px;
	}

	.nav-link-current > span {
		background-size: 100% 2px;
	}
</style>
