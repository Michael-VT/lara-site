/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-003',
	slug: 'silver-beaded-heart-keychain',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Silver beaded heart keychain',
		pt: 'Porta-chaves coração em contas prateadas',
		uk: 'Брелок-серце із срібного бісеру',
		ru: 'Объемное сердце брелок из серебристого бисера'
	},
	description: {
		en: 'A three-dimensional heart keychain hand-woven from silver-tone seed beads.',
		pt: 'Um porta-chaves em forma de coração tridimensional, tecido à mão com contas prateadas.',
		uk: "Об'ємний брелок-серце, сплетений вручну із срібного бісеру.",
		ru: 'Объёмный брелок-сердце, сплетённый вручную из серебристого бисера.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/silver-beaded-heart-keychain/1.webp',
			thumb: '/images/products/silver-beaded-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Silver-tone beaded heart-shaped keychain',
				pt: 'Porta-chaves em forma de coração em contas prateadas',
				uk: 'Брелок у вигляді серця із срібного бісеру',
				ru: 'Брелок в виде сердца из серебристого бисера'
			}
		}
	],

	materials: {
		en: 'Czech and Chinese seed beads',
		pt: 'Contas checas e chinesas',
		uk: 'Чеський та китайський бісер',
		ru: 'Чешский и китайский бисер'
	},

	relatedSkus: ['BEAD-001', 'BEAD-004']
};
