<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import { heroSlides } from '$lib/content/hero.js';
	import { toHref } from '$lib/utils/href.js';

	let locale = $derived(page.data.locale);
	let index = $state(0);

	/** @type {number | null} */
	let touchStartX = null;

	function goTo(/** @type {number} */ i) {
		index = (i + heroSlides.length) % heroSlides.length;
	}

	function next() {
		goTo(index + 1);
	}

	function prev() {
		goTo(index - 1);
	}

	function handleKeydown(/** @type {KeyboardEvent} */ e) {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			next();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prev();
		}
	}

	function handleTouchStart(/** @type {TouchEvent} */ e) {
		touchStartX = e.changedTouches[0].clientX;
	}

	function handleTouchEnd(/** @type {TouchEvent} */ e) {
		if (touchStartX === null) return;
		const delta = e.changedTouches[0].clientX - touchStartX;
		if (Math.abs(delta) > 40) {
			delta < 0 ? next() : prev();
		}
		touchStartX = null;
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions, a11y_no_noninteractive_tabindex -->
<div
	role="group"
	aria-roledescription="carousel"
	aria-label={m.home_heroSlide1Title({}, { locale })}
	tabindex="0"
	class="relative overflow-hidden rounded-card bg-surface"
	onkeydown={handleKeydown}
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
>
	<div class="relative aspect-[16/9] w-full sm:aspect-[21/9]">
		{#each heroSlides as slide, i (slide.image)}
			<div
				class="absolute inset-0 transition-opacity duration-500 {i === index
					? 'opacity-100'
					: 'pointer-events-none opacity-0'}"
				aria-roledescription="slide"
				aria-label="{i + 1} / {heroSlides.length}"
				aria-hidden={i !== index}
			>
				<img
					src={slide.image}
					alt={t(slide.altKey, {}, { locale })}
					width="1600"
					height="900"
					class="h-full w-full object-cover"
					loading={i === 0 ? 'eager' : 'lazy'}
					fetchpriority={i === 0 ? 'high' : 'auto'}
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent"
				></div>
				<div class="absolute inset-x-0 bottom-0 p-6 sm:p-10">
					<h2 class="font-display text-2xl font-semibold text-white sm:text-3xl">
						{t(slide.titleKey, {}, { locale })}
					</h2>
					<p class="mt-2 max-w-md text-sm text-white/90 sm:text-base">
						{t(slide.bodyKey, {}, { locale })}
					</p>
					<a
						href={toHref(`/${locale}/products/`)}
						class="mt-4 inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-4 text-sm font-medium text-accent-contrast"
					>
						{m.home_heroCta({}, { locale })}
					</a>
				</div>
			</div>
		{/each}
	</div>

	<button
		type="button"
		onclick={prev}
		class="absolute top-1/2 left-3 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-foreground shadow"
	>
		<span class="sr-only">{m.common_previous({}, { locale })}</span>
		<svg
			viewBox="0 0 24 24"
			width="20"
			height="20"
			fill="none"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path d="M15 6l-6 6 6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
	<button
		type="button"
		onclick={next}
		class="absolute top-1/2 right-3 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-foreground shadow"
	>
		<span class="sr-only">{m.common_next({}, { locale })}</span>
		<svg
			viewBox="0 0 24 24"
			width="20"
			height="20"
			fill="none"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path d="M9 6l6 6-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>

	<div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
		{#each heroSlides as slide, i (slide.image)}
			<button
				type="button"
				onclick={() => goTo(i)}
				aria-current={i === index}
				aria-label="{i + 1} / {heroSlides.length}"
				class="h-2.5 w-2.5 rounded-full {i === index ? 'bg-white' : 'bg-white/50'}"
			></button>
		{/each}
	</div>
</div>
