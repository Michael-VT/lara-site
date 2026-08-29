// Copy this file to add a new product (or better: run
// `bun scripts/new-product.js <category> <slug>` which does this for you,
// picks the next SKU and registers the file in index.js).
//
// All localized fields (title, description, every images[].alt, materials,
// colours, customisation…) must provide ALL FOUR locales: en, pt, uk, ru —
// in that key order. The site previously tolerated missing locales with an
// English fallback; that fallback is now considered a content bug.
// Glossary for consistent pt/uk craft vocabulary: docs/ADD-PRODUCT.md.
//
// Photos: drop the original photo(s) into `images/{a descriptive folder name}/`
// at the repo root, map that folder name to your product slug in
// `scripts/optimize-images.js` (`productGroups`), then run `bun run optimize:images`.
// It writes optimized WebP files to `static/images/products/{slug}/`:
// `1.webp` (full size, for the product page) and `1-thumb.webp` (small, for
// grid/thumbnail views) — reference both below, and set width/height to the
// real intrinsic pixel size of the full-size file.

/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-999', // must be unique, must match ^[A-Z][A-Z0-9]{1,9}-[0-9]{3,6}$, never change after publishing
	slug: 'example-product-slug', // lowercase, hyphen-separated, must be globally unique and stable
	category: 'bags', // one of: bags, bracelets, jewellery, beadwork, knitted, accessories, other
	status: 'available', // one of: available, made_to_order, sold, hidden ('hidden' = not published)
	isDemo: true, // set to true only for placeholder/demo content; omit for real products

	title: {
		en: 'Example product title',
		pt: 'Título de exemplo do produto',
		uk: 'Приклад назви виробу',
		ru: 'Пример названия изделия'
	},
	description: {
		en: 'Example product description.',
		pt: 'Descrição de exemplo do produto.',
		uk: 'Приклад опису виробу.',
		ru: 'Пример описания изделия.'
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
			alt: {
				en: 'Describe what is visible in the photo',
				pt: 'Descreva o que é visível na fotografia',
				uk: 'Опишіть, що видно на фото',
				ru: 'Опишите, что видно на фото'
			}
		}
	],

	// Optional detail fields — include only when you have the data
	// (also four locales each, same rules). Rendered in the details grid.
	materials: { en: '', pt: '', uk: '', ru: '' },
	dimensions: { en: '', pt: '', uk: '', ru: '' },
	colours: { en: '', pt: '', uk: '', ru: '' },
	care: { en: '', pt: '', uk: '', ru: '' },
	customisation: { en: '', pt: '', uk: '', ru: '' },
	productionTime: { en: '', pt: '', uk: '', ru: '' },

	featured: false, // true → shown in the homepage "Featured pieces" strip
	featuredOrder: undefined, // position within the featured strip (lower = earlier)
	relatedSkus: [] // SKUs of similar pieces shown under "You may also like"
};
