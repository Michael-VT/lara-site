/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000002',
	slug: 'black-beaded-coin-purse',
	categories: ['bags', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: 'Black beaded coin purse',
		pt: 'Bolsa moedeiro preta em contas',
		uk: 'Чорна сумочка-гаманець з бісеру',
		ru: 'Сумочка монетница черная из бисера'
	},
	description: {
		en: 'A small coin purse hand-woven entirely from black seed beads.',
		pt: 'Uma pequena bolsa moedeiro, tecida à mão inteiramente em contas pretas.',
		uk: 'Невелика сумочка-гаманець, повністю сплетена вручну з чорного бісеру.',
		ru: 'Небольшая сумочка-монетница, полностью сплетённая вручную из чёрного бисера.'
	},

	price: { mode: 'fixed', amount: 10, currency: 'EUR' },

	images: [
		{
			src: '/images/products/black-beaded-coin-purse/1.webp',
			thumb: '/images/products/black-beaded-coin-purse/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Black coin purse hand-woven from seed beads',
				pt: 'Bolsa moedeiro preta, tecida à mão em contas',
				uk: 'Чорна сумочка-гаманець, сплетена вручну з бісеру',
				ru: 'Чёрная сумочка-монетница, сплетённая из бисера'
			}
		},
		{
			src: '/images/products/black-beaded-coin-purse/2.webp',
			thumb: '/images/products/black-beaded-coin-purse/2-thumb.webp',
			width: 1280,
			height: 1067,
			alt: {
				en: 'Black beaded heart-shaped coin purse clipped to a black leather bag',
				pt: 'Bolsa moedeiro preta em forma de coração, presa a uma bolsa preta de cabedal',
				uk: 'Чорна сумочка-гаманець у формі серця на чорній шкіряній сумці',
				ru: 'Чёрная сумочка-монетница в форме сердца на чёрной кожаной сумке'
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

	relatedSkus: ['AAA000001', 'AAA000035']
};
