/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-004',
	slug: 'white-gold-flower-beaded-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: '"Little flower" white and gold beaded bracelet',
		pt: 'Pulseira "Florzinha" em contas brancas e douradas',
		uk: 'Браслет «Квіточка» з білого та золотистого бісеру',
		ru: 'Браслет из белого и золотистого бисера «Цветочек»'
	},
	description: {
		en: 'A hand-woven beaded bracelet with a flower motif in white and gold.',
		ru: 'Браслет с цветочным узором, сплетённый вручную из белого и золотистого бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-gold-flower-beaded-bracelet/1.webp',
			thumb: '/images/products/white-gold-flower-beaded-bracelet/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'White and gold beaded bracelet with a flower motif',
				ru: 'Браслет с цветочным узором из белого и золотистого бисера'
			}
		},
		{
			src: '/images/products/white-gold-flower-beaded-bracelet/2.webp',
			thumb: '/images/products/white-gold-flower-beaded-bracelet/2-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Close-up of the flower-motif beaded bracelet',
				ru: 'Крупный план браслета с цветочным узором'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	featured: true,
	featuredOrder: 4,
	relatedSkus: ['BR-005', 'BR-003']
};
