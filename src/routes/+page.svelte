<script>
	import { onMount } from 'svelte';
	import { locales, localeNames, siteName } from '$lib/config/site.js';
	import { resolveLocale } from '$lib/utils/locale.js';
	import { buildNavHref } from '$lib/utils/href.js';

	onMount(() => {
		let stored = null;
		try {
			stored = localStorage.getItem('locale');
		} catch {
			// localStorage may be unavailable — fall back to browser language detection.
		}

		const locale = resolveLocale({
			stored,
			browserLanguages: navigator.languages ?? [navigator.language]
		});

		window.location.replace(`/${locale}/`);
	});
</script>

<svelte:head>
	<title>{siteName}</title>
</svelte:head>

<main
	class="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center"
>
	<h1 class="font-display text-2xl text-foreground">{siteName}</h1>
	<p class="text-muted-foreground">
		Choose your language / Escolha o idioma / Оберіть мову / Выберите язык
	</p>
	<ul class="flex flex-wrap justify-center gap-3">
		{#each locales as locale (locale)}
			<li>
				<a
					href={buildNavHref(locale, '')}
					class="inline-flex min-h-11 items-center justify-center rounded-control border border-border bg-surface px-5 text-sm font-medium text-foreground hover:bg-background"
				>
					{localeNames[locale]}
				</a>
			</li>
		{/each}
	</ul>
</main>
