/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-003',
	slug: 'lilac-top-down-crochet-top',
	category: 'knitted',
	status: 'available',

	title: {
		en: 'Lilac top-down crochet top',
		pt: 'Blusa lilás em crochê, tricotada de cima para baixo',
		uk: "Бузкова кофточка, в'язана гачком зверху вниз",
		ru: 'Сиреневый кофточка, связанная крючком сверху вниз'
	},
	description: {
		en: 'A hand-crocheted lilac top, worked top-down.',
		ru: 'Сиреневая кофточка, связанная вручную крючком сверху вниз.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/lilac-top-down-crochet-top/1.webp',
			thumb: '/images/products/lilac-top-down-crochet-top/1-thumb.webp',
			width: 1043,
			height: 1280,
			alt: {
				en: 'Lilac top-down crochet top',
				ru: 'Сиреневая кофточка, связанная крючком сверху вниз'
			}
		}
	],

	materials: { en: 'Cotton yarn', ru: 'Хлопковая пряжа' },
	colours: {
		en: 'Lilac shown; other colours available to order',
		ru: 'Показан сиреневый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['KNIT-004']
};
