/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-001',
	slug: 'crochet-panama-hat',
	category: 'knitted',
	status: 'available',

	title: {
		en: 'Crochet panama hat',
		pt: 'Chapéu panamá em crochê',
		uk: "В'язана панама гачком",
		ru: 'Панама'
	},
	description: {
		en: 'A hand-crocheted panama-style hat.',
		ru: 'Панама, связанная вручную крючком.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/crochet-panama-hat/1.webp',
			thumb: '/images/products/crochet-panama-hat/1-thumb.webp',
			width: 919,
			height: 1280,
			alt: {
				en: 'Crochet panama hat',
				ru: 'Панама'
			}
		}
	],

	materials: { en: 'Cotton yarn', ru: 'Хлопковая пряжа' },
	colours: {
		en: 'Other colours available to order',
		ru: 'Другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: []
};
