/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000047',
	slug: 'red-princess-beaded-bracelet',
	categories: ['bracelets', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: 'Red bead and seed-bead "Princess" bracelet',
		pt: 'Pulseira de contas e missangas vermelhas "Princesa"',
		uk: 'Браслет з червоних намистин і бісеру «Принцеса»',
		ru: 'Браслет из красных бусин и бисера «Принцесса»'
	},
	description: {
		en: 'A bright, elegant handmade bracelet from the "Princess" collection. Rich red beads surrounded by sparkling small seed beads form a beautiful raised pattern. The interplay of beads of different sizes creates an interesting texture and gives the piece its special charm. The bracelet is woven entirely by hand, bead by bead, with love and attention to every detail. The red "Princess" makes an expressive addition to both an everyday outfit and a festive look.',
		pt: 'Uma pulseira artesanal vibrante e elegante da coleção "Princesa". Contas vermelhas intensas rodeadas por missangas pequenas e brilhantes formam um belo padrão em relevo. O entrelaçado de contas de tamanhos diferentes cria uma textura interessante e dá à peça o seu charme especial. A pulseira é tecida inteiramente à mão, conta a conta, com amor e atenção a cada detalhe. A "Princesa" vermelha é um complemento expressivo tanto para um look do dia a dia como para uma ocasião festiva.',
		uk: 'Яскравий, витончений браслет ручної роботи з колекції «Принцеса». Насичені червоні намистини, оточені блискучим дрібним бісером, утворюють красивий об\'ємний візерунок. Переплетення намистин різного розміру створює цікаву фактуру і надає виробу особливого шарму. Браслет виконано вручну, намистина за намистиною, з любов\'ю та увагою до кожної деталі. Червона «Принцеса» стане виразним доповненням як до повсякденного образу, так і до святкового.',
		ru: 'Яркий, изящный браслет ручной работы из коллекции «Принцесса». Насыщенные красные бусины, окружённые сверкающим мелким бисером, образуют красивый объёмный узор. Переплетение бусин разного размера создаёт интересную фактуру и придаёт украшению особое очарование. Браслет выполнен вручную, бусинка за бусинкой, с любовью и вниманием к каждой детали. Красная «Принцесса» станет выразительным дополнением как к повседневному наряду, так и к праздничному образу.'
	},

	price: { mode: 'fixed', amount: 8, currency: 'EUR' },

	images: [
		{
			src: '/images/products/red-princess-beaded-bracelet/1.webp',
			thumb: '/images/products/red-princess-beaded-bracelet/1-thumb.webp',
			width: 1199,
			height: 1312,
			alt: {
				en: 'Red bead and seed-bead "Princess" bracelet with an adjustable chain extender',
				pt: 'Pulseira de contas e missangas vermelhas "Princesa" com extensor de corrente ajustável',
				uk: 'Браслет з червоних намистин і бісеру «Принцеса» з регульованим ланцюжком',
				ru: 'Браслет из красных бусин и бисера «Принцесса» с регулируемой цепочкой'
			}
		}
	],

	colours: {
		en: 'Red',
		pt: 'Vermelho',
		uk: 'Червоний',
		ru: 'Красный'
	},

	materials: {
		en: 'Czech and Chinese seed beads, decorative beads, metal findings',
		pt: 'Missangas checas e chinesas, contas decorativas, acessórios metálicos',
		uk: 'Чеський і китайський бісер, декоративні намистини, металева фурнітура',
		ru: 'Чешский и китайский бисер, декоративные бусины, металлическая фурнитура'
	},

	customisation: {
		en: 'Clasp: metal lobster clasp with an adjustable chain extender',
		pt: 'Fecho: mosquetão metálico com extensor de corrente ajustável',
		uk: 'Застібка: металевий карабін з регульованим ланцюжком',
		ru: 'Застёжка: металлический карабин с удлинительной цепочкой для регулировки длины'
	}
};
