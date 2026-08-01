/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-004',
	slug: 'white-cotton-motif-crochet-top',
	category: 'knitted',
	status: 'available',

	title: {
		en: 'White cotton crochet top, motif-joined',
		pt: 'Blusa branca em crochê de algodão, unida por motivos',
		uk: 'Біла бавовняна кофточка гачком з окремих мотивів',
		ru: 'Белая кофточка, связанная из португальских ниток, хлопок. Вязание из отдельных мотивов'
	},
	description: {
		en: 'A hand-crocheted white cotton top made by joining individual motifs, worked in Portuguese cotton yarn.',
		ru: 'Белая кофточка из португальской хлопковой пряжи, связанная вручную из отдельных мотивов.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-cotton-motif-crochet-top/1.webp',
			thumb: '/images/products/white-cotton-motif-crochet-top/1-thumb.webp',
			width: 722,
			height: 610,
			alt: {
				en: 'White cotton crochet top made from joined motifs',
				ru: 'Белая кофточка, связанная из отдельных мотивов'
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

	relatedSkus: ['KNIT-003', 'KNIT-005']
};
