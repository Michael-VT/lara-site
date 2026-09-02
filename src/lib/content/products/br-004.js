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
		pt: 'Pulseira em contas brancas e douradas, tecida à mão, com motivo floral.',
		uk: 'Браслет із квітковим візерунком, сплетений вручну з білого та золотистого бісеру.',
		ru: 'Браслет с цветочным узором, сплетённый вручную из белого и золотистого бисера.'
	},

	price: { mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-gold-flower-beaded-bracelet/1.webp',
			thumb: '/images/products/white-gold-flower-beaded-bracelet/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'White and gold beaded bracelet with a flower motif',
				pt: 'Pulseira em contas brancas e douradas com motivo floral',
				uk: 'Браслет із квітковим візерунком з білого та золотистого бісеру',
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
				pt: 'Primeiro plano da pulseira em contas com motivo floral',
				uk: 'Крупний план браслета з квітковим візерунком',
				ru: 'Крупный план браслета с цветочным узором'
			}
		}
	],

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },

	featured: true,
	featuredOrder: 4,
	relatedSkus: ['BR-005', 'BR-003']
};
