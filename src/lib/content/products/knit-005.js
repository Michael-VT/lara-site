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
		en: 'Can be made to order in a different colour, knitted to your measurements; the listed price covers the work, yarn is paid separately at receipt cost',
		pt: 'Pode ser encomendado noutra cor, às suas medidas; o preço é pelo trabalho, o fio é pago à parte pelo recibo',
		uk: 'Можна замовити в іншому кольорі, за вашими мірками; вказана ціна — за роботу, пряжа оплачується окремо за чеком',
		ru: 'Можно заказать в другом цвете, по вашим меркам; цена — за работу, пряжа оплачивается отдельно по чеку'
	},

	relatedSkus: ['KNIT-004']
};
