/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000024',
	slug: 'colorful-beaded-balls',
	categories: ['beadwork', 'other'],
	status: 'available',

	title: {
		en: 'Colorful beaded balls',
		pt: 'Bolas coloridas em contas',
		uk: 'Різнокольорові кульки з бісеру',
		ru: 'Разноцветные шарики из бисера'
	},
	description: {
		en: 'A set of round ball keychains hand-woven from multi-coloured seed beads. Balls can be made from beads of different colours and sizes. Any quantity can be ordered.',
		pt: 'Um conjunto de porta-chaves redondos em forma de bola, tecidos à mão com contas multicolores. As bolas podem ser feitas com contas de várias cores e tamanhos. Pode encomendar-se qualquer quantidade.',
		uk: 'Набір круглих брелоків-кульок, сплетених вручну з різнокольорового бісеру. Кульки можна сплести з бісеру різних кольорів і розмірів. Замовити можна будь-яку кількість.',
		ru: 'Набор круглых брелоков-шариков, сплетённых вручную из разноцветного бисера. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },
	pricePerUnit: true,

	images: [
		{
			src: '/images/products/colorful-beaded-balls/1.webp',
			thumb: '/images/products/colorful-beaded-balls/1-thumb.webp',
			width: 1280,
			height: 1089,
			alt: {
				en: 'Multi-coloured beaded ball keychains',
				pt: 'Porta-chaves em forma de bola em contas multicolores',
				uk: 'Різнокольорові брелоки-кульки з бісеру',
				ru: 'Разноцветные брелоки-шарики из бисера'
			}
		},
		{
			src: '/images/products/colorful-beaded-balls/2.webp',
			thumb: '/images/products/colorful-beaded-balls/2-thumb.webp',
			width: 1280,
			height: 1244,
			alt: {
				en: 'Beaded balls in red, black, white and silver',
				pt: 'Bolas em contas nas cores vermelho, preto, branco e prateado',
				uk: 'Кульки з бісеру червоного, чорного, білого та сріблястого кольорів',
				ru: 'Шарики из бисера красного, чёрного, белого и серебристого цветов'
			}
		},
		{
			src: '/images/products/colorful-beaded-balls/3.webp',
			thumb: '/images/products/colorful-beaded-balls/3-thumb.webp',
			width: 1260,
			height: 1280,
			alt: {
				en: 'Colourful beaded balls, another angle',
				pt: 'Bolas coloridas em contas, outro ângulo',
				uk: 'Різнокольорові кульки з бісеру, інший ракурс',
				ru: 'Разноцветные шарики из бисера, другой ракурс'
			}
		},
		{
			src: '/images/products/colorful-beaded-balls/4.webp',
			thumb: '/images/products/colorful-beaded-balls/4-thumb.webp',
			width: 870,
			height: 1280,
			alt: {
				en: 'Single colourful beaded ball, close-up',
				pt: 'Uma única bola colorida em contas, em primeiro plano',
				uk: 'Одна кулька з бісеру, крупний план',
				ru: 'Один шарик из бисера, крупный план'
			}
		},
		{
			src: '/images/products/colorful-beaded-balls/5.webp',
			thumb: '/images/products/colorful-beaded-balls/5-thumb.webp',
			width: 1078,
			height: 1280,
			alt: {
				en: 'Colourful beaded ball, close-up',
				pt: 'Bola colorida em contas, em primeiro plano',
				uk: 'Кулька з бісеру, крупний план',
				ru: 'Шарик из бисера, крупный план'
			}
		},
		{
			src: '/images/products/colorful-beaded-balls/6.webp',
			thumb: '/images/products/colorful-beaded-balls/6-thumb.webp',
			width: 677,
			height: 1280,
			alt: {
				en: 'Colourful beaded ball, close-up',
				pt: 'Bola colorida em contas, em primeiro plano',
				uk: 'Кулька з бісеру, крупний план',
				ru: 'Шарик из бисера, крупный план'
			}
		},
		{
			src: '/images/products/colorful-beaded-balls/7.webp',
			thumb: '/images/products/colorful-beaded-balls/7-thumb.webp',
			width: 887,
			height: 1280,
			alt: {
				en: 'Colourful beaded ball, close-up',
				pt: 'Bola colorida em contas, em primeiro plano',
				uk: 'Кулька з бісеру, крупний план',
				ru: 'Шарик из бисера, крупный план'
			}
		},
		{
			src: '/images/products/colorful-beaded-balls/8.webp',
			thumb: '/images/products/colorful-beaded-balls/8-thumb.webp',
			width: 1113,
			height: 1280,
			alt: {
				en: 'White and silver beaded ball, close-up',
				pt: 'Bola em contas branca e prateada, em primeiro plano',
				uk: 'Біло-срібляста кулька з бісеру, крупний план',
				ru: 'Бело-серебристый шарик из бисера, крупный план'
			}
		}
	],

	dimensions: {
		en: 'Circumference: 14 cm (≈4.5 cm diameter)',
		pt: 'Circunferência: 14 cm (≈4,5 cm de diâmetro)',
		uk: 'Обхват: 14 см (діаметр ≈ 4,5 см)',
		ru: 'Окружность: 14 см (диаметр ≈ 4,5 см)'
	},

	materials: {
		en: 'Czech and Chinese seed beads, 6mm',
		pt: 'Contas checas e chinesas, 6mm',
		uk: 'Чеський та китайський бісер, 6мм',
		ru: 'Чешский и китайский бисер, бусины 6 мм'
	},

	relatedSkus: ['AAA000037', 'AAA000038']
};
