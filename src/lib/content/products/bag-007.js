/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-007',
	slug: 'colorful-beaded-bag-and-bracelet-set',
	category: 'bags',
	status: 'available',

	title: {
		en: 'Colourful beaded bag and bracelet set',
		pt: 'Conjunto de bolsa e pulseira coloridas em contas',
		uk: 'Комплект різнокольорової сумочки та браслета з бісеру',
		ru: 'Сумочка в комплекте с браслетом из разноцветного бисера'
	},
	description: {
		en: 'A hand-woven mini bag with a matching bracelet, made from colourful seed beads.',
		ru: 'Мини сумочка в комплекте с браслетом, сплетённые вручную из разноцветного бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/colorful-beaded-bag-and-bracelet-set/1.webp',
			thumb: '/images/products/colorful-beaded-bag-and-bracelet-set/1-thumb.webp',
			width: 1280,
			height: 856,
			alt: {
				en: 'Colourful beaded bag and bracelet set',
				ru: 'Сумочка в комплекте с браслетом из разноцветного бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },
	colours: {
		en: 'Multicoloured shown; other colour combinations available to order',
		ru: 'Показан разноцветный вариант; другие сочетания цветов доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in different colours',
		ru: 'Можно заказать в других цветах'
	},

	relatedSkus: ['BAG-005', 'BAG-006']
};
