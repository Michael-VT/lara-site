/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'ACC-001',
	slug: 'white-beaded-cup-coaster',
	category: 'accessories',
	status: 'available',

	title: {
		en: 'White beaded cup coaster',
		pt: 'Base para chávena em contas brancas',
		uk: 'Підставка під чашку з білого бісеру',
		ru: 'Подставка под чашку из белого бисера'
	},
	description: {
		en: 'A hand-woven coaster made entirely from white seed beads, sized to fit under a cup or mug.',
		pt: 'Uma base para chávena tecida à mão inteiramente em contas brancas, no tamanho ideal para uma chávena ou caneca.',
		uk: 'Підставка під чашку, повністю сплетена вручну з білого бісеру.',
		ru: 'Подставка под чашку, полностью сплетённая вручную из белого бисера.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-beaded-cup-coaster/1.webp',
			thumb: '/images/products/white-beaded-cup-coaster/1-thumb.webp',
			width: 627,
			height: 592,
			alt: {
				en: 'White beaded cup coaster',
				pt: 'Base para chávena em contas brancas',
				uk: 'Підставка під чашку з білого бісеру',
				ru: 'Подставка под чашку из белого бисера'
			}
		}
	],

	materials: {
		en: 'Czech and Chinese seed beads',
		pt: 'Contas checas e chinesas',
		uk: 'Чеський та китайський бісер',
		ru: 'Чешский и китайский бисер'
	},
	colours: {
		en: 'White shown; other colours available to order',
		pt: 'Mostrado em branco; outras cores disponíveis por encomenda',
		uk: 'Показано білий колір; інші кольори доступні на замовлення',
		ru: 'Показан белый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: []
};
