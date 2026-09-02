/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-008',
	slug: 'irish-motif-knitted-bag',
	category: 'knitted',
	status: 'made_to_order',

	title: {
		en: 'Bag crocheted with Irish motifs',
		pt: 'Bolsa em croché com motivos irlandeses',
		uk: "Сумка, пов'язана гачком за ірландськими мотивами",
		ru: 'Сумка, связанная крючком по ирландским мотивам'
	},
	description: {
		en: 'A hand-crocheted bag composed of Irish motifs joined into a single fabric — airy patterns alongside dense textures.',
		pt: 'Bolsa feita à mão em croché, composta por motivos irlandeses unidos num único tecido — padrões arejados junto a texturas densas.',
		uk: "Сумка, пов'язана вручну гачком за ірландськими мотивами, — окремі мотиви, з'єднані в єдине полотно, де повітряні візерунки поєднуються з щільними фактурами.",
		ru: 'Сумка, связанная вручную крючком по ирландским мотивам, — отдельные мотивы, соединённые в единое полотно, где ажурные узоры сочетаются с плотными фактурами.'
	},

	price: { mode: 'from', amount: 35, typicalMax: 50, currency: 'EUR' },

	images: [
		{
			src: '/images/products/irish-motif-knitted-bag/1.webp',
			thumb: '/images/products/irish-motif-knitted-bag/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Hand-crocheted bag made of Irish motifs',
				pt: 'Bolsa feita à mão em croché com motivos irlandeses',
				uk: "Сумка, пов'язана вручну гачком з ірландських мотивів",
				ru: 'Сумка, связанная вручную крючком по ирландским мотивам'
			}
		}
	],

	materials: {
		en: 'Portuguese cotton yarn',
		pt: 'Fio de algodão português',
		uk: 'Португальська бавовняна пряжа',
		ru: 'Португальская хлопковая пряжа'
	},

	productionTime: {
		en: 'Usually 20–25 days',
		pt: 'Normalmente 20–25 dias',
		uk: 'Зазвичай 20–25 днів',
		ru: 'Обычно 20–25 дней'
	},

	relatedSkus: ['KNIT-002', 'KNIT-005']
};
