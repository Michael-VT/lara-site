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
		pt: 'Um porta-chaves em forma de coração tridimensional, tecido à mão com contas pretas.',
		uk: "Об'ємний брелок-серце, сплетений вручну із чорного бісеру.",
		ru: 'Объёмный брелок-сердце, сплетённый вручную из чёрного бисера.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/black-beaded-heart-keychain/1.webp',
			thumb: '/images/products/black-beaded-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Black beaded heart-shaped keychain',
				pt: 'Porta-chaves em forma de coração em contas pretas',
				uk: 'Брелок у вигляді серця із чорного бісеру',
				ru: 'Брелок в виде сердца из чёрного бисера'
			}
		}
	],

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },

	relatedSkus: ['BEAD-005', 'BEAD-003']
};
