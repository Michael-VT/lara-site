/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-001',
	slug: 'white-beaded-coin-purse',
	category: 'bags',
	status: 'available',

	title: {
		en: 'White beaded coin purse',
		pt: 'Bolsa moedeiro branca em contas',
		uk: 'Біла сумочка-гаманець з бісеру',
		ru: 'Белая сумочка монетница из бисера'
	},
	description: {
		en: 'A small coin purse hand-woven entirely from white seed beads.',
		ru: 'Небольшая сумочка-монетница, полностью сплетённая вручную из белого бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-beaded-coin-purse/1.webp',
			thumb: '/images/products/white-beaded-coin-purse/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'White coin purse hand-woven from seed beads',
				ru: 'Белая сумочка-монетница, сплетённая из бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	featured: true,
	featuredOrder: 1,
	relatedSkus: ['BAG-002', 'BEAD-001']
};
