<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import { heroSlides } from '$lib/content/hero.js';

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
	class="rise-in focus-dark w-full"
	onkeydown={handleKeydown}
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
>
	<!-- The display case: gold hairline frame around the arch -->
	<div class="frame-arch bg-ink-soft p-2 shadow-lift ring-1 ring-accent-bright/40">
		<div class="frame-arch relative aspect-[4/5] overflow-hidden bg-ink-soft">
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
						width={slide.width}
						height={slide.height}
						class="h-full w-full object-cover"
						loading="eager"
						fetchpriority={i === 0 ? 'high' : 'auto'}
					/>
				</div>
			{/each}
		</div>
	</div>

	<!-- Controls below the frame: bead-dot pagination + round ghost arrows -->
	<div class="mt-4 flex items-center justify-between gap-4">
		<div class="flex items-center gap-1">
			{#each heroSlides as slide, i (slide.image)}
				<button
					type="button"
					onclick={() => goTo(i)}
					aria-current={i === index ? 'page' : undefined}
					aria-label="{i + 1} / {heroSlides.length}"
					class="group focus-dark flex items-center justify-center rounded-full p-[18px]"
				>
					<span
						class="block h-2 w-2 rounded-full transition-colors duration-300 {i === index
							? 'bg-accent-bright'
							: 'bg-ivory/25 group-hover:bg-ivory/50'}"
					></span>
				</button>
			{/each}
		</div>
		<div class="flex items-center gap-2">
			<button
				type="button"
				onclick={prev}
				class="focus-dark flex min-h-11 min-w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors duration-300 hover:border-ivory/60 hover:bg-ivory/5"
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
					<path
						d="M15 6l-6 6 6 6"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<button
				type="button"
				onclick={next}
				class="focus-dark flex min-h-11 min-w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors duration-300 hover:border-ivory/60 hover:bg-ivory/5"
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
		</div>
	</div>

	<p class="mt-2 text-[0.85rem] leading-relaxed text-sage" aria-live="polite">
		{t(heroSlides[index].titleKey, {}, { locale })}
	</p>
</div>
