/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-003',
	slug: 'tenderness-beaded-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: '"Tenderness" beaded bracelet',
		pt: 'Pulseira em contas "Ternura"',
		uk: 'Браслет із бісеру «Ніжність»',
		ru: 'Браслет из бисера «Нежность»'
	},
	description: {
		en: 'A delicate hand-woven beaded bracelet.',
		ru: 'Нежный браслет, сплетённый вручную из бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/tenderness-beaded-bracelet/1.webp',
			thumb: '/images/products/tenderness-beaded-bracelet/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Delicate hand-woven beaded bracelet',
				ru: 'Нежный браслет из бисера ручной работы'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	relatedSkus: ['BR-001', 'BR-005']
};
