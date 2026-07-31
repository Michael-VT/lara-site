/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-009',
	slug: 'beaded-toy-balls',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Beaded toy balls',
		pt: 'Bolas de brinquedo em contas',
		uk: 'Іграшкові кульки з бісеру',
		ru: 'Шарики игрушки из бисера'
	},
	description: {
		en: 'Small hand-woven toy balls made from seed beads.',
		ru: 'Небольшие игрушки-шарики, сплетённые вручную из бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/beaded-toy-balls/1.webp',
			thumb: '/images/products/beaded-toy-balls/1-thumb.webp',
			width: 1280,
			height: 1215,
			alt: {
				en: 'Beaded toy balls',
				ru: 'Шарики игрушки из бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },
	colours: {
		en: 'Various colours available to order',
		ru: 'Доступны разные цвета на заказ'
	},
	customisation: {
		en: 'Can be made to order in different colours',
		ru: 'Можно заказать в других цветах'
	},

	relatedSkus: ['BEAD-008']
};
