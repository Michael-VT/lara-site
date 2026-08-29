/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'JWL-003',
	slug: 'silver-gunmetal-beaded-ball-keychain',
	category: 'jewellery',
	status: 'available',

	title: {
		en: 'Beaded ball keychain with pearl, silver and gunmetal accents',
		pt: 'Porta-chaves bola em contas com pérolas, detalhes prateados e cinza-chumbo',
		uk: 'Брелок-кулька з перлинами, сріблястими та сталевими вставками',
		ru: 'Брелок подвеска с серебристым и сталистым бисером'
	},
	description: {
		en: 'A round ball keychain charm hand-woven from faux pearls, seed beads and silver and gunmetal-grey accent beads, finished with a chain and lobster clasp. Balls can be made from beads of different colours and sizes. Any quantity can be ordered.',
		pt: 'Um porta-chaves de bola em contas, tecido à mão com pérolas artificiais, contas e contas de realce prateadas e cinza-chumbo, acabado com corrente e fecho mosquetão. As bolas podem ser feitas com contas de várias cores e tamanhos. É possível encomendar qualquer quantidade.',
		uk: 'Круглий брелок-підвіска, сплетений вручну зі штучних перлин, бісеру та сріблястих і сталевих бісерин-акцентів, з ланцюжком і карабіном. Кульки можна сплести з бісеру різних кольорів і розмірів. Замовити можна будь-яку кількість.',
		ru: 'Круглый брелок-подвеска, сплетённый вручную из жемчужных бусин, бисера и серебристых и серо-стальных бусин-акцентов, с цепочкой и карабином. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/silver-gunmetal-beaded-ball-keychain/1.webp',
			thumb: '/images/products/silver-gunmetal-beaded-ball-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Beaded ball keychain with pearl, silver and gunmetal accents',
				pt: 'Porta-chaves bola em contas com pérolas, detalhes prateados e cinza-chumbo',
				uk: 'Брелок-кулька з перлинами, сріблястими та сталевими вставками',
				ru: 'Брелок подвеска с серебристым и сталистым бисером'
			}
		}
	],

	materials: {
		en: 'Faux pearls, seed beads, metal chain and clasp',
		pt: 'Pérolas artificiais, contas, corrente metálica e fecho mosquetão',
		uk: 'Штучні перлини, бісер, металевий ланцюжок і карабін',
		ru: 'Жемчужные бусины, бисер, металлическая цепочка и карабин'
	},
	colours: {
		en: 'White pearl, red, silver and gunmetal grey shown; other colours available to order',
		pt: 'Mostrados em tons de pérola branca, vermelho, prateado e cinza-chumbo; outras cores disponíveis por encomenda',
		uk: 'Показані білі перлини, червоний, сріблястий і сталевий кольори; інші кольори доступні на замовлення',
		ru: 'Показаны белый жемчуг, красный, серебристый и серо-стальной цвета; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour combination',
		pt: 'Pode ser encomendado noutra combinação de cores',
		uk: 'Можна замовити в іншому поєднанні кольорів',
		ru: 'Можно заказать в другом сочетании цветов'
	},

	relatedSkus: ['JWL-001', 'JWL-002', 'JWL-004']
};
