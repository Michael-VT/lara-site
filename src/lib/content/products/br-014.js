/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-014',
	slug: 'white-gold-rice-squares-bracelet',
	category: 'bracelets',
	status: 'sold',

	title: {
		en: 'Bracelet of white and gold rice-bead squares',
		pt: 'Pulseira de quadradinhos de contas arroz brancas e douradas',
		uk: 'Браслет із квадратиків із білого та золотистого бісеру «рис»',
		ru: 'Браслет квадратики белого-золотого риса'
	},
	description: {
		en: 'A bracelet of square sections woven from white and gold rice beads — geometric and festive.',
		pt: 'Pulseira de secções quadradas tecidas com contas arroz brancas e douradas — geométrica e festiva.',
		uk: 'Браслет із квадратних секцій, сплетених із білого та золотистого бісеру «рис», — геометричний та урочистий.',
		ru: 'Браслет из квадратных секций, сплетённых из белого и золотистого бисера-«риса», — геометричный и нарядный.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-gold-rice-squares-bracelet/1.webp',
			thumb: '/images/products/white-gold-rice-squares-bracelet/1-thumb.webp',
			width: 1280,
			height: 720,
			alt: {
				en: 'Bracelet of square sections woven from white and gold rice beads',
				pt: 'Pulseira de secções quadradas tecidas com contas arroz brancas e douradas',
				uk: 'Браслет із квадратних секцій із білого та золотистого бісеру «рис»',
				ru: 'Браслет из квадратных секций, сплетённых из белого и золотистого бисера-«риса»'
			}
		}
	],

	materials: {
		en: 'Rice beads',
		pt: 'Contas arroz',
		uk: 'Бісер «рис»',
		ru: 'Бисер «рис»'
	},
	colours: {
		en: 'White and gold shown',
		pt: 'Mostrada em branco e dourado',
		uk: 'Показано білий із золотистим',
		ru: 'Показаны белый с золотистым'
	},
	customisation: {
		en: 'A similar one can be made to order',
		pt: 'Um semelhante pode ser encomendado',
		uk: 'Схожий можна замовити',
		ru: 'Похожий можно заказать'
	},

	relatedSkus: ['BR-009', 'BR-013']
};
