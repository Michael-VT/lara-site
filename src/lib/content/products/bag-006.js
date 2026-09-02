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
		pt: 'Uma pequena mini bolsa moedeiro, tecida à mão inteiramente em contas de tom prateado.',
		uk: 'Невелика міні сумочка-гаманець, повністю сплетена вручну зі сріблястого бісеру.',
		ru: 'Небольшая мини сумочка-монетница, полностью сплетённая вручную из серебристого бисера.'
	},

	price: { mode: 'fixed', amount: 10, currency: 'EUR' },

	images: [
		{
			src: '/images/products/silver-beaded-mini-coin-purse/1.webp',
			thumb: '/images/products/silver-beaded-mini-coin-purse/1-thumb.webp',
			width: 1280,
			height: 1089,
			alt: {
				en: 'Silver beaded mini coin purse',
				pt: 'Mini bolsa moedeiro prateada em contas',
				uk: 'Міні сумочка-гаманець зі срібного бісеру',
				ru: 'Мини сумочка монетница из серебристого бисера'
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

	relatedSkus: ['BAG-005', 'BAG-007']
};
