/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-001',
	slug: 'golden-beaded-heart-keychain',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Golden beaded heart keychain',
		pt: 'Porta-chaves coração em contas douradas',
		uk: 'Брелок-серце із золотистого бісеру',
		ru: 'Объемное сердце брелок из золотистого бисера'
	},
	description: {
		en: 'A three-dimensional heart keychain hand-woven from golden seed beads.',
		pt: 'Um porta-chaves coração tridimensional, tecido à mão com contas douradas.',
		uk: "Об'ємний брелок-серце, сплетений вручну із золотистого бісеру.",
		ru: 'Объёмный брелок-сердце, сплетённый вручную из золотистого бисера.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/golden-beaded-heart-keychain/1.webp',
			thumb: '/images/products/golden-beaded-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Golden beaded heart-shaped keychain',
				pt: 'Porta-chaves em forma de coração em contas douradas',
				uk: 'Брелок у вигляді серця із золотистого бісеру',
				ru: 'Брелок в виде сердца из золотистого бисера'
			}
		},
		{
			src: '/images/products/golden-beaded-heart-keychain/2.webp',
			thumb: '/images/products/golden-beaded-heart-keychain/2-thumb.webp',
			width: 833,
			height: 1280,
			alt: {
				en: 'Golden beaded heart keychain, held in hand',
				pt: 'Porta-chaves em forma de coração em contas douradas, seguro na mão',
				uk: 'Брелок у вигляді серця із золотистого бісеру, у руці',
				ru: 'Брелок в виде сердца из золотистого бисера, в руке'
			}
		},
		{
			src: '/images/products/golden-beaded-heart-keychain/3.webp',
			thumb: '/images/products/golden-beaded-heart-keychain/3-thumb.webp',
			width: 779,
			height: 1280,
			alt: {
				en: 'Golden beaded heart keychain, another angle',
				pt: 'Porta-chaves em forma de coração em contas douradas, outro ângulo',
				uk: 'Брелок у вигляді серця із золотистого бісеру, інший ракурс',
				ru: 'Брелок в виде сердца из золотистого бисера, другой ракурс'
			}
		},
		{
			src: '/images/products/golden-beaded-heart-keychain/4.webp',
			thumb: '/images/products/golden-beaded-heart-keychain/4-thumb.webp',
			width: 827,
			height: 1264,
			alt: {
				en: 'Golden beaded heart keychain, close-up',
				pt: 'Porta-chaves em forma de coração em contas douradas, primeiro plano',
				uk: 'Брелок у вигляді серця із золотистого бісеру, крупний план',
				ru: 'Брелок в виде сердца из золотистого бисера, крупный план'
			}
		}
	],

	materials: {
		en: 'Czech and Chinese seed beads',
		pt: 'Contas checas e chinesas',
		uk: 'Чеський та китайський бісер',
		ru: 'Чешский и китайский бисер'
	},

	featured: true,
	featuredOrder: 2,
	relatedSkus: ['BEAD-002', 'BEAD-003']
};
