<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import ProductCard from './ProductCard.svelte';

	/** @type {{ products: import('$lib/schemas/product.js').Product[] }} */
	let { products } = $props();

	let locale = $derived(page.data.locale);

	/** @type {HTMLElement | undefined} */
	let scrollerEl = $state();

	/** Arrows only exist when the rail can actually scroll. */
	let canScroll = $state(false);

	$effect(() => {
		const el = scrollerEl;
		if (!el) return;
		const measure = () => {
			canScroll = el.scrollWidth > el.clientWidth + 1;
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		for (const child of el.children) observer.observe(child);
		return () => observer.disconnect();
	});

	function scrollBy(/** @type {number} */ direction) {
		scrollerEl?.scrollBy({ left: direction * 300, behavior: 'smooth' });
	}

	function handleKeydown(/** @type {KeyboardEvent} */ e) {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			scrollBy(1);
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			scrollBy(-1);
		}
	}
</script>

{#if products.length > 0}
	<section aria-labelledby="related-heading">
		<div class="flex items-end justify-between gap-4">
			<div>
				<h2 id="related-heading" class="font-display text-xl text-foreground">
					{m.product_related({}, { locale })}
				</h2>
				<span class="bead-rule mt-2.5 w-10 text-accent" aria-hidden="true"></span>
			</div>

			<div class="hidden shrink-0 gap-2 {canScroll ? 'sm:flex' : 'sm:hidden'}">
				<button
					type="button"
					onclick={() => scrollBy(-1)}
					class="flex min-h-11 min-w-11 items-center justify-center rounded-control border border-border bg-surface text-foreground shadow-card transition-colors duration-200 hover:border-border-strong hover:text-accent"
				>
					<span class="sr-only">{m.product_lightboxPrev({}, { locale })}</span>
					<svg
						viewBox="0 0 24 24"
						width="18"
						height="18"
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
					onclick={() => scrollBy(1)}
					class="flex min-h-11 min-w-11 items-center justify-center rounded-control border border-border bg-surface text-foreground shadow-card transition-colors duration-200 hover:border-border-strong hover:text-accent"
				>
					<span class="sr-only">{m.product_lightboxNext({}, { locale })}</span>
					<svg
						viewBox="0 0 24 24"
						width="18"
						height="18"
						fill="none"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							d="M9 6l6 6-6 6"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -- WAI-ARIA scrollable-region pattern: keyboard-accessible rail -->
		<div
			bind:this={scrollerEl}
			role="region"
			tabindex="0"
			aria-label={m.product_related({}, { locale })}
			onkeydown={handleKeydown}
			class="no-scrollbar mt-6 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-1"
		>
			{#each products as product (product.sku)}
				<div class="w-60 shrink-0 snap-start sm:w-72">
					<ProductCard {product} />
				</div>
			{/each}
		</div>
	</section>
{/if}

<style>
	/* Tray rail: hide the scrollbar, keep wheel/touch/keyboard scrolling */
	.no-scrollbar {
		scrollbar-width: none;
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
