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

<ol class="grid gap-4 sm:grid-cols-3 sm:gap-5">
	{#each steps as step, i (step.titleKey)}
		<li
			class="group relative flex flex-col gap-3 rounded-card border border-border bg-surface p-6 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-7"
		>
			<div class="flex items-center gap-3">
				<span
					aria-hidden="true"
					class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-base text-accent-bright"
				>
					{i + 1}
				</span>
			</div>
			<h3 class="font-display text-lg text-foreground">{t(step.titleKey, {}, { locale })}</h3>
			<p class="text-sm leading-relaxed text-muted-foreground">
				{t(step.bodyKey, {}, { locale })}
			</p>
		</li>
	{/each}
</ol>
