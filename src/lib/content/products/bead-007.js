/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-007',
	slug: 'white-beaded-flat-heart-keychain',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Flat white beaded heart keychain',
		pt: 'Porta-chaves coração plano em contas brancas',
		uk: 'Плаский брелок-серце з білого бісеру',
		ru: 'Плоское сердце из белого бисера 8 мм'
	},
	description: {
		en: 'A flat heart-shaped keychain hand-woven from 8 mm white seed beads.',
		ru: 'Плоский брелок-сердце, сплетённый вручную из белого бисера 8 мм.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-beaded-flat-heart-keychain/1.webp',
			thumb: '/images/products/white-beaded-flat-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Flat white beaded heart-shaped keychain',
				ru: 'Плоский брелок в виде сердца из белого бисера'
			}
		}
	],

	materials: { en: '8 mm seed beads', ru: 'Бисер 8 мм' },

	relatedSkus: ['BEAD-006', 'BEAD-003']
};
