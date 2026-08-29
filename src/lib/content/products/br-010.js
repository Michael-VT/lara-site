/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-010',
	slug: 'blue-white-patterned-bracelet-duo',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Blue and white bracelet duo, different patterns',
		pt: 'Dupla de pulseiras azul e branca, padrões diferentes',
		uk: 'Пара синього та білого браслетів різного візерунка',
		ru: 'Два браслета синий и белый, разного узора'
	},
	description: {
		en: 'A pair of hand-woven bracelets, one in blue and one in white, each with a different bead pattern.',
		pt: 'Par de pulseiras tecidas à mão, uma azul e outra branca, cada uma com um padrão diferente.',
		uk: 'Пара браслетів, сплетених вручну: синій і білий, кожен зі своїм візерунком.',
		ru: 'Пара браслетов, сплетённых вручную: синий и белый, каждый со своим узором.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/blue-white-patterned-bracelet-duo/1.webp',
			thumb: '/images/products/blue-white-patterned-bracelet-duo/1-thumb.webp',
			width: 582,
			height: 1280,
			alt: {
				en: 'Blue and white bracelet duo with different patterns',
				pt: 'Dupla de pulseiras azul e branca com padrões diferentes',
				uk: 'Пара синього та білого браслетів різного візерунка',
				ru: 'Два браслета синий и белый, разного узора'
			}
		}
	],

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },
	colours: {
		en: 'Blue and white shown; other colours available to order',
		pt: 'Mostradas em azul e branco; outras cores disponíveis por encomenda',
		uk: 'Показано синій та білий; інші кольори доступні на замовлення',
		ru: 'Показаны синий и белый; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in different colours',
		pt: 'Podem ser encomendadas noutras cores',
		uk: 'Можна замовити в інших кольорах',
		ru: 'Можно заказать в других цветах'
	},

	relatedSkus: ['BR-006']
};
