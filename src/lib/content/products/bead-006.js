/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000037',
	slug: 'red-white-beaded-ball-keychain',
	categories: ['accessories', 'beadwork'],
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
			width: 1448,
			height: 1086,
			alt: {
				en: 'Round keychain woven from red and white seed beads',
				pt: 'Porta-chaves redondo tecido com contas vermelhas e brancas',
				uk: 'Брелок-кулька з червоного та білого бісеру',
				ru: 'Брелок-шарик из красного и белого бисера'
			}
		}
	],

	materials: {
		en: 'Czech and Chinese seed beads, 6mm',
		pt: 'Contas checas e chinesas, 6mm',
		uk: 'Чеський та китайський бісер, 6мм',
		ru: 'Чешский и китайский бисер, бусины 6 мм'
	},
	dimensions: {
		en: 'Size: 14 cm in circumference',
		pt: 'Tamanho: 14 cm de circunferência',
		uk: 'Розмір: 14 см по колу',
		ru: 'Размер: 14 см по периметру'
	},

	featured: true,
	featuredOrder: 3,
	relatedSkus: ['AAA000038', 'AAA000033']
};
