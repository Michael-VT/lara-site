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
		en: 'A hand-woven white beaded bracelet with an attached ring and a blue bicone bead accent.',
		ru: 'Браслет из белого бисера с кольцом и акцентом из синего биконуса, сплетённый вручную.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-bead-blue-bicone-ring-bracelet/1.webp',
			thumb: '/images/products/white-bead-blue-bicone-ring-bracelet/1-thumb.webp',
			width: 780,
			height: 1280,
			alt: {
				en: 'White beaded bracelet with ring and blue bicone accent',
				ru: 'Браслет с кольцом из белого бисера и синего биконуса'
			}
		},
		{
			src: '/images/products/white-bead-blue-bicone-ring-bracelet/2.webp',
			thumb: '/images/products/white-bead-blue-bicone-ring-bracelet/2-thumb.webp',
			width: 649,
			height: 1280,
			alt: {
				en: 'White beaded bracelet with ring and blue bicone accent, second view',
				ru: 'Браслет с кольцом из белого бисера и синего биконуса, другой ракурс'
			}
		}
	],

	materials: { en: 'Seed beads, bicone bead', ru: 'Бисер, биконус' },
	colours: {
		en: 'White with blue accent shown; other colours available to order',
		ru: 'Показан белый с синим акцентом; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-005']
};
