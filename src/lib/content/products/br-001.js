/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-001',
	slug: 'sparkling-rhombus-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Sparkling rhombus bracelet',
		pt: 'Pulseira Losango Brilhante',
		uk: 'Браслет «Сяючий ромб»',
		ru: 'Браслет «Сверкающий ромб»'
	},
	description: {
		en: 'A beaded bracelet hand-woven with a sparkling rhombus pattern.',
		pt: 'Pulseira de contas tecida à mão com um padrão de losangos brilhantes.',
		uk: 'Браслет, сплетений вручну з бісеру із сяючим ромбовидним візерунком.',
		ru: 'Браслет, сплетённый вручную из бисера с блестящим ромбовидным узором.'
	},

	price: { mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },

	images: [
		{
			src: '/images/products/sparkling-rhombus-bracelet/1.webp',
			thumb: '/images/products/sparkling-rhombus-bracelet/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Beaded bracelet with a sparkling rhombus pattern',
				pt: 'Pulseira de contas com um padrão de losangos brilhantes',
				uk: 'Браслет із бісеру з візерунком «сяючий ромб»',
				ru: 'Браслет из бисера с узором «сверкающий ромб»'
			}
		}
	],

	dimensions: {
		en: 'Length: 16 cm, clasp fastening',
		pt: 'Comprimento: 16 cm, fecho',
		uk: 'Довжина: 16 см, застібка-замок',
		ru: 'Длина: 16 см, застёжка-замок'
	},

	materials: {
		en: 'Czech and Chinese seed beads',
		pt: 'Contas checas e chinesas',
		uk: 'Чеський та китайський бісер',
		ru: 'Чешский и китайский бисер'
	},

	relatedSkus: ['BR-003']
};
