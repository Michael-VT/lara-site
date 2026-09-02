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
		pt: 'Uma pequena bolsa moedeiro, tecida à mão inteiramente em contas brancas.',
		uk: 'Невелика сумочка-гаманець, повністю сплетена вручну з білого бісеру.',
		ru: 'Небольшая сумочка-монетница, полностью сплетённая вручную из белого бисера.'
	},

	price: { mode: 'fixed', amount: 10, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-beaded-coin-purse/1.webp',
			thumb: '/images/products/white-beaded-coin-purse/1-thumb.webp',
			width: 1448,
			height: 1086,
			alt: {
				en: 'White coin purse hand-woven from seed beads',
				pt: 'Bolsa moedeiro branca, tecida à mão em contas',
				uk: 'Біла сумочка-гаманець, сплетена вручну з бісеру',
				ru: 'Белая сумочка-монетница, сплетённая из бисера'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/2.webp',
			thumb: '/images/products/white-beaded-coin-purse/2-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'White coin purse, close-up view',
				pt: 'Bolsa moedeiro branca, primeiro plano',
				uk: 'Біла сумочка-гаманець, крупний план',
				ru: 'Белая сумочка-монетница, крупный план'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/3.webp',
			thumb: '/images/products/white-beaded-coin-purse/3-thumb.webp',
			width: 1280,
			height: 787,
			alt: {
				en: 'White coin purse, side view',
				pt: 'Bolsa moedeiro branca, vista lateral',
				uk: 'Біла сумочка-гаманець, вид збоку',
				ru: 'Белая сумочка-монетница, вид сбоку'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/4.webp',
			thumb: '/images/products/white-beaded-coin-purse/4-thumb.webp',
			width: 1280,
			height: 582,
			alt: {
				en: 'White coin purse on keyring',
				pt: 'Bolsa moedeiro branca numa argola de chaves',
				uk: 'Біла сумочка-гаманець на кільці для ключів',
				ru: 'Белая сумочка-монетница на кольце для ключей'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/5.webp',
			thumb: '/images/products/white-beaded-coin-purse/5-thumb.webp',
			width: 1280,
			height: 951,
			alt: {
				en: 'White coin purse with beaded chain strap',
				pt: 'Bolsa moedeiro branca com corrente de contas',
				uk: 'Біла сумочка-гаманець з бісерним ланцюжком',
				ru: 'Белая сумочка-монетница с бисерной цепочкой'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/6.webp',
			thumb: '/images/products/white-beaded-coin-purse/6-thumb.webp',
			width: 1280,
			height: 1098,
			alt: {
				en: 'White coin purse with long beaded strap',
				pt: 'Bolsa moedeiro branca com corrente de contas comprida',
				uk: 'Біла сумочка-гаманець з довгим бісерним ланцюжком',
				ru: 'Белая сумочка-монетница с длинной бисерной цепочкой'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/7.webp',
			thumb: '/images/products/white-beaded-coin-purse/7-thumb.webp',
			width: 1148,
			height: 1280,
			alt: {
				en: 'White coin purse with long beaded strap',
				pt: 'Bolsa moedeiro branca com corrente de contas comprida',
				uk: 'Біла сумочка-гаманець з довгим бісерним ланцюжком',
				ru: 'Белая сумочка-монетница с длинной бисерной цепочкой'
			}
		},
		{
			src: '/images/products/white-beaded-coin-purse/8.webp',
			thumb: '/images/products/white-beaded-coin-purse/8-thumb.webp',
			width: 1098,
			height: 1280,
			alt: {
				en: 'White coin purse shown with a matching bracelet',
				pt: 'Bolsa moedeiro branca apresentada com uma bracelete a combinar',
				uk: 'Біла сумочка-гаманець у комплекті з браслетом',
				ru: 'Белая сумочка-монетница в комплекте с браслетом'
			}
		}
	],

	dimensions: {
		en: '5 × 6 cm, handle 12 cm',
		pt: '5 × 6 cm, alça de 12 cm',
		uk: '5 × 6 см, ручка 12 см',
		ru: '5 × 6 см, ручка 12 см'
	},

	materials: {
		en: 'Czech and Chinese seed beads',
		pt: 'Contas checas e chinesas',
		uk: 'Чеський та китайський бісер',
		ru: 'Чешский и китайский бисер'
	},

	featured: true,
	featuredOrder: 1,
	relatedSkus: ['BAG-002', 'BEAD-001']
};
