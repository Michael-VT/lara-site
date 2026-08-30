/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-015',
	slug: 'white-rhombus-bracelet',
	category: 'bracelets',
	status: 'sold',

	title: {
		en: 'Bracelet with little white rhombuses',
		pt: 'Pulseira com losanginhos brancos',
		uk: 'Браслет із білими ромбиками',
		ru: 'Браслет белые ромбики'
	},
	description: {
		en: 'A bracelet patterned with little white rhombuses — a clean, graphic ornament.',
		pt: 'Pulseira com padrão de losanginhos brancos — um ornamento gráfico e limpo.',
		uk: 'Браслет із візерунком із білих ромбиків — чистий графічний орнамент.',
		ru: 'Браслет с узором из белых ромбиков — чистый графичный орнамент.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-rhombus-bracelet/1.webp',
			thumb: '/images/products/white-rhombus-bracelet/1-thumb.webp',
			width: 371,
			height: 1280,
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
	customisation: {
		en: 'A similar one can be made to order',
		pt: 'Um semelhante pode ser encomendado',
		uk: 'Схожий можна замовити',
		ru: 'Похожий можно заказать'
	},

	relatedSkus: ['BR-001']
};
