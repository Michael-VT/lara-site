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
		pt: 'Um porta-chaves redondo em forma de bola, tecido à mão com contas vermelhas e brancas. As bolas podem ser feitas com contas de várias cores e tamanhos. Pode encomendar-se qualquer quantidade.',
		uk: 'Круглий брелок-кулька, сплетений вручну з червоного та білого бісеру. Кульки можна сплести з бісеру різних кольорів і розмірів. Замовити можна будь-яку кількість.',
		ru: 'Круглый брелок-шарик, сплетённый вручную из красного и белого бисера. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/red-white-beaded-ball-keychain/1.webp',
			thumb: '/images/products/red-white-beaded-ball-keychain/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Round keychain woven from red and white seed beads',
				pt: 'Porta-chaves redondo tecido com contas vermelhas e brancas',
				uk: 'Брелок-кулька з червоного та білого бісеру',
				ru: 'Брелок-шарик из красного и белого бисера'
			}
		}
	],

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },

	featured: true,
	featuredOrder: 3,
	relatedSkus: ['BEAD-007', 'BEAD-002']
};
