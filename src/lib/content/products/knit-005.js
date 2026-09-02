/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-005',
	slug: 'crochet-cotton-skirt-and-bag-set',
	category: 'knitted',
	status: 'made_to_order',

	title: {
		en: 'Crochet cotton top, skirt and bag set',
		pt: 'Conjunto de blusa, saia e bolsa em crochê de algodão',
		uk: "В'язані бавовняні кофточка, спідниця та сумочка гачком, набір",
		ru: 'Кофта, юбка и сумочка, связанные крючком из португальских ниток, хлопок'
	},
	description: {
		en: 'A hand-crocheted white cotton set — motif-joined top, skirt and matching bag — worked in Portuguese cotton yarn.',
		pt: 'Um conjunto em crochê de algodão branco feito à mão — blusa unida por motivos, saia e bolsa a condizer — trabalhado em fio de algodão português.',
		uk: "Білий бавовняний набір, пов'язаний вручну гачком, — кофточка з окремих мотивів, спідниця та сумочка — з португальської бавовняної пряжі.",
		ru: 'Белые кофта, юбка и сумочка в комплекте, связанные вручную крючком из португальской хлопковой пряжи.'
	},

	price: { mode: 'from', amount: 50, typicalMax: 90, currency: 'EUR' },

	images: [
		{
			src: '/images/products/crochet-cotton-skirt-and-bag-set/1.webp',
			thumb: '/images/products/crochet-cotton-skirt-and-bag-set/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Crochet cotton top, skirt and bag set',
				pt: 'Conjunto de blusa, saia e bolsa em crochê de algodão',
				uk: "В'язані кофточка, спідниця та сумочка гачком з бавовни",
				ru: 'Вязаные крючком кофта, юбка и сумочка из хлопка'
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
