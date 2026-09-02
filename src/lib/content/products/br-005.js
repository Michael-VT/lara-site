/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-005',
	slug: 'white-silver-princess-beaded-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: '"Princess" white and silver beaded bracelet',
		pt: 'Pulseira "Princesa" em contas brancas e prateadas',
		uk: 'Браслет «Принцеса» з білого та срібного бісеру',
		ru: 'Браслет из белого и серебристого бисера «Для принцессы»'
	},
	description: {
		en: 'A hand-woven beaded bracelet in white and silver tones.',
		pt: 'Pulseira em contas brancas e prateadas, tecida à mão.',
		uk: 'Браслет, сплетений вручну з білого та срібного бісеру.',
		ru: 'Браслет, сплетённый вручную из белого и серебристого бисера.'
	},

	price: { mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-silver-princess-beaded-bracelet/1.webp',
			thumb: '/images/products/white-silver-princess-beaded-bracelet/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'White and silver beaded bracelet',
				pt: 'Pulseira em contas brancas e prateadas',
				uk: 'Браслет з білого та срібного бісеру',
				ru: 'Браслет из белого и серебристого бисера'
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

	relatedSkus: ['BR-004', 'BR-003']
};
