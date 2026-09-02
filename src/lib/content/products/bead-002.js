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
		pt: 'Um porta-chaves em forma de coração tridimensional, tecido à mão com contas vermelhas.',
		uk: "Об'ємний брелок-серце, сплетений вручну з червоного бісеру.",
		ru: 'Объёмный брелок-сердце, сплетённый вручную из красного бисера.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/red-beaded-heart-keychain/1.webp',
			thumb: '/images/products/red-beaded-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Red beaded heart-shaped keychain',
				pt: 'Porta-chaves em forma de coração em contas vermelhas',
				uk: 'Брелок у вигляді серця з червоного бісеру',
				ru: 'Брелок в виде сердца из красного бисера'
			}
		}
	],

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },

	relatedSkus: ['BEAD-001', 'BEAD-005']
};
