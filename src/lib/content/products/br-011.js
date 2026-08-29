/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-011',
	slug: 'shambhala-beaded-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Shambhala bracelet with beads',
		pt: 'Pulseira Shambhala com contas',
		uk: 'Браслет «Шамбала» з бісером',
		ru: 'Браслет «Шамбала» с бисером'
	},
	description: {
		en: 'A Shambhala-style bracelet on an adjustable sliding-knot cord, with a pearl and gold-tone bead accent.',
		pt: 'Pulseira em estilo Shambhala num cordão ajustável com nó corrediço, com realce de pérolas e contas douradas.',
		uk: 'Браслет у стилі «Шамбала» на регульованому ковзному вузлі, з акцентом із перлин і золотистих намистин.',
		ru: 'Браслет в стиле «Шамбала» на регулируемом скользящем узле, с акцентом из жемчужных и золотистых бусин.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/shambhala-beaded-bracelet/1.webp',
			thumb: '/images/products/shambhala-beaded-bracelet/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Shambhala-style beaded bracelet with a pearl and gold bead accent',
				pt: 'Pulseira em estilo Shambhala com realce de pérolas e contas douradas',
				uk: 'Браслет «Шамбала» з акцентом із перлин і золотистих намистин',
				ru: 'Браслет «Шамбала» с акцентом из жемчужных и золотистых бусин'
			}
		}
	],

	materials: { en: 'Cord, seed beads', pt: 'Cordão, contas', uk: 'Шнур, бісер', ru: 'Шнур, бисер' },
	colours: {
		en: 'Cream with pearl and gold-tone accent shown; other colours available to order',
		pt: 'Mostrada em creme com realce de pérolas e dourado; outras cores disponíveis por encomenda',
		uk: 'Показано кремовий колір із перлинним та золотистим акцентом; інші кольори доступні на замовлення',
		ru: 'Показан кремовый цвет с жемчужным и золотистым акцентом; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-007']
};
