/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-006',
	slug: 'silver-beaded-mini-coin-purse',
	category: 'bags',
	status: 'available',

	title: {
		en: 'Silver beaded mini coin purse',
		pt: 'Mini bolsa moedeiro prateada em contas',
		uk: 'Міні сумочка-гаманець зі срібного бісеру',
		ru: 'Мини сумочка монетница из серебристого бисера'
	},
	description: {
		en: 'A small coin purse hand-woven entirely from silver-toned seed beads.',
		ru: 'Небольшая мини сумочка-монетница, полностью сплетённая вручную из серебристого бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/silver-beaded-mini-coin-purse/1.webp',
			thumb: '/images/products/silver-beaded-mini-coin-purse/1-thumb.webp',
			width: 1280,
			height: 1089,
			alt: {
				en: 'Silver beaded mini coin purse',
				ru: 'Мини сумочка монетница из серебристого бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },
	colours: {
		en: 'Silver shown; other colours available to order',
		ru: 'Показан серебристый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BAG-005', 'BAG-007']
};
