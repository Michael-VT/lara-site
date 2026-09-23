/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000021',
	slug: 'white-rhombus-bracelet',
	categories: ['bracelets', 'beadwork', 'accessories'],
	status: 'sold',

	title: {
		en: 'Bracelet with little white rhombuses',
		pt: 'Pulseira com losanginhos brancos',
		uk: 'Браслет із білими ромбиками',
		ru: 'Браслет с белыми ромбиками'
	},
	description: {
		en: 'A bracelet patterned with little white rhombuses — a clean, graphic ornament.',
		pt: 'Pulseira com padrão de losanginhos brancos — um ornamento gráfico e limpo.',
		uk: 'Браслет із візерунком із білих ромбиків — чистий графічний орнамент.',
		ru: 'Браслет с узором из белых ромбиков — чистый графичный орнамент.'
	},

	price: { mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-rhombus-bracelet/1.webp',
			thumb: '/images/products/white-rhombus-bracelet/1-thumb.webp',
			width: 941,
			height: 1672,
			alt: {
				en: 'Bracelet patterned with little white rhombuses',
				pt: 'Pulseira com padrão de losanginhos brancos',
				uk: 'Браслет із візерунком із білих ромбиків',
				ru: 'Браслет с узором из белых ромбиков'
			}
		}
	],

	colours: {
		en: 'White pattern shown',
		pt: 'Mostrado em branco',
		uk: 'Показано білий',
		ru: 'Показан белый'
	},

	dimensions: {
		en: 'Length: 16 cm, clasp fastening',
		pt: 'Comprimento: 16 cm, fecho',
		uk: 'Довжина: 16 см, застібка-замок',
		ru: 'Длина: 16 см, застёжка-замок'
	},

	customisation: {
		en: 'A similar one can be made to order',
		pt: 'Um semelhante pode ser encomendado',
		uk: 'Схожий можна замовити',
		ru: 'Похожий можно заказать'
	},

	relatedSkus: ['AAA000008']
};
