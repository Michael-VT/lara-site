/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-008',
	slug: 'irish-motif-knitted-bag',
	category: 'bags',
	status: 'available',

	title: {
		en: 'Bag knitted with Irish motifs',
		pt: 'Bolsa tricotada com motivos irlandeses',
		uk: "Сумка, пов'язана за ірландськими мотивами",
		ru: 'Сумка, связанная по ирландским мотивам'
	},
	description: {
		en: 'A hand-knitted bag composed of Irish motifs joined into a single fabric — airy patterns alongside dense textures.',
		pt: 'Bolsa tricotada à mão, composta por motivos irlandeses unidos num único tecido — padrões arejados junto a texturas densas.',
		uk: "Сумка, пов'язана вручну за ірландськими мотивами, — окремі мотиви, з'єднані в єдине полотно, де повітряні візерунки поєднуються з щільними фактурами.",
		ru: 'Сумка, связанная вручную по ирландским мотивам, — отдельные мотивы, соединённые в единое полотно, где ажурные узоры сочетаются с плотными фактурами.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/irish-motif-knitted-bag/1.webp',
			thumb: '/images/products/irish-motif-knitted-bag/1-thumb.webp',
			width: 720,
			height: 1280,
			alt: {
				en: 'Hand-knitted bag made of Irish motifs',
				pt: 'Bolsa tricotada à mão com motivos irlandeses',
				uk: "Сумка, пов'язана вручну з ірландських мотивів",
				ru: 'Сумка, связанная вручную по ирландским мотивам'
			}
		}
	],

	relatedSkus: ['KNIT-002', 'KNIT-005']
};
