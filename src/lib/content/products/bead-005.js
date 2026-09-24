/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000036',
	slug: 'black-red-drop-beaded-heart-keychain',
	categories: ['accessories', 'beadwork'],
	status: 'available',

	title: {
		en: 'Three-dimensional black beaded heart keychain with a red drop',
		pt: 'Porta-chaves coração tridimensional em contas pretas com gota vermelha',
		uk: "Об'ємний брелок-серце із чорного бісеру з червоною крапелькою",
		ru: 'Объёмный брелок-сердце из чёрного бисера с капелькой красного'
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
			width: 1086,
			height: 1448,
			alt: {
				en: 'Black beaded heart-shaped keychain with a red drop accent',
				pt: 'Porta-chaves em forma de coração em contas pretas com uma gota vermelha de destaque',
				uk: 'Брелок у вигляді серця із чорного бісеру з червоною крапелькою',
				ru: 'Брелок в виде сердца из чёрного бисера с красной капелькой'
			}
		}
	],

	dimensions: {
		en: 'Size: 5 × 3 cm',
		pt: 'Tamanho: 5 × 3 cm',
		uk: 'Розмір: 5 × 3 см',
		ru: 'Размер: 5 × 3 см'
	},

	materials: {
		en: 'Czech and Chinese seed beads, 6 mm',
		pt: 'Contas checas e chinesas, 6 mm',
		uk: 'Чеський та китайський бісер, 6 мм',
		ru: 'Чешский и китайский бисер, 6 мм'
	},

	relatedSkus: ['AAA000035', 'AAA000033']
};
