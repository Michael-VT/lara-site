/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-006',
	slug: 'large-small-bead-pearl-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Large and small bead pearl bracelet',
		pt: 'Pulseira de pérolas com contas grandes e pequenas',
		uk: 'Браслет з перлинами з великого і дрібного бісеру',
		ru: 'Браслет из крупного и мелкого бисера'
	},
	description: {
		en: 'A hand-woven bracelet combining pearl beads with gold and silver-toned seed beads.',
		pt: 'Pulseira tecida à mão que combina pérolas com contas em tons dourados e prateados.',
		uk: 'Браслет, сплетений вручну з перлин у поєднанні із золотистим та срібним бісером.',
		ru: 'Браслет, сплетённый вручную из жемчужных бусин в сочетании с золотистым и серебристым бисером.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/large-small-bead-pearl-bracelet/1.webp',
			thumb: '/images/products/large-small-bead-pearl-bracelet/1-thumb.webp',
			width: 453,
			height: 1280,
			alt: {
				en: 'Pearl bracelet with large and small beads',
				pt: 'Pulseira de pérolas com contas grandes e pequenas',
				uk: 'Браслет з перлинами з великого і дрібного бісеру',
				ru: 'Браслет из крупного и мелкого бисера'
			}
		},
		{
			src: '/images/products/large-small-bead-pearl-bracelet/2.webp',
			thumb: '/images/products/large-small-bead-pearl-bracelet/2-thumb.webp',
			width: 406,
			height: 1280,
			alt: {
				en: 'Pearl bracelet with large and small beads, second view',
				pt: 'Pulseira de pérolas com contas grandes e pequenas, outra vista',
				uk: 'Браслет з перлинами з великого і дрібного бісеру, інший ракурс',
				ru: 'Браслет из крупного и мелкого бисера, другой ракурс'
			}
		}
	],

	materials: {
		en: 'Pearl and seed beads',
		pt: 'Pérolas e contas',
		uk: 'Перлини та бісер',
		ru: 'Жемчужные бусины и бисер'
	},
	colours: {
		en: 'White and gold shown; other colours available to order',
		pt: 'Mostrada em branco e dourado; outras cores disponíveis por encomenda',
		uk: 'Показано білий із золотистим; інші кольори доступні на замовлення',
		ru: 'Показан белый с золотистым; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-004', 'BR-005']
};
