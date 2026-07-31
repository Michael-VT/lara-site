// Copy this file to add a new product, e.g. `bag-003.js`.
// Then import and add it to the `rawProducts` array in `index.js`.
//
// Required: sku, slug, category, status, title.en, description.en, images (at least one).
// Everything else is optional — omit fields you don't have data for.
//
// Photos: drop the original photo(s) into `images/{a descriptive folder name}/`
// at the repo root, map that folder name to your product slug in
// `scripts/optimize-images.js` (`slugMap`), then run `bun run optimize:images`.
// It writes optimized WebP files to `static/images/products/{slug}/`:
// `1.webp` (full size, for the product page) and `1-thumb.webp` (small, for
// grid/thumbnail views) — reference both below.

/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-999', // must be unique, must match ^[A-Z][A-Z0-9]{1,9}-[0-9]{3,6}$, never change after publishing
	slug: 'example-product-slug', // lowercase, hyphen-separated, must be globally unique and stable
	category: 'bags', // one of: bags, bracelets, jewellery, beadwork, knitted, accessories, other
	status: 'available', // one of: available, made_to_order, sold, hidden
	isDemo: true, // set to true only for placeholder/demo content; omit for real products

	title: {
		en: 'Example product title'
		// pt, uk, ru optional — falls back to English when missing
	},
	description: {
		en: 'Example product description.'
	},

	// price is optional; omit entirely, or use one of:
	// { mode: 'fixed', amount: 20, currency: 'EUR' }
	// { mode: 'from', amount: 20, currency: 'EUR' }
	// { mode: 'on_request' }
	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/example-product-slug/1.webp',
			thumb: '/images/products/example-product-slug/1-thumb.webp',
			width: 1200,
			height: 1200,
			alt: { en: 'Describe what is visible in the photo' }
		}
	],

	materials: { en: '' },
	dimensions: { en: '' },
	colours: { en: '' },
	care: { en: '' },
	customisation: { en: '' },
	productionTime: { en: '' },

	featured: false,
	featuredOrder: undefined,
	relatedSkus: []
};
