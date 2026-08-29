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
		pt: 'Um conjunto de saia e bolsa em crochê de algodão branco, trabalhado à mão em fio de algodão português — mostrado em uso com a blusa a condizer, unida por motivos.',
		uk: "Біла спідниця та сумочка в одному наборі, пов'язані вручну гачком з португальської бавовняної пряжі — показані разом з відповідною кофточкою з окремих мотивів.",
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
				pt: 'Saia em crochê de algodão com bolsa a condizer, usadas com uma blusa em crochê',
				uk: "В'язана спідниця та сумочка з бавовни, надіті з в'язаною кофточкою",
				ru: 'Вязаная юбка и сумочка из хлопка, надеты с вязаной кофточкой'
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
		en: 'White shown; other colours available to order',
		pt: 'Mostrado em branco; outras cores disponíveis por encomenda',
		uk: 'Показаний білий колір; інші кольори доступні на замовлення',
		ru: 'Показан белый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendado noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['KNIT-004']
};
