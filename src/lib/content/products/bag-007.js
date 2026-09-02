/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-007',
	slug: 'colorful-beaded-bag-and-bracelet-set',
	category: 'bags',
	status: 'available',

	title: {
		en: 'Mini bag and shambala bracelet set',
		pt: 'Conjunto de mini bolsa e bracelete shambala',
		uk: 'Комплект: міні сумочка та браслет шамбала',
		ru: 'Комплект: мини сумочка и браслет шамбала'
	},
	description: {
		en: 'A hand-woven mini bag with a matching shambala bracelet, made from colourful seed beads.',
		pt: 'Um conjunto de mini bolsa e bracelete shambala a combinar, tecido à mão em contas coloridas.',
		uk: 'Міні сумочка у комплекті з браслетом шамбала, сплетені вручну з різнокольорового бісеру.',
		ru: 'Мини сумочка в комплекте с браслетом шамбала, сплетённые вручную из разноцветного бисера.'
	},

	price: { mode: 'fixed', amount: 15, currency: 'EUR' },

	images: [
		{
			src: '/images/products/colorful-beaded-bag-and-bracelet-set/1.webp',
			thumb: '/images/products/colorful-beaded-bag-and-bracelet-set/1-thumb.webp',
			width: 1280,
			height: 856,
			alt: {
				en: 'Mini bag and shambala bracelet set',
				pt: 'Conjunto de mini bolsa e bracelete shambala',
				uk: 'Комплект: міні сумочка та браслет шамбала',
				ru: 'Комплект: мини сумочка и браслет шамбала'
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
		en: 'Multicoloured shown; other colour combinations available to order',
		pt: 'Apresentada a versão multicolor; outras combinações de cores disponíveis por encomenda',
		uk: 'Показано різнокольоровий варіант; інші поєднання кольорів доступні на замовлення',
		ru: 'Показан разноцветный вариант; другие сочетания цветов доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in different colours',
		pt: 'Pode ser encomendado noutras cores',
		uk: 'Можна замовити в інших кольорах',
		ru: 'Можно заказать в других цветах'
	},

	relatedSkus: ['BAG-005', 'BAG-006']
};
