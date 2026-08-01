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
			next();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prev();
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
		}
	});
</script>

<div class="flex flex-col gap-3">
	<button
		type="button"
		onclick={openLightbox}
		aria-label={m.product_galleryOpenFullscreen(
			{ index: active + 1, count: images.length },
			{ locale }
		)}
		class="block touch-manipulation overflow-hidden rounded-card border border-border bg-surface"
	>
		<img
			src={images[active].src}
			alt={localizeText(images[active].alt, locale)}
			width={images[active].width}
			height={images[active].height}
			loading="eager"
			fetchpriority="high"
			class="aspect-square w-full object-cover"
		/>
	</button>

	{#if images.length > 1}
		<div
			role="tablist"
			tabindex="0"
			aria-label={m.product_related({}, { locale })}
			onkeydown={handleKeydown}
			class="flex gap-2"
		>
			{#each images as image, i (image.src)}
				<button
					type="button"
					role="tab"
					aria-selected={i === active}
					aria-label={m.product_galleryThumbnail(
						{ index: i + 1, count: images.length },
						{ locale }
					)}
					onclick={() => select(i)}
					class="h-16 w-16 shrink-0 touch-manipulation overflow-hidden rounded-control border-2 {i ===
					active
						? 'border-accent'
						: 'border-transparent'}"
				>
					<img
						src={image.thumb ?? image.src}
						alt=""
						width={image.width}
						height={image.height}
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</button>
			{/each}
		</div>
	{/if}
</div>

{#if lightboxOpen}
	<div class="fixed inset-0 z-50 bg-foreground/90" onclick={closeLightbox} aria-hidden="true"></div>
	<div
		bind:this={lightboxEl}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		aria-label={localizeText(images[active].alt, locale)}
		onkeydown={handleLightboxKeydown}
		class="fixed inset-0 z-50 flex flex-col"
	>
		<div class="flex justify-end p-3">
			<button
				type="button"
				onclick={closeLightbox}
				class="flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-control text-background hover:bg-background/10"
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

		<div class="flex flex-1 items-center justify-center overflow-hidden px-4">
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
					class="flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-control text-background hover:bg-background/10"
				>
					<span class="sr-only">{m.product_lightboxPrev({}, { locale })}</span>
					<svg
						viewBox="0 0 24 24"
						width="24"
						height="24"
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

				<span class="min-w-14 text-center text-sm text-background">
					{m.product_lightboxCounter({ index: active + 1, count: images.length }, { locale })}
				</span>

				<button
					type="button"
					onclick={next}
					class="flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-control text-background hover:bg-background/10"
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
