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

	price: { mode: 'on_request' },

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

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },

	relatedSkus: ['BR-004', 'BR-003']
};
