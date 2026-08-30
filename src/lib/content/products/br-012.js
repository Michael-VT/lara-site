/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-012',
	slug: 'silver-white-large-bead-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'Silver and white large bead bracelet',
		pt: 'Pulseira de contas grandes prateadas e brancas',
		uk: 'Браслет із сріблястих і білих великих намистин',
		ru: 'Браслет из серебристых и белых крупных бусин'
	},
	description: {
		en: 'A bracelet of large silvery and white beads, set off by small deep-red spacer beads.',
		pt: 'Pulseira de contas grandes prateadas e brancas, realçada por pequenas contas separadoras bordô.',
		uk: 'Браслет із великих сріблястих та білих намистин, доповнений дрібними бордовими намистинами-розділювачами.',
		ru: 'Браслет из крупных серебристых и белых бусин, дополненный мелкими бордовыми бусинами-прокладками.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/silver-white-large-bead-bracelet/1.webp',
			thumb: '/images/products/silver-white-large-bead-bracelet/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Bracelet of large silvery and white beads with small red spacers',
				pt: 'Pulseira de contas grandes prateadas e brancas com pequenos realces vermelhos',
				uk: 'Браслет із великих сріблястих та білих намистин з дрібними червоними розділювачами',
				ru: 'Браслет из крупных серебристых и белых бусин с мелкими красными прокладками'
			}
		}
	],

	materials: {
		en: 'Large silvery and white beads, small accent beads',
		pt: 'Contas grandes prateadas e brancas, pequenas contas de realce',
		uk: 'Великі сріблясті та білі намистини, дрібні намистини-акценти',
		ru: 'Крупные серебристые и белые бусины, мелкие бусины-акценты'
	},
	colours: {
		en: 'Silver, white and deep red shown; other colours available to order',
		pt: 'Mostrada em prateado, branco e bordô; outras cores disponíveis por encomenda',
		uk: 'Показано сріблястий, білий та бордовий кольори; інші кольори доступні на замовлення',
		ru: 'Показаны серебристый, белый и бордовый цвета; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-005', 'BR-006']
};
