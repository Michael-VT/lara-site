/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-001',
	slug: 'sparkling-rhombus-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Sparkling rhombus bracelet',
		pt: 'Pulseira Losango Brilhante',
		uk: 'Браслет «Сяючий ромб»',
		ru: 'Браслет «Сверкающий ромб»'
	},
	description: {
		en: 'A beaded bracelet hand-woven with a sparkling rhombus pattern.',
		ru: 'Браслет, сплетённый вручную из бисера с блестящим ромбовидным узором.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/sparkling-rhombus-bracelet/1.webp',
			thumb: '/images/products/sparkling-rhombus-bracelet/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Beaded bracelet with a sparkling rhombus pattern',
				ru: 'Браслет из бисера с узором «сверкающий ромб»'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	relatedSkus: ['BR-003']
};
