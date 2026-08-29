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
		pt: 'Uma blusa branca em crochê de algodão, trabalhada à mão unindo motivos individuais, em fio de algodão português.',
		uk: "Біла кофточка з португальської бавовняної пряжі, пов'язана вручну гачком з окремих мотивів.",
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
				pt: 'Blusa branca em crochê de algodão, feita de motivos unidos',
				uk: "Біла кофточка, пов'язана з окремих мотивів",
				ru: 'Белая кофточка, связанная из отдельных мотивов'
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
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['KNIT-003', 'KNIT-005']
};
