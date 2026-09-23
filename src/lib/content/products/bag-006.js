/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000006',
	slug: 'silver-beaded-mini-coin-purse',
	categories: ['bags', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: 'Silver beaded mini coin purse',
		pt: 'Mini bolsa moedeiro prateada em contas',
		uk: 'Міні сумочка-гаманець зі сріблястого бісеру',
		ru: 'Сумочка монетница мини серебристая из бисера'
	},
	description: {
		en: 'A small coin purse hand-woven entirely from silver-toned seed beads.',
		pt: 'Uma pequena mini bolsa moedeiro, tecida à mão inteiramente em contas de tom prateado.',
		uk: 'Невелика міні сумочка-гаманець, повністю сплетена вручну зі сріблястого бісеру.',
		ru: 'Небольшая мини сумочка-монетница, полностью сплетённая вручную из серебристого бисера.'
	},

	price: { mode: 'fixed', amount: 10, currency: 'EUR' },

	images: [
		{
			src: '/images/products/silver-beaded-mini-coin-purse/1.webp',
			thumb: '/images/products/silver-beaded-mini-coin-purse/1-thumb.webp',
			width: 1448,
			height: 1086,
			alt: {
				en: 'Silver beaded mini coin purse',
				pt: 'Mini bolsa moedeiro prateada em contas',
				uk: 'Міні сумочка-гаманець зі сріблястого бісеру',
				ru: 'Мини сумочка монетница из серебристого бисера'
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
		en: 'Silver shown; other colours available to order',
		pt: 'Mostrado em prateado; outras cores disponíveis por encomenda',
		uk: 'Показано сріблястий колір; інші кольори доступні на замовлення',
		ru: 'Показан серебристый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['AAA000005', 'AAA000007']
};
