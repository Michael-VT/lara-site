<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeText } from '$lib/services/catalog.js';

	/** @type {{ images: import('$lib/schemas/product.js').ProductImage[] }} */
	let { images } = $props();

	let locale = $derived(page.data.locale);
	let active = $state(0);
	let lightboxOpen = $state(false);

	/** @type {HTMLElement | undefined} */
	let lightboxEl = $state();
	/** @type {HTMLElement | undefined} */
	let triggerEl = $state();
	/** @type {HTMLButtonElement[]} */
	let tabEls = $state([]);

	function select(/** @type {number} */ i) {
		active = i;
	}

	function next() {
		active = (active + 1) % images.length;
	}

	function prev() {
		active = (active - 1 + images.length) % images.length;
	}

	function handleKeydown(/** @type {KeyboardEvent} */ e) {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			const nextIndex = (active + 1) % images.length;
			select(nextIndex);
			tabEls[nextIndex]?.focus();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			const prevIndex = (active - 1 + images.length) % images.length;
			select(prevIndex);
			tabEls[prevIndex]?.focus();
		} else if (e.key === 'Home') {
			e.preventDefault();
			select(0);
			tabEls[0]?.focus();
		} else if (e.key === 'End') {
			e.preventDefault();
			select(images.length - 1);
			tabEls[images.length - 1]?.focus();
		}
	}

	function openLightbox(/** @type {MouseEvent} */ e) {
		triggerEl = /** @type {HTMLElement} */ (e.currentTarget);
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		triggerEl?.focus();
	}

	function handleLightboxKeydown(/** @type {KeyboardEvent} */ e) {
		if (e.key === 'Escape') {
			e.preventDefault();
			closeLightbox();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			next();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prev();
		} else if (e.key === 'Tab' && lightboxEl) {
			const focusable = lightboxEl.querySelectorAll('button:not([disabled])');
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
		if (lightboxOpen && lightboxEl) {
			lightboxEl.focus();
			// Hold the page still beneath the lightbox.
			const previousOverflow = document.body.style.overflow;
			return () => {
				document.body.style.overflow = previousOverflow;
			};
		}
	});
</script>

<div class="rise-in flex flex-col gap-4">
	<div id="product-gallery-panel" role="tabpanel" aria-labelledby="product-gallery-tab-{active}">
		<button
			type="button"
			onclick={openLightbox}
			aria-label={m.product_galleryOpenFullscreen(
				{ index: active + 1, count: images.length },
				{ locale }
			)}
			class="group block w-full touch-manipulation overflow-hidden rounded-card bg-surface shadow-card ring-1 ring-accent/30 transition-shadow duration-300 hover:shadow-lift"
		>
			<img
				src={images[active].src}
				alt={localizeText(images[active].alt, locale)}
				width={images[active].width}
				height={images[active].height}
				loading="eager"
				fetchpriority="high"
				class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
			/>
		</button>
	</div>

	{#if images.length > 1}
		<!-- svelte-ignore a11y_interactive_supports_focus -- roving tabindex lives on the tabs -->
		<div
			role="tablist"
			aria-label={m.product_galleryLabel({}, { locale })}
			aria-orientation="horizontal"
			onkeydown={handleKeydown}
			class="flex flex-wrap gap-3"
		>
			{#each images as image, i (image.src)}
				<button
					type="button"
					role="tab"
					id="product-gallery-tab-{i}"
					aria-selected={i === active}
					aria-controls="product-gallery-panel"
					tabindex={i === active ? 0 : -1}
					bind:this={tabEls[i]}
					aria-label={m.product_galleryThumbnail(
						{ index: i + 1, count: images.length },
						{ locale }
					)}
					onclick={() => select(i)}
					class="size-[4.5rem] shrink-0 touch-manipulation overflow-hidden rounded-control ring-2 transition-opacity duration-200 {i ===
					active
						? 'ring-accent'
						: 'opacity-70 ring-transparent hover:opacity-100'}"
				>
					<img
						src={image.thumb ?? image.src}
						alt=""
						width={72}
						height={Math.round((72 * image.height) / image.width)}
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</button>
			{/each}
		</div>
	{/if}
</div>

{#if lightboxOpen}
	<div class="fixed inset-0 z-50 bg-foreground/90" aria-hidden="true"></div>
	<div
		bind:this={lightboxEl}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		aria-label={localizeText(images[active].alt, locale)}
		onkeydown={handleLightboxKeydown}
		onclick={(e) => {
			// Any click outside the dialog's buttons closes the lightbox.
			if (!(/** @type {HTMLElement} */ (e.target).closest('button'))) closeLightbox();
		}}
		class="fixed inset-0 z-50 flex flex-col"
	>
		<div class="flex justify-end p-3">
			<button
				type="button"
				onclick={closeLightbox}
				class="focus-dark flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-control text-background hover:bg-background/10"
			>
				<span class="sr-only">{m.product_lightboxClose({}, { locale })}</span>
				<svg
					viewBox="0 0 24 24"
					width="28"
					height="28"
					fill="none"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path d="M6 6l12 12M18 6L6 18" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
		</div>

		<div class="flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4">
			<img
				src={images[active].src}
				alt={localizeText(images[active].alt, locale)}
				width={images[active].width}
				height={images[active].height}
				class="max-h-full max-w-full object-contain"
			/>
		</div>

		<div class="flex items-center justify-center gap-6 p-4 pb-6">
			{#if images.length > 1}
				<button
					type="button"
					onclick={prev}
					class="focus-dark flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-control text-background hover:bg-background/10"
				>
					<span class="sr-only">{m.product_lightboxPrev({}, { locale })}</span>
					<svg width="24" height="24" fill="none" stroke="currentColor" aria-hidden="true">
						<path
							d="M15 6l-6 6 6 6"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>

				<span class="min-w-14 text-center text-sm text-background">
					{m.product_lightboxCounter({ index: active + 1, count: images.length }, { locale })}
				</span>

				<button
					type="button"
					onclick={next}
					class="focus-dark flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-control text-background hover:bg-background/10"
				>
					<span class="sr-only">{m.product_lightboxNext({}, { locale })}</span>
					<svg
						viewBox="0 0 24 24"
						width="24"
						height="24"
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
			{/if}
		</div>
	</div>
{/if}
