/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-008',
	slug: 'white-bead-blue-bicone-ring-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'White bead bracelet with ring and blue bicone accent',
		pt: 'Pulseira de contas brancas com anel e bicone azul',
		uk: 'Браслет з білого бісеру з кільцем та синім біконусом',
		ru: 'Браслет с кольцом из белого бисера и синего биконуса'
	},
	description: {
		en: 'A hand-woven white beaded bracelet with a matching ring, accented with blue bicone beads.',
		pt: 'Pulseira de contas brancas tecida à mão, com anel a condizer e acento em bicone azul.',
		uk: 'Браслет із білого бісеру з кільцем у комплекті та синім біконусом, сплетений вручну.',
		ru: 'Браслет из белого бисера с подходящим кольцом в комплекте и акцентом из синего биконуса, сплетённый вручную.'
	},

	price: { mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-bead-blue-bicone-ring-bracelet/1.webp',
			thumb: '/images/products/white-bead-blue-bicone-ring-bracelet/1-thumb.webp',
			width: 470,
			height: 1280,
			alt: {
				en: 'White beaded bracelet with blue bicone accent',
				pt: 'Pulseira de contas brancas com acento em bicone azul',
				uk: 'Браслет із білого бісеру та синього біконуса',
				ru: 'Браслет из белого бисера и синего биконуса'
			}
		},
		{
			src: '/images/products/white-bead-blue-bicone-ring-bracelet/2.webp',
			thumb: '/images/products/white-bead-blue-bicone-ring-bracelet/2-thumb.webp',
			width: 705,
			height: 1280,
			alt: {
				en: 'Matching ring with white beads and blue bicone accent',
				pt: 'Anel a condizer de contas brancas com acento em bicone azul',
				uk: 'Кільце з білого бісеру та синього біконуса в комплекті',
				ru: 'Кольцо из белого бисера и синего биконуса в комплекте'
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
		en: 'Seed beads, bicone bead',
		pt: 'Contas, bicone',
		uk: 'Бісер, біконус',
		ru: 'Бисер, биконус'
	},
	colours: {
		en: 'White with blue accent shown; other colours available to order',
		pt: 'Mostrada em branco com acento azul; outras cores disponíveis por encomenda',
		uk: 'Показано білий із синім акцентом; інші кольори доступні на замовлення',
		ru: 'Показан белый с синим акцентом; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-005']
};
