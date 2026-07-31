<script>
	import { page } from '$app/state';
	import { t } from '$lib/utils/messages.js';

	let locale = $derived(page.data.locale);

	let steps = $derived([
		{ titleKey: 'steps_step1Title', bodyKey: 'steps_step1Body' },
		{ titleKey: 'steps_step2Title', bodyKey: 'steps_step2Body' },
		{ titleKey: 'steps_step3Title', bodyKey: 'steps_step3Body' }
	]);
</script>

<ol class="grid gap-6 sm:grid-cols-3">
	{#each steps as step, i (step.titleKey)}
		<li class="flex flex-col gap-2 rounded-card border border-border bg-surface p-6">
			<span class="font-display text-2xl text-accent">{i + 1}</span>
			<h3 class="font-medium text-foreground">{t(step.titleKey, {}, { locale })}</h3>
			<p class="text-sm text-muted-foreground">{t(step.bodyKey, {}, { locale })}</p>
		</li>
	{/each}
</ol>
