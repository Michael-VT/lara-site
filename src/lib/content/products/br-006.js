/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000012',
	slug: 'large-small-bead-pearl-bracelet',
	categories: ['bracelets', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: '"Sarah" large and small bead bracelet',
		pt: 'Pulseira de contas grandes e pequenas "Sarah"',
		uk: 'Браслет з великого і дрібного бісеру «Сара»',
		ru: 'Браслет из крупных и мелких бусин «Сара»'
	},
	description: {
		en: 'A hand-woven bracelet combining pearl beads with gold and silver-toned seed beads.',
		pt: 'Pulseira tecida à mão que combina pérolas com contas em tons dourados e prateados.',
		uk: 'Браслет, сплетений вручну з перлин у поєднанні із золотистим та срібним бісером.',
		ru: 'Браслет, сплетённый вручную из жемчужных бусин в сочетании с золотистым и серебристым бисером.'
	},

	price: { mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },

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
		}
	],

	dimensions: {
		en: 'Length: 16 cm, clasp fastening',
		pt: 'Comprimento: 16 cm, fecho',
		uk: 'Довжина: 16 см, застібка-замок',
		ru: 'Длина: 16 см, застёжка-замок'
	},

	materials: {
		en: 'Beads 4mm, 6mm, 8mm, and small Czech seed beads',
		pt: 'Contas de 4mm, 6mm, 8mm, e miçangas checas pequenas',
		uk: 'Бусини 4мм, 6мм, 8мм, та дрібний чеський бісер',
		ru: 'Бусины 4 мм, 6 мм, 8 мм и мелкий чешский бисер'
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

	relatedSkus: ['AAA000010', 'AAA000011']
};
