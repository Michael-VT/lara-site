/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000025',
	slug: 'beaded-toy-balls',
	categories: ['beadwork', 'other'],
	status: 'available',

	title: {
		en: 'Beaded toy balls',
		pt: 'Bolas de brinquedo em contas',
		uk: 'Іграшкові кульки з бісеру',
		ru: 'Шарики игрушки из бисера'
	},
	description: {
		en: 'Small hand-woven toy balls made from seed beads. Balls can be made from beads of different colours and sizes. Any quantity can be ordered.',
		pt: 'Pequenas bolas de brinquedo tecidas à mão com contas. As bolas podem ser feitas com contas de várias cores e tamanhos. Pode encomendar-se qualquer quantidade.',
		uk: 'Невеликі іграшкові кульки, сплетені вручну з бісеру. Кульки можна сплести з бісеру різних кольорів і розмірів. Замовити можна будь-яку кількість.',
		ru: 'Небольшие игрушки-шарики, сплетённые вручную из бисера. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },
	pricePerUnit: true,

	images: [
		{
			src: '/images/products/beaded-toy-balls/1.webp',
			thumb: '/images/products/beaded-toy-balls/1-thumb.webp',
			width: 1280,
			height: 1215,
			alt: {
				en: 'Beaded toy balls',
				pt: 'Bolas de brinquedo em contas',
				uk: 'Іграшкові кульки з бісеру',
				ru: 'Шарики игрушки из бисера'
			}
		}
	],

	materials: {
		en: 'Czech and Chinese seed beads, 6mm',
		pt: 'Contas checas e chinesas, 6mm',
		uk: 'Чеський та китайський бісер, 6мм',
		ru: 'Чешский и китайский бисер, бусины 6 мм'
	},
	dimensions: {
		en: 'Size: 14 cm in circumference',
		pt: 'Tamanho: 14 cm de circunferência',
		uk: 'Розмір: 14 см по колу',
		ru: 'Размер: 14 см по периметру'
	},
	colours: {
		en: 'Various colours available to order',
		pt: 'Várias cores disponíveis por encomenda',
		uk: 'Доступні різні кольори на замовлення',
		ru: 'Доступны разные цвета на заказ'
	},
	customisation: {
		en: 'Can be made to order in different colours',
		pt: 'Podem ser encomendadas noutras cores',
		uk: 'Можна замовити в інших кольорах',
		ru: 'Можно заказать в других цветах'
	},

	relatedSkus: ['AAA000024']
};
