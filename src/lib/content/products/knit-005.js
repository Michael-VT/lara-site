/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-005',
	slug: 'crochet-cotton-skirt-and-bag-set',
	category: 'knitted',
	status: 'available',

	title: {
		en: 'Crochet cotton skirt and bag set',
		pt: 'Conjunto de saia e bolsa em crochê de algodão',
		uk: "В'язана бавовняна спідниця та сумочка гачком, набір",
		ru: 'Юбка и сумочка, связанные крючком из португальских ниток, хлопок'
	},
	description: {
		en: 'A hand-crocheted white cotton skirt with a matching bag, worked in Portuguese cotton yarn — shown worn with the matching motif-joined top.',
		ru: 'Белая юбка и сумочка в комплекте, связанные вручную крючком из португальской хлопковой пряжи — показаны вместе с подходящей кофточкой из отдельных мотивов.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/crochet-cotton-skirt-and-bag-set/1.webp',
			thumb: '/images/products/crochet-cotton-skirt-and-bag-set/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Crochet cotton skirt and matching bag, worn with a crochet top',
				ru: 'Вязаная юбка и сумочка из хлопка, надеты с вязаной кофточкой'
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

	relatedSkus: ['KNIT-004']
};
