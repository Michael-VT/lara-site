/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-011',
	slug: 'shambhala-beaded-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Shambhala bracelet with beads',
		pt: 'Pulseira Shambhala com contas',
		uk: 'Браслет «Шамбала» з бісером',
		ru: 'Браслет «Шамбала» с бисером'
	},
	description: {
		en: 'A Shambhala-style bracelet on an adjustable sliding-knot cord, with a pearl and gold-tone bead accent.',
		ru: 'Браслет в стиле «Шамбала» на регулируемом скользящем узле, с акцентом из жемчужных и золотистых бусин.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/shambhala-beaded-bracelet/1.webp',
			thumb: '/images/products/shambhala-beaded-bracelet/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Shambhala-style beaded bracelet with a pearl and gold bead accent',
				ru: 'Браслет «Шамбала» с акцентом из жемчужных и золотистых бусин'
			}
		}
	],

	materials: { en: 'Cord, seed beads', ru: 'Шнур, бисер' },
	colours: {
		en: 'Cream with pearl and gold-tone accent shown; other colours available to order',
		ru: 'Показан кремовый цвет с жемчужным и золотистым акцентом; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-007']
};
