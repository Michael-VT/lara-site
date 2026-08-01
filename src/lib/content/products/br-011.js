/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-011',
	slug: 'adjustable-cord-beaded-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Adjustable cord beaded bracelet',
		pt: 'Pulseira ajustável em cordão com contas',
		uk: 'Регульований браслет-шнурок з бісером',
		ru: 'Браслет-шнурок с бисером на регулируемом узле'
	},
	description: {
		en: 'A slim hand-woven bracelet on an adjustable sliding-knot cord, with a small beaded accent. Available in various colours — any quantity can be ordered.',
		ru: 'Тонкий браслет-шнурок, сплетённый вручную, с регулируемым скользящим узлом и небольшим акцентом из бисера. Доступны разные цвета — заказать можно любое количество.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/adjustable-cord-beaded-bracelet/1.webp',
			thumb: '/images/products/adjustable-cord-beaded-bracelet/1-thumb.webp',
			width: 1280,
			height: 405,
			alt: {
				en: 'Adjustable cord beaded bracelets in several colour accents',
				ru: 'Браслеты-шнурочки с бисером в разных цветах'
			}
		}
	],

	materials: { en: 'Cord, seed beads', ru: 'Шнур, бисер' },
	colours: {
		en: 'Several colour accents shown; other colours available to order',
		ru: 'Показаны разные варианты цвета; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-007']
};
