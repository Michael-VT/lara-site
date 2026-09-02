/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-004',
	slug: 'white-cotton-motif-crochet-top',
	category: 'knitted',
	status: 'made_to_order',

	title: {
		en: 'White cotton crochet top, motif-joined',
		pt: 'Blusa branca em crochê de algodão, unida por motivos',
		uk: 'Біла бавовняна кофточка гачком з окремих мотивів',
		ru: 'Белая кофточка, связанная из португальских ниток, хлопок. Вязание из отдельных мотивов'
	},
	description: {
		en: 'A hand-crocheted white cotton top made by joining individual motifs, worked in Portuguese cotton yarn.',
		pt: 'Uma blusa branca em crochê de algodão, trabalhada à mão unindo motivos individuais, em fio de algodão português.',
		uk: "Біла кофточка з португальської бавовняної пряжі, пов'язана вручну гачком з окремих мотивів.",
		ru: 'Белая кофточка из португальской хлопковой пряжи, связанная вручную из отдельных мотивов.'
	},

	price: { mode: 'from', amount: 50, typicalMax: 90, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-cotton-motif-crochet-top/1.webp',
			thumb: '/images/products/white-cotton-motif-crochet-top/1-thumb.webp',
			width: 722,
			height: 610,
			alt: {
				en: 'White cotton crochet top made from joined motifs',
				pt: 'Blusa branca em crochê de algodão, feita de motivos unidos',
				uk: "Біла кофточка, пов'язана з окремих мотивів",
				ru: 'Белая кофточка, связанная из отдельных мотивов'
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
		pt: 'Pode ser encomendada noutra cor, às suas medidas; o preço é pelo trabalho, o fio é pago à parte pelo recibo',
		uk: 'Можна замовити в іншому кольорі, за вашими мірками; вказана ціна — за роботу, пряжа оплачується окремо за чеком',
		ru: 'Можно заказать в другом цвете, по вашим меркам; цена — за работу, пряжа оплачивается отдельно по чеку'
	},

	relatedSkus: ['KNIT-003', 'KNIT-005']
};
