/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-002',
	slug: 'white-crochet-bag',
	category: 'knitted',
	status: 'available',

	title: {
		en: 'White crochet bag',
		pt: 'Bolsa branca em crochê',
		uk: "Біла в'язана сумочка гачком",
		ru: 'Вязаная белая сумочка, крючок'
	},
	description: {
		en: 'A hand-crocheted white bag.',
		ru: 'Белая сумочка, связанная вручную крючком.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-crochet-bag/1.webp',
			thumb: '/images/products/white-crochet-bag/1-thumb.webp',
			width: 710,
			height: 1070,
			alt: {
				en: 'White crochet bag',
				ru: 'Вязаная белая сумочка'
			}
		},
		{
			src: '/images/products/white-crochet-bag/2.webp',
			thumb: '/images/products/white-crochet-bag/2-thumb.webp',
			width: 910,
			height: 697,
			alt: {
				en: 'White crochet bag, second view',
				ru: 'Вязаная белая сумочка, другой ракурс'
			}
		}
	],

	materials: { en: 'Cotton yarn', ru: 'Хлопковая пряжа' },
	colours: {
		en: 'White shown; other colours available to order',
		ru: 'Показан белый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: []
};
