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
</script>

<header class="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
	<div class="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6">
		<a
			href={buildNavHref(page.data.locale, '')}
			class="font-display text-xl font-semibold tracking-tight text-foreground"
		>
			{siteName}
		</a>

		<nav aria-label={m.nav_menu({}, { locale: page.data.locale })} class="hidden lg:block">
			<ul class="flex items-center gap-6">
				{#each primaryNav as item (item.path)}
					{@const href = buildNavHref(page.data.locale, item.path)}
					<li>
						<a
							{href}
							class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
							aria-current={page.url.pathname === href ? 'page' : undefined}
						>
							{t(item.messageKey, {}, { locale: page.data.locale })}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex items-center gap-2">
			<LanguageSwitcher class="hidden sm:block" />

			<a
				href={toHref(`/${page.data.locale}/how-to-order/`)}
				class="hidden min-h-11 items-center justify-center rounded-control bg-accent px-4 text-sm font-medium text-accent-contrast lg:inline-flex"
			>
				{m.nav_order({}, { locale: page.data.locale })}
			</a>

			<button
				type="button"
				class="flex min-h-11 min-w-11 items-center justify-center rounded-control lg:hidden"
				onclick={() => (mobileOpen = true)}
				aria-haspopup="dialog"
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

<MobileNavigation open={mobileOpen} onclose={() => (mobileOpen = false)} />
