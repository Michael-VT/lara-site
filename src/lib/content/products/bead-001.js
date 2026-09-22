/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000032',
	slug: 'golden-beaded-heart-keychain',
	categories: ['accessories', 'beadwork'],
	status: 'available',

	title: {
		en: 'Golden beaded heart keychain',
		pt: 'Porta-chaves coração em contas douradas',
		uk: 'Брелок-серце із золотистого бісеру',
		ru: 'Брелок-сердце из золотистого бисера'
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
			width: 1280,
			height: 853,
			alt: {
				en: 'Golden beaded heart keychain clipped to a black bag',
				pt: 'Porta-chaves em contas douradas preso a uma bolsa preta',
				uk: 'Брелок із золотистого бісеру, причеплений до чорної сумки',
				ru: 'Брелок из золотистого бисера, прикреплён к чёрной сумке'
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
	relatedSkus: ['AAA000033', 'AAA000034']
};
