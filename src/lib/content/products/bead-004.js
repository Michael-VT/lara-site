/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000035',
	slug: 'black-beaded-heart-keychain',
	categories: ['accessories', 'beadwork'],
	status: 'available',

	title: {
		en: 'Three-dimensional black beaded heart keychain',
		pt: 'Porta-chaves coração tridimensional em contas pretas',
		uk: "Об'ємний брелок-серце із чорного бісеру",
		ru: 'Объёмный брелок-сердце из чёрного бисера'
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

	relatedSkus: ['AAA000036', 'AAA000034']
};
