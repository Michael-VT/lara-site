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
		},
		{
			src: '/images/products/white-beaded-coin-purse/2.webp',
			thumb: '/images/products/white-beaded-coin-purse/2-thumb.webp',
			width: 1280,
			height: 787,
			alt: {
				en: 'White coin purse, close-up view',
				ru: 'Белая сумочка-монетница, крупный план'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/3.webp',
			thumb: '/images/products/white-beaded-coin-purse/3-thumb.webp',
			width: 1280,
			height: 582,
			alt: {
				en: 'White coin purse, side view',
				ru: 'Белая сумочка-монетница, вид сбоку'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/4.webp',
			thumb: '/images/products/white-beaded-coin-purse/4-thumb.webp',
			width: 1280,
			height: 951,
			alt: {
				en: 'White coin purse on keyring',
				ru: 'Белая сумочка-монетница на кольце для ключей'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/5.webp',
			thumb: '/images/products/white-beaded-coin-purse/5-thumb.webp',
			width: 1280,
			height: 1098,
			alt: {
				en: 'White coin purse with beaded chain strap',
				ru: 'Белая сумочка-монетница с бисерной цепочкой'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/6.webp',
			thumb: '/images/products/white-beaded-coin-purse/6-thumb.webp',
			width: 1148,
			height: 1280,
			alt: {
				en: 'White coin purse with long beaded strap',
				ru: 'Белая сумочка-монетница с длинной бисерной цепочкой'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/7.webp',
			thumb: '/images/products/white-beaded-coin-purse/7-thumb.webp',
			width: 1098,
			height: 1280,
			alt: {
				en: 'White coin purse shown with a matching bracelet',
				ru: 'Белая сумочка-монетница в комплекте с браслетом'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	featured: true,
	featuredOrder: 1,
	relatedSkus: ['BAG-002', 'BEAD-001']
};
