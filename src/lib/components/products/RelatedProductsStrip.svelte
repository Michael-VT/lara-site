<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeText } from '$lib/services/catalog.js';
	import { toHref } from '$lib/utils/href.js';

	/** @type {{ products: import('$lib/schemas/product.js').Product[] }} */
	let { products } = $props();

	let locale = $derived(page.data.locale);

	/** @type {HTMLElement | undefined} */
	let scrollerEl = $state();

	function scrollBy(/** @type {number} */ direction) {
		scrollerEl?.scrollBy({ left: direction * 160, behavior: 'smooth' });
	}
</script>

{#if products.length > 0}
	<nav aria-label={m.product_related({}, { locale })} class="flex items-center gap-2">
		<button
			type="button"
			onclick={() => scrollBy(-1)}
			class="hidden min-h-11 min-w-11 shrink-0 touch-manipulation items-center justify-center rounded-control border border-border text-foreground hover:bg-surface sm:flex"
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
				<path d="M15 6l-6 6 6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>

		<div bind:this={scrollerEl} class="flex flex-1 snap-x gap-3 overflow-x-auto scroll-smooth pb-1">
			{#each products as product (product.sku)}
				<a
					href={toHref(`/${locale}/products/${product.slug}/`)}
					class="block h-16 w-16 shrink-0 touch-manipulation snap-start overflow-hidden rounded-control border border-border bg-surface"
				>
					<img
						src={product.images[0].thumb ?? product.images[0].src}
						alt={localizeText(product.images[0].alt, locale)}
						width={product.images[0].width}
						height={product.images[0].height}
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</a>
			{/each}
		</div>

		<button
			type="button"
			onclick={() => scrollBy(1)}
			class="hidden min-h-11 min-w-11 shrink-0 touch-manipulation items-center justify-center rounded-control border border-border text-foreground hover:bg-surface sm:flex"
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
				<path d="M9 6l6 6-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>
	</nav>
{/if}
