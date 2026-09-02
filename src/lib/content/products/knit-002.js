/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-002',
	slug: 'white-crochet-bag',
	category: 'knitted',
	status: 'made_to_order',

	title: {
		en: 'White crochet bag',
		pt: 'Bolsa branca em crochê',
		uk: "Біла в'язана сумочка гачком",
		ru: 'Вязаная белая сумочка, крючок'
	},
	description: {
		en: 'A hand-crocheted white bag.',
		pt: 'Uma bolsa branca em crochê, trabalhada à mão.',
		uk: "Біла сумочка, пов'язана вручну гачком.",
		ru: 'Белая сумочка, связанная вручную крючком.'
	},

	price: { mode: 'from', amount: 35, typicalMax: 50, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-crochet-bag/1.webp',
			thumb: '/images/products/white-crochet-bag/1-thumb.webp',
			width: 710,
			height: 1070,
			alt: {
				en: 'White crochet bag',
				pt: 'Bolsa branca em crochê',
				uk: "Біла в'язана сумочка гачком",
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
				pt: 'Bolsa branca em crochê, outra vista',
				uk: "Біла в'язана сумочка, інший ракурс",
				ru: 'Вязаная белая сумочка, другой ракурс'
			}
		}
	],

	productionTime: {
		en: 'Usually 20–25 days',
		pt: 'Normalmente 20–25 dias',
		uk: 'Зазвичай 20–25 днів',
		ru: 'Обычно 20–25 дней'
	},

	materials: {
		en: 'Portuguese cotton yarn',
		pt: 'Fio de algodão português',
		uk: 'Португальська бавовняна пряжа',
		ru: 'Португальская хлопковая пряжа'
	},
	colours: {
		en: 'White shown; other colours available to order',
		pt: 'Mostrado em branco; outras cores disponíveis por encomenda',
		uk: 'Показаний білий колір; інші кольори доступні на замовлення',
		ru: 'Показан белый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: []
};
