/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000005',
	slug: 'red-beaded-mini-coin-purse',
	categories: ['bags', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: 'Red beaded mini coin purse',
		pt: 'Mini bolsa moedeiro vermelha em contas',
		uk: 'Міні сумочка-гаманець з червоного бісеру',
		ru: 'Сумочка монетница мини красная из бисера'
	},
	description: {
		en: 'A small coin purse hand-woven entirely from red seed beads.',
		pt: 'Uma pequena mini bolsa moedeiro, tecida à mão inteiramente em contas vermelhas.',
		uk: 'Невелика міні сумочка-гаманець, повністю сплетена вручну з червоного бісеру.',
		ru: 'Небольшая мини сумочка-монетница, полностью сплетённая вручную из красного бисера.'
	},

	price: { mode: 'fixed', amount: 10, currency: 'EUR' },

	images: [
		{
			src: '/images/products/red-beaded-mini-coin-purse/1.webp',
			thumb: '/images/products/red-beaded-mini-coin-purse/1-thumb.webp',
			width: 1448,
			height: 1086,
			alt: {
				en: 'Red beaded mini coin purse',
				pt: 'Mini bolsa moedeiro vermelha em contas',
				uk: 'Міні сумочка-гаманець з червоного бісеру',
				ru: 'Мини сумочка монетница из красного бисера'
			}
		},
		{
			src: '/images/products/red-beaded-mini-coin-purse/2.webp',
			thumb: '/images/products/red-beaded-mini-coin-purse/2-thumb.webp',
			width: 1448,
			height: 1086,
			alt: {
				en: 'Red beaded mini coin purse, another angle',
				pt: 'Mini bolsa moedeiro vermelha em contas, outro ângulo',
				uk: 'Міні сумочка-гаманець з червоного бісеру, інший ракурс',
				ru: 'Мини сумочка монетница из красного бисера, другой ракурс'
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
	colours: {
		en: 'Red shown; other colours available to order',
		pt: 'Mostrado em vermelho; outras cores disponíveis por encomenda',
		uk: 'Показано червоний колір; інші кольори доступні на замовлення',
		ru: 'Показан красный цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['AAA000006', 'AAA000007'],
	journalSlug: 'beaded-mini-coin-purses'
};
