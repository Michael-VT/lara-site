/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000001',
	slug: 'white-beaded-coin-purse',
	categories: ['bags', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: 'White beaded coin purse',
		pt: 'Bolsa moedeiro branca em contas',
		uk: 'Біла сумочка-гаманець з бісеру',
		ru: 'Сумочка монетница белая из бисера'
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
				en: 'White coin purse with beaded chain strap',
				pt: 'Bolsa moedeiro branca com corrente de contas',
				uk: 'Біла сумочка-гаманець з бісерним ланцюжком',
				ru: 'Белая сумочка-монетница с бисерной цепочкой'
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
			src: '/images/products/white-beaded-coin-purse/8.webp',
			thumb: '/images/products/white-beaded-coin-purse/8-thumb.webp',
			width: 1098,
			height: 1280,
			alt: {
				en: 'White coin purse shown with a Shambhala bracelet, €5, as an additional accessory to the bag',
				pt: 'Bolsa moedeiro branca apresentada com uma bracelete Shambala, 5€, como acessório adicional à bolsa',
				uk: 'Біла сумочка-гаманець у комплекті з браслетом шамбала, 5 євро, як додатковий аксесуар до сумочки',
				ru: 'Белая сумочка-монетница в комплекте с браслетом шамбала, 5 евро, как дополнительный аксессуар к сумочке'
			}
		}
	],

	dimensions: {
		en: '5 × 6 cm, handle 24 cm',
		pt: '5 × 6 cm, alça de 24 cm',
		uk: '5 × 6 см, ручка 24 см',
		ru: '5 × 6 см, ручка 24 см'
	},

	materials: {
		en: 'Chinese seed beads, 6mm',
		pt: 'Contas chinesas, 6mm',
		uk: 'Китайський бісер, 6мм',
		ru: 'Китайский бисер, 6мм'
	},

	featured: true,
	featuredOrder: 1,
	relatedSkus: ['AAA000002', 'AAA000032']
};
