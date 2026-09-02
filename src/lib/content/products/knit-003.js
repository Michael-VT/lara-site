/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'KNIT-003',
	slug: 'lilac-top-down-crochet-top',
	category: 'knitted',
	status: 'made_to_order',

	title: {
		en: 'Lilac top-down crochet top',
		pt: 'Blusa lilás em crochê, trabalhada de cima para baixo',
		uk: "Бузкова кофточка, в'язана гачком зверху вниз",
		ru: 'Сиреневый кофточка, связанная крючком сверху вниз'
	},
	description: {
		en: 'A hand-crocheted lilac top, worked top-down.',
		pt: 'Uma blusa lilás em crochê, trabalhada à mão de cima para baixo.',
		uk: "Бузкова кофточка, пов'язана вручну гачком зверху вниз.",
		ru: 'Сиреневая кофточка, связанная вручную крючком сверху вниз.'
	},

	price: { mode: 'from', amount: 50, typicalMax: 90, currency: 'EUR' },

	images: [
		{
			src: '/images/products/lilac-top-down-crochet-top/1.webp',
			thumb: '/images/products/lilac-top-down-crochet-top/1-thumb.webp',
			width: 1043,
			height: 1280,
			alt: {
				en: 'Lilac top-down crochet top',
				pt: 'Blusa lilás em crochê, trabalhada de cima para baixo',
				uk: "Бузкова кофточка, в'язана гачком зверху вниз",
				ru: 'Сиреневая кофточка, связанная крючком сверху вниз'
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
		en: 'Lilac shown; other colours available to order',
		pt: 'Mostrado em lilás; outras cores disponíveis por encomenda',
		uk: 'Показаний бузковий колір; інші кольори доступні на замовлення',
		ru: 'Показан сиреневый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['KNIT-004']
};
