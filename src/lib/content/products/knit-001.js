/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-001',
	slug: 'crochet-panama-hat',
	category: 'knitted',
	status: 'made_to_order',

	title: {
		en: 'Crochet panama hat',
		pt: 'Chapéu panamá em crochê',
		uk: "В'язана панама гачком",
		ru: 'Панама'
	},
	description: {
		en: 'A hand-crocheted panama-style hat.',
		pt: 'Um chapéu panamá em crochê, trabalhado à mão.',
		uk: "Панама, пов'язана вручну гачком.",
		ru: 'Панама, связанная вручную крючком.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/crochet-panama-hat/1.webp',
			thumb: '/images/products/crochet-panama-hat/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Crochet panama hat',
				pt: 'Chapéu panamá em crochê',
				uk: "В'язана панама гачком",
				ru: 'Панама'
			}
		}
	],

	materials: {
		en: 'Cotton yarn',
		pt: 'Fio de algodão',
		uk: 'Бавовняна пряжа',
		ru: 'Хлопковая пряжа'
	},
	colours: {
		en: 'Other colours available to order',
		pt: 'Outras cores disponíveis por encomenda',
		uk: 'Інші кольори доступні на замовлення',
		ru: 'Другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendado noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: []
};
