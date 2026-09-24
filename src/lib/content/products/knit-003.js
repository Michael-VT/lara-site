/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000029',
	slug: 'lilac-top-down-crochet-top',
	categories: ['knitted'],
	status: 'made_to_order',

	title: {
		en: 'Lilac top-down crochet top',
		pt: 'Blusa lilás em croché, trabalhada de cima para baixo',
		uk: "Бузкова кофточка, в'язана гачком зверху вниз",
		ru: 'Сиреневая кофточка, связанная крючком сверху вниз'
	},
	description: {
		en: 'A hand-crocheted lilac top, worked top-down.',
		pt: 'Uma blusa lilás em croché, trabalhada à mão de cima para baixo.',
		uk: "Бузкова кофточка, пов'язана вручну гачком зверху вниз.",
		ru: 'Сиреневая кофточка, связанная вручную крючком сверху вниз.'
	},

	price: { mode: 'from', amount: 50, typicalMax: 90, currency: 'EUR' },

	images: [
		{
			src: '/images/products/lilac-top-down-crochet-top/1.webp',
			thumb: '/images/products/lilac-top-down-crochet-top/1-thumb.webp',
			width: 1122,
			height: 1402,
			alt: {
				en: 'Lilac top-down crochet top',
				pt: 'Blusa lilás em croché, trabalhada de cima para baixo',
				uk: "Бузкова кофточка, в'язана гачком зверху вниз",
				ru: 'Сиреневая кофточка, связанная крючком сверху вниз'
			}
		}
	],

	dimensions: {
		en: 'European sizes 38–40 (Ukrainian 44–46)',
		pt: 'Tamanhos europeus 38–40 (ucranianos 44–46)',
		uk: 'Європейські розміри 38–40 (українські 44–46)',
		ru: 'Европейские размеры 38–40 (украинские 44–46)'
	},

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
		en: 'Lilac shown; other colours available to order',
		pt: 'Mostrado em lilás; outras cores disponíveis por encomenda',
		uk: 'Показаний бузковий колір; інші кольори доступні на замовлення',
		ru: 'Показан сиреневый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour, knitted to your measurements; the listed price covers the work, yarn is paid separately at receipt cost',
		pt: 'Pode ser encomendada noutra cor, às suas medidas; o preço é pelo trabalho, o fio é pago à parte pelo recibo',
		uk: 'Можна замовити в іншому кольорі, за вашими мірками; вказана ціна — за роботу, пряжа оплачується окремо за чеком',
		ru: 'Можно заказать в другом цвете, по вашим меркам; цена — за работу, пряжа оплачивается отдельно по чеку'
	},

	relatedSkus: ['AAA000030']
};
