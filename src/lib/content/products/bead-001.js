/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-001',
	slug: 'golden-beaded-heart-keychain',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Golden beaded heart keychain',
		pt: 'Porta-chaves coração em contas douradas',
		uk: 'Брелок-серце із золотистого бісеру',
		ru: 'Объемное сердце брелок из золотистого бисера'
	},
	description: {
		en: 'A three-dimensional heart keychain hand-woven from golden seed beads.',
		ru: 'Объёмный брелок-сердце, сплетённый вручную из золотистого бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/golden-beaded-heart-keychain/1.webp',
			thumb: '/images/products/golden-beaded-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Golden beaded heart-shaped keychain',
				ru: 'Брелок в виде сердца из золотистого бисера'
			}
		},
		{
			src: '/images/products/golden-beaded-heart-keychain/2.webp',
			thumb: '/images/products/golden-beaded-heart-keychain/2-thumb.webp',
			width: 833,
			height: 1280,
			alt: {
				en: 'Golden beaded heart keychain, held in hand',
				ru: 'Брелок в виде сердца из золотистого бисера, в руке'
			}
		},
		{
			src: '/images/products/golden-beaded-heart-keychain/3.webp',
			thumb: '/images/products/golden-beaded-heart-keychain/3-thumb.webp',
			width: 779,
			height: 1280,
			alt: {
				en: 'Golden beaded heart keychain, another angle',
				ru: 'Брелок в виде сердца из золотистого бисера, другой ракурс'
			}
		},
		{
			src: '/images/products/golden-beaded-heart-keychain/4.webp',
			thumb: '/images/products/golden-beaded-heart-keychain/4-thumb.webp',
			width: 827,
			height: 1264,
			alt: {
				en: 'Golden beaded heart keychain, close-up',
				ru: 'Брелок в виде сердца из золотистого бисера, крупный план'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	featured: true,
	featuredOrder: 2,
	relatedSkus: ['BEAD-002', 'BEAD-003']
};
