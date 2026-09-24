/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000040',
	slug: 'silver-accented-beaded-ball-keychain',
	categories: ['accessories', 'beadwork'],
	status: 'available',

	title: {
		en: 'Beaded ball keychain with pearl and silver accents',
		pt: 'Porta-chaves bola em contas com pérolas e detalhes prateados',
		uk: 'Брелок-кулька з перлинами та сріблястими вставками',
		ru: 'Брелок-подвеска с жемчужными бусинами и серебристым бисером'
	},
	description: {
		en: 'A round ball keychain charm hand-woven from faux pearls, seed beads and silver accent beads, finished with a chain and lobster clasp. Balls can be made from beads of different colours and sizes. Any quantity can be ordered.',
		pt: 'Um porta-chaves de bola em contas, tecido à mão com pérolas artificiais, contas e contas prateadas de realce, acabado com corrente e fecho mosquetão. As bolas podem ser feitas com contas de várias cores e tamanhos. É possível encomendar qualquer quantidade.',
		uk: 'Круглий брелок-підвіска, сплетений вручну зі штучних перлин, бісеру та сріблястих бісерин-акцентів, з ланцюжком і карабіном. Кульки можна сплести з бісеру різних кольорів і розмірів. Замовити можна будь-яку кількість.',
		ru: 'Круглый брелок-подвеска, сплетённый вручную из жемчужных бусин, бисера и серебристых бусин-акцентов, с цепочкой и карабином. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/silver-accented-beaded-ball-keychain/1.webp',
			thumb: '/images/products/silver-accented-beaded-ball-keychain/1-thumb.webp',
			width: 1086,
			height: 1448,
			alt: {
				en: 'Beaded ball keychain with pearl and silver accents',
				pt: 'Porta-chaves bola em contas com pérolas e detalhes prateados',
				uk: 'Брелок-кулька з перлинами та сріблястими вставками',
				ru: 'Брелок-подвеска с жемчужными бусинами и серебристым бисером'
			}
		}
	],

	materials: {
		en: 'Faux pearls, seed beads 6mm, metal chain and clasp',
		pt: 'Pérolas artificiais, contas de 6mm, corrente metálica e fecho mosquetão',
		uk: 'Штучні перлини, бісер 6мм, металевий ланцюжок і карабін',
		ru: 'Искусственный жемчуг, бисер, бусины 6 мм, металлическая цепочка и карабин'
	},
	dimensions: {
		en: 'Size: 14 cm in circumference',
		pt: 'Tamanho: 14 cm de circunferência',
		uk: 'Розмір: 14 см по колу',
		ru: 'Размер: 14 см по периметру'
	},
	colours: {
		en: 'White pearl, red and silver shown; other colours available to order',
		pt: 'Mostrado em pérola branca, vermelho e prateado; outras cores disponíveis por encomenda',
		uk: 'Показані білі перлини, червоний і сріблястий кольори; інші кольори доступні на замовлення',
		ru: 'Показаны белый искусственный жемчуг, красный и серебристый цвета; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour combination',
		pt: 'Pode ser encomendado noutra combinação de cores',
		uk: 'Можна замовити в іншому поєднанні кольорів',
		ru: 'Можно заказать в другом сочетании цветов'
	},

	relatedSkus: ['AAA000039', 'AAA000041', 'AAA000022']
};
