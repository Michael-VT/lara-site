/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-007',
	slug: 'red-clear-shambhala-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Red and clear shambhala bracelet',
		pt: 'Pulseira shambhala vermelha e transparente',
		uk: 'Браслет шамбала з червоних та прозорих намистин',
		ru: 'Браслет шамбала из красных и прозрачных бусин'
	},
	description: {
		en: 'A hand-woven shambhala-style bracelet made from red and clear beads.',
		pt: 'Pulseira em estilo shambhala, tecida à mão com contas vermelhas e transparentes.',
		uk: 'Браслет у стилі шамбала, сплетений вручну з червоних та прозорих намистин.',
		ru: 'Браслет в стиле шамбала, сплетённый вручную из красных и прозрачных бусин.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/red-clear-shambhala-bracelet/1.webp',
			thumb: '/images/products/red-clear-shambhala-bracelet/1-thumb.webp',
			width: 1280,
			height: 790,
			alt: {
				en: 'Shambhala bracelet made from red and clear beads',
				pt: 'Pulseira shambhala de contas vermelhas e transparentes',
				uk: 'Браслет шамбала з червоних та прозорих намистин',
				ru: 'Браслет шамбала из красных и прозрачных бусин'
			}
		},
		{
			src: '/images/products/red-clear-shambhala-bracelet/2.webp',
			thumb: '/images/products/red-clear-shambhala-bracelet/2-thumb.webp',
			width: 1280,
			height: 1199,
			alt: {
				en: 'Shambhala bracelet made from red and clear beads, another angle',
				pt: 'Pulseira shambhala de contas vermelhas e transparentes, outro ângulo',
				uk: 'Браслет шамбала з червоних та прозорих намистин, інший ракурс',
				ru: 'Браслет шамбала из красных и прозрачных бусин, другой ракурс'
			}
		}
	],

	materials: { en: 'Beads', pt: 'Contas', uk: 'Намистини', ru: 'Бусины' },
	colours: {
		en: 'Red and clear shown; other colours available to order',
		pt: 'Mostrada em vermelho e transparente; outras cores disponíveis por encomenda',
		uk: 'Показано червоний із прозорим; інші кольори доступні на замовлення',
		ru: 'Показан красный с прозрачным; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-011']
};
