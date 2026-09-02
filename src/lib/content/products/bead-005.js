/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-005',
	slug: 'black-red-drop-beaded-heart-keychain',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Black beaded heart keychain with a red drop',
		pt: 'Porta-chaves coração em contas pretas com gota vermelha',
		uk: 'Брелок-серце із чорного бісеру з червоною крапелькою',
		ru: 'Объемное сердце брелок из черного бисера с капелькой красного'
	},
	description: {
		en: 'A three-dimensional heart keychain hand-woven from black seed beads with a red accent drop.',
		pt: 'Um porta-chaves em forma de coração tridimensional, tecido à mão com contas pretas e uma gota vermelha de destaque.',
		uk: "Об'ємний брелок-серце, сплетений вручну із чорного бісеру з червоною крапелькою-акцентом.",
		ru: 'Объёмный брелок-сердце из чёрного бисера с акцентной капелькой красного цвета.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/black-red-drop-beaded-heart-keychain/1.webp',
			thumb: '/images/products/black-red-drop-beaded-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Black beaded heart-shaped keychain with a red drop accent',
				pt: 'Porta-chaves em forma de coração em contas pretas com uma gota vermelha de destaque',
				uk: 'Брелок у вигляді серця із чорного бісеру з червоною крапелькою',
				ru: 'Брелок в виде сердца из чёрного бисера с красной капелькой'
			}
		}
	],

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },

	relatedSkus: ['BEAD-004', 'BEAD-002']
};
