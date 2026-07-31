/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-008',
	slug: 'colorful-beaded-balls',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Colorful beaded balls',
		pt: 'Bolas coloridas em contas',
		uk: 'Різнокольорові кульки з бісеру',
		ru: 'Разноцветные шарики'
	},
	description: {
		en: 'A set of round ball keychains hand-woven from multi-coloured seed beads.',
		ru: 'Набор круглых брелоков-шариков, сплетённых вручную из разноцветного бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/colorful-beaded-balls/1.webp',
			thumb: '/images/products/colorful-beaded-balls/1-thumb.webp',
			width: 1280,
			height: 1089,
			alt: {
				en: 'Multi-coloured beaded ball keychains',
				ru: 'Разноцветные брелоки-шарики из бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	relatedSkus: ['BEAD-006', 'BEAD-007']
};
