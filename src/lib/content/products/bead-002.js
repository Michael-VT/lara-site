/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-002',
	slug: 'red-beaded-heart-keychain',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Red beaded heart keychain',
		pt: 'Porta-chaves coração em contas vermelhas',
		uk: 'Брелок-серце із червоного бісеру',
		ru: 'Объемное сердце брелок из красного бисера'
	},
	description: {
		en: 'A three-dimensional heart keychain hand-woven from red seed beads.',
		ru: 'Объёмный брелок-сердце, сплетённый вручную из красного бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/red-beaded-heart-keychain/1.webp',
			thumb: '/images/products/red-beaded-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Red beaded heart-shaped keychain',
				ru: 'Брелок в виде сердца из красного бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	relatedSkus: ['BEAD-001', 'BEAD-005']
};
