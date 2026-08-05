/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BEAD-006',
	slug: 'red-white-beaded-ball-keychain',
	category: 'beadwork',
	status: 'available',

	title: {
		en: 'Red and white beaded ball keychain',
		pt: 'Porta-chaves bola em contas vermelhas e brancas',
		uk: 'Брелок-кулька з червоного та білого бісеру',
		ru: 'Шарик брелок из красного и белого бисера'
	},
	description: {
		en: 'A round ball keychain hand-woven from red and white seed beads. Balls can be made from beads of different colours and sizes. Any quantity can be ordered.',
		ru: 'Круглый брелок-шарик, сплетённый вручную из красного и белого бисера. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/red-white-beaded-ball-keychain/1.webp',
			thumb: '/images/products/red-white-beaded-ball-keychain/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Round keychain woven from red and white seed beads',
				ru: 'Брелок-шарик из красного и белого бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	featured: true,
	featuredOrder: 3,
	relatedSkus: ['BEAD-007', 'BEAD-002', 'BEAD-010', 'BEAD-011', 'BEAD-012']
};
