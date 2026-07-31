<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeText } from '$lib/services/catalog.js';

	/** @type {{ images: import('$lib/schemas/product.js').ProductImage[] }} */
	let { images } = $props();

	let locale = $derived(page.data.locale);
	let active = $state(0);

	function select(/** @type {number} */ i) {
		active = i;
	}

	function handleKeydown(/** @type {KeyboardEvent} */ e) {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			active = (active + 1) % images.length;
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			active = (active - 1 + images.length) % images.length;
		}
	}
</script>

<div class="flex flex-col gap-3">
	<div class="overflow-hidden rounded-card border border-border bg-surface">
		<img
			src={images[active].src}
			alt={localizeText(images[active].alt, locale)}
			width={images[active].width}
			height={images[active].height}
			loading="eager"
			fetchpriority="high"
			class="aspect-square w-full object-cover"
		/>
	</div>

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
					class="h-16 w-16 shrink-0 overflow-hidden rounded-control border-2 {i === active
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
