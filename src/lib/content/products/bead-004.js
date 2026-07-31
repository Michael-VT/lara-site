/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-004',
	slug: 'black-beaded-heart-keychain',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Black beaded heart keychain',
		pt: 'Porta-chaves coração em contas pretas',
		uk: 'Брелок-серце із чорного бісеру',
		ru: 'Объемное сердце брелок из черного бисера'
	},
	description: {
		en: 'A three-dimensional heart keychain hand-woven from black seed beads.',
		ru: 'Объёмный брелок-сердце, сплетённый вручную из чёрного бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/black-beaded-heart-keychain/1.webp',
			thumb: '/images/products/black-beaded-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Black beaded heart-shaped keychain',
				ru: 'Брелок в виде сердца из чёрного бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	relatedSkus: ['BEAD-005', 'BEAD-003']
};
