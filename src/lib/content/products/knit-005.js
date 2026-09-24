/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000031',
	slug: 'crochet-cotton-skirt-and-bag-set',
	categories: ['knitted', 'bags'],
	status: 'made_to_order',

	title: {
		en: 'Crochet cotton top, skirt and bag set',
		pt: 'Conjunto de blusa, saia e bolsa em croché de algodão',
		uk: "В'язані бавовняні кофточка, спідниця та сумочка гачком, набір",
		ru: 'Кофта, юбка и сумочка, связанные крючком из хлопка'
	},
	description: {
		en: 'A hand-crocheted white cotton top, skirt and bag, worked in Portuguese cotton yarn. Price is from €50 per item, excluding the cost of yarn.',
		pt: 'Uma blusa, saia e bolsa em croché de algodão branco, feitas à mão, trabalhadas em fio de algodão português. Preço a partir de 50€ por peça, sem o custo do fio.',
		uk: "Білі кофточка, спідниця та сумочка, пов'язані вручну гачком з португальської бавовняної пряжі. Ціна від 50 євро за виріб, без вартості пряжі.",
		ru: 'Белая кофта, юбка, сумочка, связанные вручную крючком из португальской хлопковой пряжи. Цена от 50 евро за одно изделие, без стоимости пряжи.'
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
				pt: 'Conjunto de blusa, saia e bolsa em croché de algodão',
				uk: "В'язані кофточка, спідниця та сумочка гачком з бавовни",
				ru: 'Вязаные крючком кофта, юбка и сумочка из хлопка'
			}
		},
		{
			src: '/images/products/crochet-cotton-skirt-and-bag-set/2.webp',
			thumb: '/images/products/crochet-cotton-skirt-and-bag-set/2-thumb.webp',
			width: 1254,
			height: 1254,
			alt: {
				en: 'Limol yarn label: 100% mercerised cotton',
				pt: 'Etiqueta do fio Limol: 100% algodão mercerizado',
				uk: 'Бірка пряжі Limol: 100% мерсеризована бавовна',
				ru: 'Бирка пряжи Limol: 100% мерсеризованный хлопок'
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

	relatedSkus: ['AAA000030']
};
