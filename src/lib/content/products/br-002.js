/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-002',
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
		en: 'A Shambhala-style bracelet with a woven macrame cord and beaded accents.',
		ru: 'Браслет в стиле «Шамбала» с плетёным шнуром и бисерными вставками.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/shambhala-beaded-bracelet/1.webp',
			thumb: '/images/products/shambhala-beaded-bracelet/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Shambhala-style bracelet with beaded accents',
				ru: 'Браслет «Шамбала» с бисерными вставками'
			}
		}
	],

	materials: { en: 'Seed beads, woven cord', ru: 'Бисер, плетёный шнур' },

	relatedSkus: ['BR-001', 'BR-003']
};
