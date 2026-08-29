/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-005',
	slug: 'red-beaded-mini-coin-purse',
	category: 'bags',
	status: 'available',

	title: {
		en: 'Red beaded mini coin purse',
		pt: 'Mini bolsa moedeiro vermelha em contas',
		uk: 'Міні сумочка-гаманець з червоного бісеру',
		ru: 'Мини сумочка монетница из красного бисера'
	},
	description: {
		en: 'A small coin purse hand-woven entirely from red seed beads.',
		pt: 'Uma pequena mini bolsa moedeiro, tecida à mão inteiramente em contas vermelhas.',
		uk: 'Невелика міні сумочка-гаманець, повністю сплетена вручну з червоного бісеру.',
		ru: 'Небольшая мини сумочка-монетница, полностью сплетённая вручную из красного бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/red-beaded-mini-coin-purse/1.webp',
			thumb: '/images/products/red-beaded-mini-coin-purse/1-thumb.webp',
			width: 1280,
			height: 1180,
			alt: {
				en: 'Red beaded mini coin purse',
				pt: 'Mini bolsa moedeiro vermelha em contas',
				uk: 'Міні сумочка-гаманець з червоного бісеру',
				ru: 'Мини сумочка монетница из красного бисера'
			}
		}
	],

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },
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

	relatedSkus: ['BAG-006', 'BAG-007']
};
