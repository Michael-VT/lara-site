/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000033',
	slug: 'red-beaded-heart-keychain',
	categories: ['accessories', 'beadwork'],
	status: 'available',

	title: {
		en: 'Three-dimensional red beaded heart keychain',
		pt: 'Porta-chaves coração tridimensional em contas vermelhas',
		uk: "Об'ємний брелок-серце із червоного бісеру",
		ru: 'Объёмный брелок-сердце из красного бисера'
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
			width: 1086,
			height: 1448,
			alt: {
				en: 'Red beaded heart-shaped keychain',
				pt: 'Porta-chaves em forma de coração em contas vermelhas',
				uk: 'Брелок у вигляді серця з червоного бісеру',
				ru: 'Брелок в виде сердца из красного бисера'
			}
		},
		{
			src: '/images/products/red-beaded-heart-keychain/2.webp',
			thumb: '/images/products/red-beaded-heart-keychain/2-thumb.webp',
			width: 1280,
			height: 1170,
			alt: {
				en: 'Red beaded heart keychain hanging on a black bag',
				pt: 'Porta-chaves coração em contas vermelhas pendurado numa bolsa preta',
				uk: 'Брелок-серце з червоного бісеру на чорній сумці',
				ru: 'Брелок-сердце из красного бисера на чёрной сумке'
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

	relatedSkus: ['AAA000032', 'AAA000036']
};
