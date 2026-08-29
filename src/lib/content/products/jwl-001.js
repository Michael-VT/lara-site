/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'JWL-001',
	slug: 'gold-accented-beaded-ball-keychain',
	category: 'jewellery',
	status: 'available',

	title: {
		en: 'Beaded ball keychain with pearl and gold accents',
		pt: 'Porta-chaves bola em contas com pérolas e detalhes dourados',
		uk: 'Брелок-кулька з перлинами та золотистими вставками',
		ru: 'Брелок подвеска с золотистым бисером'
	},
	description: {
		en: 'A round ball keychain charm hand-woven from faux pearls, seed beads and gold accent beads, finished with a chain and lobster clasp. Balls can be made from beads of different colours and sizes. Any quantity can be ordered.',
		pt: 'Um porta-chaves de bola em contas, tecido à mão com pérolas artificiais, contas e contas douradas de realce, acabado com corrente e fecho mosquetão. As bolas podem ser feitas com contas de várias cores e tamanhos. É possível encomendar qualquer quantidade.',
		uk: 'Круглий брелок-підвіска, сплетений вручну зі штучних перлин, бісеру та золотистих бісерин-акцентів, з ланцюжком і карабіном. Кульки можна сплести з бісеру різних кольорів і розмірів. Замовити можна будь-яку кількість.',
		ru: 'Круглый брелок-подвеска, сплетённый вручную из жемчужных бусин, бисера и золотистых бусин-акцентов, с цепочкой и карабином. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/gold-accented-beaded-ball-keychain/1.webp',
			thumb: '/images/products/gold-accented-beaded-ball-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Beaded ball keychain with pearl and gold accents',
				pt: 'Porta-chaves bola em contas com pérolas e detalhes dourados',
				uk: 'Брелок-кулька з перлинами та золотистими вставками',
				ru: 'Брелок подвеска с золотистым бисером'
			}
		},
		{
			src: '/images/products/gold-accented-beaded-ball-keychain/2.webp',
			thumb: '/images/products/gold-accented-beaded-ball-keychain/2-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Three beaded ball keychains shown together',
				pt: 'Três porta-chaves de bola em contas juntos',
				uk: 'Три брелоки-підвіски разом',
				ru: 'Три брелока-подвески вместе'
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
		en: 'White pearl, red and gold shown; other colours available to order',
		pt: 'Mostrados em tons de pérola branca, vermelho e dourado; outras cores disponíveis por encomenda',
		uk: 'Показані білі перлини, червоний і золотистий кольори; інші кольори доступні на замовлення',
		ru: 'Показаны белый жемчуг, красный и золотистый цвета; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour combination',
		pt: 'Pode ser encomendado noutra combinação de cores',
		uk: 'Можна замовити в іншому поєднанні кольорів',
		ru: 'Можно заказать в другом сочетании цветов'
	},

	relatedSkus: ['JWL-002', 'JWL-003', 'JWL-004']
};
