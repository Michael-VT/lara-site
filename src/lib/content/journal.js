/**
 * @typedef {
 *   | { type: 'p', text: import('$lib/schemas/product.js').LocalizedText }
 *   | { type: 'h2', text: import('$lib/schemas/product.js').LocalizedText }
 *   | {
 *       type: 'img',
 *       src: string,
 *       width: number,
 *       height: number,
 *       alt: import('$lib/schemas/product.js').LocalizedText,
 *       caption?: import('$lib/schemas/product.js').LocalizedText,
 *       linkPath?: string
 *     }
 *   | { type: 'link', path: string, text: import('$lib/schemas/product.js').LocalizedText }
 * } JournalBlock
 *
 * @typedef {object} JournalPost
 * @property {string} slug
 * @property {string} tagKey - key of the m.* message function used as the tag chip label (journal_tag*)
 * @property {import('$lib/schemas/product.js').LocalizedText} title
 * @property {import('$lib/schemas/product.js').LocalizedText} excerpt
 * @property {string} date - ISO date (YYYY-MM-DD), formatted per-locale at render time
 * @property {number} readMinutes
 * @property {boolean} [featured] - shown as the lead banner; excluded from the grid below it
 * @property {JournalBlock[]} [body] - full article content; when present the card links to /journal/[slug]/
 */

/**
 * Launch content for the Journal — written in the same voice as the rest of
 * the site's copy. Replace with the owner's own posts over time; the page
 * works the same either way.
 * @type {JournalPost[]}
 */
export const journalPosts = [
	{
		slug: 'brown-lace-crochet-bag',
		tagKey: 'journal_tagWorkshop',
		date: '2026-09-24',
		readMinutes: 4,
		title: {
			en: 'A small bag: a new idea, a new experience',
			pt: 'Uma bolsa pequena: uma ideia nova, uma experiência nova',
			ru: 'Маленькая сумочка — новая идея и новый опыт',
			uk: 'Маленька сумочка: нова ідея, новий досвід'
		},
		excerpt: {
			en: 'Yarn, a lace pattern, a lining, and a gold chain with heart-shaped clasps — how one idea became a new little bag.',
			pt: 'Fio, um padrão rendado, forro e uma corrente dourada com fechos em coração — como uma ideia se tornou numa nova bolsa pequena.',
			ru: 'Нитки, ажурный узор, подкладка и золотистая цепочка с карабинами-сердечками — как из одной идеи получилась новая маленькая сумочка.',
			uk: 'Нитки, ажурний візерунок, підкладка і золотистий ланцюжок із карабінами-сердечками — як з однієї ідеї вийшла нова маленька сумочка.'
		},
		body: [
			{
				type: 'p',
				text: {
					en: "I've already crocheted several bags, and each one turned out completely different — in style, colour and size.",
					pt: 'Já fiz várias bolsas em croché, e cada uma ficou completamente diferente — no estilo, na cor e no tamanho.',
					ru: 'Я уже связала несколько сумочек крючком, и каждая из них получилась совершенно особенной — разной по стилю, цвету и размеру.',
					uk: "Я вже пов'язала кілька сумочок гачком, і кожна з них вийшла зовсім особливою — різною за стилем, кольором і розміром."
				}
			},
			{
				type: 'p',
				text: {
					en: "But I wanted to try something new again — something I hadn't made before. This time the idea was a **small, light bag that doesn't weigh you down**, just big enough for a phone, a few notes or cards.",
					pt: 'Mas voltei a querer experimentar algo novo — algo que ainda não tinha feito. Desta vez surgiu a ideia de fazer uma **bolsa pequena e leve, que não pesa**, com espaço suficiente para um telemóvel, umas notas ou cartões.',
					ru: 'Но мне снова захотелось попробовать что-нибудь новое — такое, чего я раньше ещё не делала. На этот раз появилась идея связать **маленькую, лёгкую и негромоздкую сумочку**, в которую можно положить телефон, несколько купюр или карточек.',
					uk: "Але мені знову захотілося спробувати щось нове — те, чого я раніше ще не робила. Цього разу з'явилася ідея зв'язати **маленьку, легку і негучну сумочку**, в яку можна покласти телефон, кілька купюр або карток."
				}
			},
			{
				type: 'p',
				text: {
					en: 'I found an interesting pattern — and decided to give it a try.',
					pt: 'Encontrei um padrão interessante — e decidi experimentar.',
					ru: 'Нашла интересную схему — и решила попробовать.',
					uk: 'Знайшла цікаву схему — і вирішила спробувати.'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'Choosing the yarn',
					pt: 'A escolha do fio',
					ru: 'Выбор ниток',
					uk: 'Вибір ниток'
				}
			},
			{
				type: 'p',
				text: {
					en: 'For this bag I chose **Puppets Eldorado — 100% mercerised cotton** in a beautiful dark brown shade.',
					pt: 'Para esta bolsa escolhi **Puppets Eldorado — 100% algodão mercerizado**, num bonito tom castanho-escuro.',
					ru: 'Для сумочки я выбрала **Puppets Eldorado — 100% мерсеризованный хлопок** красивого тёмно-коричневого оттенка.',
					uk: 'Для сумочки я обрала **Puppets Eldorado — 100% мерсеризовану бавовну** гарного темно-коричневого відтінку.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I crocheted with a **1.5 mm hook**, and the whole bag took about **50 g of yarn**.',
					pt: 'Trabalhei com uma agulha **n.º 1,5**, e a bolsa toda levou cerca de **50 g de fio**.',
					ru: 'Вязала крючком **№ 1,5**, а на всю сумочку ушло примерно **50 г ниток**.',
					uk: "В'язала гачком **№ 1,5**, а на всю сумочку пішло приблизно **50 г ниток**."
				}
			},
			{
				type: 'p',
				text: {
					en: 'The thread is thin and pleasant to work with, and the lace pattern comes out neat and expressive.',
					pt: 'O fio é fino e agradável de trabalhar, e o padrão rendado fica bem definido e expressivo.',
					ru: 'Нить тонкая и приятная в работе, а ажурный узор из неё получается аккуратным и выразительным.',
					uk: 'Нитка тонка і приємна в роботі, а ажурний візерунок із неї виходить акуратним і виразним.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/01-yarn-front.webp',
				width: 1280,
				height: 1229,
				alt: {
					en: 'Puppets Eldorado yarn',
					pt: 'Fio Puppets Eldorado',
					ru: 'Нитки Puppets Eldorado',
					uk: 'Нитки Puppets Eldorado'
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/02-yarn-details.webp',
				width: 1280,
				height: 1229,
				alt: {
					en: 'Yarn label details',
					pt: 'Detalhes da etiqueta do fio',
					ru: 'Информация на этикетке ниток',
					uk: 'Інформація на етикетці ниток'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'The crochet process',
					pt: 'O processo de croché',
					ru: 'Процесс вязания',
					uk: "Процес в'язання"
				}
			},
			{
				type: 'p',
				text: {
					en: "The bag came together quite easily and quickly. Though the pattern itself needs attention — get distracted for a moment and it's easy to miss a stitch.",
					pt: 'A bolsa foi feita com relativa facilidade e rapidez. Mas o padrão exige atenção: basta distrair-se um pouco para saltar um ponto.',
					ru: 'Вязалась сумочка довольно легко и быстро. Правда, сам узор требует внимательности: стоит немного отвлечься — и можно пропустить нужную петлю.',
					uk: "В'язалася сумочка досить легко і швидко. Правда, сам візерунок вимагає уважності: варто трохи відволіктися — і можна пропустити потрібну петлю."
				}
			},
			{
				type: 'p',
				text: {
					en: 'But watching a pattern, and then the shape of the future bag, slowly appear out of plain thread was fascinating.',
					pt: 'Mas foi fascinante ver o padrão, e depois a forma da futura bolsa, a surgir aos poucos a partir do fio simples.',
					ru: 'Но наблюдать, как из обычной нити постепенно появляется узор, а затем и сама форма будущей сумочки, было очень интересно.',
					uk: "Але спостерігати, як зі звичайної нитки поступово з'являється візерунок, а потім і сама форма майбутньої сумочки, було дуже цікаво."
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/03-crochet-process.webp',
				width: 1536,
				height: 1489,
				alt: {
					en: 'The bag mid-crochet',
					pt: 'A bolsa a meio do croché',
					ru: 'Сумочка в процессе вязания',
					uk: "Сумочка в процесі в'язання"
				},
				caption: {
					en: 'The bag mid-work — the lace pattern is gradually taking shape.',
					pt: 'A bolsa a meio do trabalho — o padrão rendado vai ganhando forma pouco a pouco.',
					ru: 'Сумочка в процессе работы — постепенно ажурный узор начинает приобретать форму.',
					uk: 'Сумочка в процесі роботи — поступово ажурний візерунок починає набувати форми.'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'The lining',
					pt: 'O forro',
					ru: 'Подкладка',
					uk: 'Підкладка'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Since the pattern turned out quite open, with fairly large holes, I decided the inside definitely needed a **thin lining**.',
					pt: 'Como o padrão ficou bastante aberto, com furos relativamente grandes, decidi que precisava mesmo de um **forro fino** por dentro.',
					ru: 'Поскольку узор получился ажурным, с довольно большими отверстиями, я решила обязательно сделать внутри **тонкую подкладку**.',
					uk: "Оскільки візерунок вийшов ажурним, з доволі великими отворами, я вирішила обов'язково зробити всередині **тонку підкладку**."
				}
			},
			{
				type: 'p',
				text: {
					en: 'At first I thought of using a dark fabric, brown for example. But it turned out that on a dark background, the pretty crochet pattern almost disappears.',
					pt: 'No início pensei em usar um tecido escuro, castanho por exemplo. Mas percebi que, sobre um fundo escuro, o bonito desenho do croché quase desaparece.',
					ru: 'Сначала думала использовать тёмную ткань, например коричневую. Но оказалось, что на тёмном фоне красивый рисунок вязания практически теряется.',
					uk: 'Спочатку думала використати темну тканину, наприклад коричневу. Але виявилося, що на темному тлі гарний малюнок в’язання практично губиться.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'So I chose a **light-coloured fabric** instead. And that turned out to be the right call — against it, the lace pattern became much more visible.',
					pt: 'Por isso escolhi um **tecido claro**. E foi a decisão certa: contra ele, o padrão rendado ficou muito mais visível.',
					ru: 'Поэтому я выбрала **светлую ткань**. И это оказалось правильным решением: на её фоне ажурный рисунок стал намного заметнее.',
					uk: 'Тому я обрала **світлу тканину**. І це виявилося правильним рішенням: на її тлі ажурний малюнок став набагато помітнішим.'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'The chain and the unusual clasps',
					pt: 'A corrente e os fechos pouco comuns',
					ru: 'Цепочка и необычные карабины',
					uk: 'Ланцюжок і незвичайні карабіни'
				}
			},
			{
				type: 'p',
				text: {
					en: 'For the strap I wanted to use a **gold-toned chain**. It goes well with the dark brown of the bag and makes it a little more dressed-up.',
					pt: 'Para a alça quis usar uma **corrente dourada**. Combina bem com o castanho-escuro da bolsa e dá-lhe um toque mais elegante.',
					ru: 'Для ремешка мне захотелось использовать **золотистую цепочку**. Она хорошо сочетается с тёмно-коричневым цветом сумочки и делает её немного наряднее.',
					uk: 'Для ремінця мені захотілося використати **золотистий ланцюжок**. Він добре поєднується з темно-коричневим кольором сумочки і робить її трохи наряднішою.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I especially liked the heart-shaped clasps. They turned out to be not only pretty, but also very practical.',
					pt: 'Gostei especialmente dos fechos em forma de coração. Além de bonitos, revelaram-se muito práticos.',
					ru: 'Особенно мне понравились карабины в форме сердечек. Они оказались не только красивыми, но и очень удобными.',
					uk: 'Особливо мені сподобалися карабіни у формі сердечок. Вони виявилися не тільки гарними, а й дуже зручними.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The chain sometimes twists, and a clasp like this spins freely and helps it untwist. Thanks to that, the strap sits neatly and evenly on the shoulder.',
					pt: 'A corrente às vezes torce-se, e um fecho assim roda livremente e ajuda-a a desenrolar. Graças a isso, a alça assenta bem e direita no ombro.',
					ru: 'Цепочка иногда перекручивается, а такой карабин свободно вращается и помогает ей расправляться. Благодаря этому ремешок красиво и ровно ложится на плечо.',
					uk: 'Ланцюжок іноді перекручується, а такий карабін вільно обертається і допомагає йому розправитися. Завдяки цьому ремінець гарно і рівно лягає на плече.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/04-chain-and-clasps.webp',
				width: 1280,
				height: 1229,
				alt: {
					en: 'Gold chain and heart-shaped clasps',
					pt: 'Corrente dourada e fechos em forma de coração',
					ru: 'Золотистая цепочка и карабины-сердечки',
					uk: 'Золотистий ланцюжок і карабіни-сердечка'
				}
			},
			{
				type: 'h2',
				text: {
					en: "And here's what came out of it!",
					pt: 'E foi assim que ficou!',
					ru: 'И вот что получилось!',
					uk: 'І ось що вийшло!'
				}
			},
			{
				type: 'p',
				text: {
					en: "Once I'd put all the pieces together — added the lining, the clasp with its little pearl bead, and the chain — the bag finally had its finished look.",
					pt: 'Depois de juntar todas as peças — o forro, o fecho com a pequena pérola e a corrente — a bolsa ganhou finalmente o seu aspeto acabado.',
					ru: 'Когда я соединила все детали, добавила подкладку, застёжку с жемчужной бусинкой и цепочку, сумочка наконец приобрела законченный вид.',
					uk: "Коли я з'єднала всі деталі, додала підкладку, застібку з перлинкою і ланцюжок, сумочка нарешті набула завершеного вигляду."
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/05-finished-bag.webp',
				width: 1145,
				height: 1374,
				alt: {
					en: 'The finished brown bag',
					pt: 'A bolsa castanha terminada',
					ru: 'Готовая коричневая сумочка',
					uk: 'Готова коричнева сумочка'
				}
			},
			{
				type: 'p',
				text: {
					en: "I'm really happy with how it turned out.",
					pt: 'Gostei mesmo do resultado.',
					ru: 'Мне очень понравился результат.',
					uk: 'Мені дуже сподобався результат.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The bag came out **light, small and easy to carry** — exactly what I wanted. Enough room for a phone, a few cards or a little cash, just the essentials.',
					pt: 'A bolsa ficou **leve, pequena e prática** — exatamente como eu queria. Cabe um telemóvel, uns cartões ou algum dinheiro, só o essencial.',
					ru: 'Сумочка получилась **лёгкой, небольшой и удобной** — именно такой, какую я и хотела. В неё можно положить телефон, карточки или немного наличных и взять с собой самое необходимое.',
					uk: 'Сумочка вийшла **легкою, невеликою і зручною** — саме такою, якою я й хотіла. У неї можна покласти телефон, картки або трохи готівки і взяти з собою найнеобхідніше.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I especially love the combination of dark brown cotton, the light lining, the gold chain and the tiny pearl detail.',
					pt: 'E adoro especialmente a combinação do algodão castanho-escuro, do forro claro, da corrente dourada e do pequeno detalhe em pérola.',
					ru: 'А ещё мне особенно нравится сочетание тёмно-коричневого хлопка, светлой подкладки, золотистой цепочки и маленькой жемчужной детали.',
					uk: 'А ще мені особливо подобається поєднання темно-коричневої бавовни, світлої підкладки, золотистого ланцюжка і маленької перлинової деталі.'
				}
			},
			{
				type: 'p',
				text: {
					en: "And the best part — I tried making something I'd never made before, once again.",
					pt: 'E o melhor de tudo — voltei a experimentar fazer algo que nunca tinha feito.',
					ru: 'И самое приятное — я снова попробовала сделать то, чего раньше никогда не делала.',
					uk: 'І найприємніше — я знову спробувала зробити те, чого раніше ніколи не робила.'
				}
			},
			{
				type: 'p',
				text: {
					en: "I think that's exactly why I love handmade work: **one new idea turns into a thing that didn't exist just yesterday.**",
					pt: 'Acho que é exatamente por isso que adoro o trabalho manual: **uma ideia nova transforma-se numa peça que ontem ainda não existia.**',
					ru: 'Наверное, именно за это я и люблю рукоделие: **одна новая идея превращается в вещь, которой ещё вчера не существовало.**',
					uk: 'Мабуть, саме за це я й люблю рукоділля: **одна нова ідея перетворюється на річ, якої ще вчора не існувало.**'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The bag is ready 🤎',
					pt: 'A bolsa está pronta 🤎',
					ru: 'Сумочка готова 🤎',
					uk: 'Сумочка готова 🤎'
				}
			},
			{
				type: 'p',
				text: {
					en: 'You can see photos, details and availability of this bag in the catalogue.',
					pt: 'Pode ver fotografias, características e disponibilidade desta bolsa no catálogo.',
					ru: 'Посмотреть фотографии, характеристики и наличие этой сумочки можно в галерее.',
					uk: 'Переглянути фотографії, характеристики та наявність цієї сумочки можна в каталозі.'
				}
			},
			{
				type: 'link',
				path: '/products/brown-lace-crochet-bag/',
				text: {
					en: 'View the bag →',
					pt: 'Ver a bolsa →',
					ru: 'Посмотреть сумочку →',
					uk: 'Переглянути сумочку →'
				}
			}
		]
	},
	{
		slug: 'beaded-mini-coin-purses',
		tagKey: 'journal_tagWorkshop',
		date: '2026-09-24',
		readMinutes: 5,
		featured: true,
		title: {
			en: 'My little beaded coin purses',
			pt: 'As minhas pequenas bolsas-moedeiro de contas',
			ru: 'Мои маленькие сумочки-монетницы',
			uk: 'Мої маленькі сумочки-гаманці з бісеру'
		},
		excerpt: {
			en: 'Beads, a fishing line strong enough for a 15 kg catch, and a growing collection of tiny purses — how one photo online turned into a whole family of colours.',
			pt: 'Contas, um fio de pesca resistente até 15 kg e uma coleção cada vez maior de bolsinhas — como uma fotografia na internet se tornou numa família inteira de cores.',
			ru: 'Бисер, рыболовная леска на 15 кг и целая растущая коллекция маленьких сумочек — как одна фотография в интернете превратилась в семью разных цветов.',
			uk: 'Бісер, риболовна волосінь на 15 кг і ціла зростаюча колекція маленьких сумочок — як одна фотографія в інтернеті перетворилася на родину різних кольорів.'
		},
		body: [
			{
				type: 'p',
				text: {
					en: 'One day I saw a photo online of a tiny beaded coin purse — and I got completely hooked on the idea of making a little masterpiece like that myself.',
					pt: 'Um dia vi na internet uma fotografia de uma pequena bolsa-moedeiro de contas — e fiquei completamente apaixonada pela ideia de fazer sozinha uma pequena obra-prima assim.',
					ru: 'Однажды я увидела в интернете фотографию маленькой сумочки-монетницы из бусин — и загорелась идеей самой сделать такой маленький шедевр.',
					uk: 'Одного разу я побачила в інтернеті фотографію маленької сумочки-гаманця з бісеру — і загорілася ідеєю самій зробити такий маленький шедевр.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'It was tiny, but so unusual and charming that I wanted to try it right away.',
					pt: 'Era mesmo minúscula, mas tão pouco comum e tão querida que quis experimentar logo.',
					ru: 'Она была совсем крошечной, но такой необычной и милой, что мне сразу захотелось попробовать.',
					uk: 'Вона була зовсім крихітною, але такою незвичною і милою, що мені відразу захотілося спробувати.'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'How it all began',
					pt: 'Como tudo começou',
					ru: 'С чего всё началось',
					uk: 'З чого все почалося'
				}
			},
			{
				type: 'p',
				text: {
					en: 'For the purse I needed 6 mm beads, a 5 cm clasp frame, two carabiners, and fishing line.',
					pt: 'Para a bolsa precisei de contas com 6 mm de diâmetro, um fecho de 5 cm, dois mosquetões e fio de nylon.',
					ru: 'Для сумочки мне понадобились бусины диаметром 6 мм, фермуар 5 см, два карабина и леска.',
					uk: 'Для сумочки мені знадобилися намистини діаметром 6 мм, застібка 5 см, два карабіни і волосінь.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I found the beads and the clasp frame fairly quickly, but the fishing line turned into a real hunt.',
					pt: 'Encontrei as contas e o fecho bastante depressa, mas com o fio de nylon houve um contratempo.',
					ru: 'Бусины и фермуар я нашла довольно быстро, а вот с леской вышла заминка.',
					uk: 'Намистини і застібку я знайшла досить швидко, а от із волосінню вийшла заминка.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I bought line about 0.5 mm thick from several different shops and tried a few options, but the perfect one turned out to be sold… in a fishing tackle shop!',
					pt: 'Comprei fio com cerca de 0,5 mm de espessura em várias lojas, experimentei diferentes opções, mas o que serviu perfeitamente foi vendido... numa loja de pesca!',
					ru: 'Я покупала леску толщиной около 0,5 мм в разных магазинах, пробовала разные варианты, но идеально подошла леска, которая продавалась… в рыболовном магазине!',
					uk: 'Я купувала волосінь товщиною близько 0,5 мм у різних магазинах, пробувала різні варіанти, але ідеально підійшла волосінь, яка продавалася… в риболовному магазині!'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Yes, that line can hold a fish weighing up to 15 kg! ))',
					pt: 'Sim, com esse fio pode pescar-se peixe até 15 kg! ))',
					ru: 'Да, на эту леску можно ловить рыбу весом до 15 кг! ))',
					uk: 'Так, на цю волосінь можна ловити рибу вагою до 15 кг! ))'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And for the purse, it was, of course, perfect! 😊',
					pt: 'E para a bolsa, claro, também serviu na perfeição! 😊',
					ru: 'Ну и для сумочки она, конечно, подошла! 😊',
					uk: 'Ну а для сумочки вона, звісно ж, підійшла! 😊'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'And the process began…',
					pt: 'E o processo começou…',
					ru: 'И пошёл процесс…',
					uk: 'І почався процес…'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I started weaving the first purse.',
					pt: 'Comecei a tecer a primeira bolsa.',
					ru: 'Начала плести первую сумочку.',
					uk: 'Почала плести першу сумочку.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Bead by bead, row by row — and slowly, out of separate pearly beads, the shape of the future coin purse began to appear.',
					pt: 'Conta a conta, fiada a fiada — e aos poucos, a partir de contas nacaradas soltas, começou a aparecer a forma da futura bolsa-moedeiro.',
					ru: 'Бусинка за бусинкой, ряд за рядом — и постепенно из отдельных жемчужных бусин начала появляться форма будущей монетницы.',
					uk: "Намистинка за намистинкою, ряд за рядом — і поступово з окремих перламутрових намистин почала з'являтися форма майбутнього гаманця."
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/01-first-white-purse.webp',
				linkPath: '/products/white-beaded-coin-purse/',
				width: 1152,
				height: 1536,
				alt: {
					en: 'White beaded coin purse mid-weave',
					pt: 'Bolsa-moedeiro branca a meio da tecelagem',
					ru: 'Белая сумочка-монетница в процессе плетения',
					uk: 'Біла сумочка-гаманець у процесі плетіння'
				}
			},
			{
				type: 'p',
				text: {
					en: "I really loved the process itself. At first it's hard to imagine what the finished piece will look like, but with every new row the purse becomes more and more recognizable.",
					pt: 'Gostei imenso do próprio processo. No início é difícil imaginar como vai ficar a peça terminada, mas a cada nova fiada a bolsa torna-se cada vez mais reconhecível.',
					ru: 'Мне очень нравился сам процесс. Сначала ещё трудно представить, какой получится готовая вещь, но с каждым новым рядом сумочка становится всё заметнее.',
					uk: 'Мені дуже подобався сам процес. Спочатку ще важко уявити, якою вийде готова річ, але з кожним новим рядом сумочка стає все помітнішою.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'You can also clearly see the fishing line in the photo — the thread that everything is woven onto.',
					pt: 'Na fotografia também se vê bem o próprio fio de nylon, sobre o qual assenta toda a tecelagem.',
					ru: 'На фотографии хорошо видно и саму леску, на которой держится всё плетение.',
					uk: 'На фотографії добре видно і саму волосінь, на якій тримається все плетіння.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/02-line-closeup.webp',
				linkPath: '/products/white-beaded-coin-purse/',
				width: 1152,
				height: 1536,
				alt: {
					en: 'Close-up of the white purse and the fishing line',
					pt: 'Pormenor da bolsa branca e do fio de nylon',
					ru: 'Плетение белой сумочки и леска крупным планом',
					uk: 'Плетіння білої сумочки і волосінь зблизька'
				}
			},
			{
				type: 'p',
				text: {
					en: 'All that was left was to finish the weaving carefully and attach the small metal clasp frame.',
					pt: 'Faltava apenas terminar a tecelagem com cuidado e uni-la ao pequeno fecho metálico.',
					ru: 'Оставалось аккуратно закончить плетение и соединить его с маленьким металлическим фермуаром.',
					uk: "Залишалося акуратно закінчити плетіння і з'єднати його з маленькою металевою застібкою."
				}
			},
			{
				type: 'p',
				text: {
					en: 'And once the first purse started coming together, I already wanted to try something else.',
					pt: 'E quando a primeira bolsa começou a ficar bem, já me apetecia experimentar outra coisa.',
					ru: 'А когда первая сумочка начала получаться, мне уже захотелось попробовать что-нибудь ещё.',
					uk: 'А коли перша сумочка почала виходити, мені вже захотілося спробувати щось інше.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Why make only a white one?',
					pt: 'Porque fazer só uma branca?',
					ru: 'Почему обязательно делать только белую?',
					uk: "Чому обов'язково робити тільки білу?"
				}
			},
			{
				type: 'p',
				text: {
					en: 'You can mix different colours after all!',
					pt: 'Afinal dá para misturar cores diferentes!',
					ru: 'Можно ведь смешать разные цвета!',
					uk: 'Адже можна змішати різні кольори!'
				}
			},
			{
				type: 'p',
				text: {
					en: 'That’s how the next one appeared — cheerful and colourful.',
					pt: 'Assim surgiu a seguinte — alegre e colorida.',
					ru: 'Так появилась следующая — весёлая и разноцветная.',
					uk: "Так з'явилася наступна — весела і різнокольорова."
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/03-colorful-in-progress.webp',
				linkPath: '/products/colorful-beaded-bag-and-bracelet-set/',
				width: 1536,
				height: 1152,
				alt: {
					en: 'Colourful beaded coin purse in progress',
					pt: 'Bolsa-moedeiro colorida em processo',
					ru: 'Разноцветная сумочка-монетница в процессе работы',
					uk: 'Різнокольорова сумочка-гаманець у процесі роботи'
				}
			},
			{
				type: 'p',
				text: {
					en: "And that's when, I think, it really began. 😊",
					pt: 'E foi aí, acho eu, que tudo começou a sério. 😊',
					ru: 'И вот тут, кажется, всё и началось по-настоящему. 😊',
					uk: 'І ось тут, здається, усе й почалося по-справжньому. 😊'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I wanted to make more and more of them, try different beads, and see just how differently the very same little purse could look.',
					pt: 'Apeteceu-me fazer mais e mais, experimentar contas diferentes e ver como a mesma pequena bolsa pode ficar tão diferente.',
					ru: 'Мне захотелось делать их ещё и ещё, пробовать разные бусины и смотреть, насколько по-разному может выглядеть одна и та же маленькая сумочка.',
					uk: 'Мені захотілося робити їх ще і ще, пробувати різний бісер і дивитися, наскільки по-різному може виглядати та сама маленька сумочка.'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'My little collection',
					pt: 'A minha pequena coleção',
					ru: 'Моя маленькая коллекция',
					uk: 'Моя маленька колекція'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The colourful one turned out really cheerful — it mixed white, pink, yellow, turquoise, red, grey and other little beads.',
					pt: 'A colorida ficou muito alegre — misturaram-se contas brancas, rosa, amarelas, turquesa, vermelhas, cinzentas e outras.',
					ru: 'Разноцветная получилась очень весёлой — в ней смешались белые, розовые, жёлтые, бирюзовые, красные, серые и другие бусинки.',
					uk: 'Різнокольорова вийшла дуже веселою — у ній змішалися білі, рожеві, жовті, бірюзові, червоні, сірі та інші намистини.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And once I added a handle made of the same colourful beads, plus the carabiners, the purse felt completely finished.',
					pt: 'E quando lhe juntei uma alça feita com as mesmas contas coloridas e os mosquetões, a bolsa ficou completamente terminada.',
					ru: 'А когда я добавила ручку из таких же разноцветных бусин и карабины, сумочка стала совсем законченной.',
					uk: 'А коли я додала ручку з таких самих різнокольорових намистин і карабіни, сумочка стала зовсім завершеною.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/04-colorful-finished.webp',
				linkPath: '/products/colorful-beaded-bag-and-bracelet-set/',
				width: 1231,
				height: 1277,
				alt: {
					en: 'The finished colourful beaded coin purse',
					pt: 'A bolsa-moedeiro colorida terminada',
					ru: 'Готовая разноцветная сумочка-монетница',
					uk: 'Готова різнокольорова сумочка-гаманець'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Then came calmer, more classic versions.',
					pt: 'Depois surgiram versões mais discretas e clássicas.',
					ru: 'Потом появились более спокойные и классические варианты.',
					uk: "Потім з'явилися спокійніші і класичніші варіанти."
				}
			},
			{
				type: 'p',
				text: {
					en: 'The white one turned out very delicate, almost pearly.',
					pt: 'A branca ficou muito delicada, quase nacarada.',
					ru: 'Белая получилась очень нежной, почти жемчужной.',
					uk: 'Біла вийшла дуже ніжною, майже перламутровою.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The graphite one was completely different: more restrained and elegant.',
					pt: 'E a grafite — completamente diferente: mais contida e elegante.',
					ru: 'А графитовая — совсем другой: более сдержанной и элегантной.',
					uk: 'А графітова — зовсім інша: більш стримана і елегантна.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/05-white-and-graphite.webp',
				width: 1448,
				height: 1086,
				alt: {
					en: 'White and graphite beaded coin purses',
					pt: 'Bolsas-moedeiro branca e grafite',
					ru: 'Белая и графитовая сумочки-монетницы',
					uk: 'Біла і графітова сумочки-гаманці'
				}
			},
			{
				type: 'p',
				text: {
					en: "What I especially liked is that just changing the bead colour completely changes the purse's whole character.",
					pt: 'Gostei especialmente de perceber que basta mudar a cor das contas para o carácter da bolsa ficar completamente diferente.',
					ru: 'Мне особенно понравилось, что достаточно изменить только цвет бусин — и характер сумочки становится совершенно другим.',
					uk: 'Мені особливо сподобалося, що достатньо змінити лише колір намистин — і характер сумочки стає зовсім іншим.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The black one turned out small, strict, and elegant at the same time.',
					pt: 'A preta ficou pequena, séria e ao mesmo tempo elegante.',
					ru: 'Чёрная получилась маленькой, строгой и одновременно нарядной.',
					uk: 'Чорна вийшла маленькою, строгою і водночас нарядною.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/06-black.webp',
				linkPath: '/products/black-beaded-coin-purse/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'Black beaded coin purse',
					pt: 'Bolsa-moedeiro preta',
					ru: 'Чёрная сумочка-монетница',
					uk: 'Чорна сумочка-гаманець'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Then I wanted something bright.',
					pt: 'Depois apeteceu-me algo vivo.',
					ru: 'Потом мне захотелось чего-нибудь яркого.',
					uk: 'Потім мені захотілося чогось яскравого.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'So the red one appeared.',
					pt: 'Assim surgiu a vermelha.',
					ru: 'Так появилась красная.',
					uk: "Так з'явилася червона."
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/07-red.webp',
				linkPath: '/products/red-beaded-mini-coin-purse/',
				width: 1306,
				height: 1204,
				alt: {
					en: 'Red beaded coin purse',
					pt: 'Bolsa-moedeiro vermelha',
					ru: 'Красная сумочка-монетница',
					uk: 'Червона сумочка-гаманець'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And after it — a shimmering silver one.',
					pt: 'E a seguir — uma prateada brilhante.',
					ru: 'А следом — блестящая серебристая.',
					uk: 'А слідом — блискуча срібляста.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/08-silver.webp',
				linkPath: '/products/silver-beaded-mini-coin-purse/',
				width: 1359,
				height: 1157,
				alt: {
					en: 'Silver beaded coin purse',
					pt: 'Bolsa-moedeiro prateada',
					ru: 'Серебристая сумочка-монетница',
					uk: 'Срібляста сумочка-гаманець'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And, of course, one of my favourites — the pearly white one.',
					pt: 'E, claro, uma das minhas preferidas — a branca nacarada.',
					ru: 'И, конечно, одна из моих любимых — белая жемчужная.',
					uk: 'І, звісно ж, одна з моїх улюблених — біла перламутрова.'
				}
			},
			{
				type: 'p',
				text: {
					en: "I think it's in white that you can really see how unusual plain little beads look once there are enough of them to become a tiny purse.",
					pt: 'Acho que é no branco que se vê melhor como pequenas contas comuns ficam pouco habituais quando há muitas delas e se transformam numa verdadeira bolsinha.',
					ru: 'Мне кажется, именно в белом цвете особенно хорошо видно, насколько необычно смотрятся обычные маленькие бусины, когда их становится много и они превращаются в настоящую крошечную сумочку.',
					uk: 'Мені здається, саме в білому кольорі особливо добре видно, наскільки незвично виглядають звичайні маленькі намистини, коли їх стає багато і вони перетворюються на справжню крихітну сумочку.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/09-collection.webp',
				width: 1448,
				height: 1086,
				alt: {
					en: 'White, silver and red beaded coin purses',
					pt: 'Bolsas-moedeiro branca, prateada e vermelha',
					ru: 'Белая, серебристая и красная сумочки-монетницы',
					uk: 'Біла, срібляста і червона сумочки-гаманці'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'Not just a coin purse',
					pt: 'Não é só uma bolsa-moedeiro',
					ru: 'Не только монетница',
					uk: 'Не тільки гаманець'
				}
			},
			{
				type: 'p',
				text: {
					en: 'For every purse I made a small handle from beads and added carabiners.',
					pt: 'Para cada bolsa fiz uma pequena alça de contas e acrescentei mosquetões.',
					ru: 'Для каждой сумочки я делала маленькую ручку из бусин и добавляла карабины.',
					uk: 'Для кожної сумочки я робила маленьку ручку з намистин і додавала карабіни.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'So a purse like this can be used in different ways: worn on its own, used to hold a few small things, or clipped onto a bigger bag as an unusual accessory.',
					pt: 'Por isso, uma bolsa destas pode usar-se de formas diferentes: sozinha, para guardar algo pequeno lá dentro, ou presa a uma bolsa maior como um acessório fora do comum.',
					ru: 'Поэтому такую сумочку можно использовать по-разному: носить отдельно, положить внутрь что-нибудь маленькое или прикрепить к большой сумке как необычный аксессуар.',
					uk: 'Тому таку сумочку можна використовувати по-різному: носити окремо, покласти всередину щось маленьке або прикріпити до великої сумки як незвичайний аксесуар.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And one day my little black coin purse went with me for a walk by the ocean. 😊',
					pt: 'E um dia a minha pequena bolsa preta foi comigo passear junto ao oceano. 😊',
					ru: 'И однажды моя маленькая чёрная монетница отправилась со мной на прогулку к океану. 😊',
					uk: 'І одного разу моя маленька чорна сумочка-гаманець вирушила зі мною на прогулянку до океану. 😊'
				}
			},
			{
				type: 'img',
				src: '/images/journal/beaded-mini-coin-purses/10-black-outdoors.webp',
				linkPath: '/products/black-beaded-coin-purse/',
				width: 1152,
				height: 1536,
				alt: {
					en: 'Black coin purse worn as an accessory on a larger bag',
					pt: 'Bolsa preta usada como acessório numa bolsa maior',
					ru: 'Чёрная монетница как аксессуар на большой сумке',
					uk: 'Чорна сумочка як аксесуар на великій сумці'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I really love this photo.',
					pt: 'Gosto muito desta fotografia.',
					ru: 'Мне очень нравится эта фотография.',
					uk: 'Мені дуже подобається ця фотографія.'
				}
			},
			{
				type: 'p',
				text: {
					en: "Here my little piece isn't sitting at home among beads, line and tools anymore. It became a real accessory and part of a bigger bag.",
					pt: 'Aqui o meu pequeno trabalho já não está em casa, entre contas, fio e ferramentas. Tornou-se um verdadeiro acessório e parte de uma bolsa maior.',
					ru: 'Здесь моя маленькая работа уже не лежит дома среди бусин, лески и инструментов. Она стала настоящим аксессуаром и частью большой сумки.',
					uk: 'Тут моя маленька робота вже не лежить удома серед бісеру, волосіні та інструментів. Вона стала справжнім аксесуаром і частиною великої сумки.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Did you like my little purses?',
					pt: 'Gostou das minhas pequenas bolsas?',
					ru: 'Понравились мои маленькие сумочки?',
					uk: 'Сподобалися мої маленькі сумочки?'
				}
			},
			{
				type: 'link',
				path: '/products/?category=bags',
				text: {
					en: 'View the beaded coin purses in the catalogue →',
					pt: 'Ver as bolsas-moedeiro de contas no catálogo →',
					ru: 'Посмотреть сумочки-монетницы в галерее →',
					uk: 'Переглянути сумочки-гаманці в каталозі →'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'And then my little purses started to travel…',
					pt: 'E depois as minhas bolsas começaram a viajar…',
					ru: 'А потом мои сумочки начали путешествовать…',
					uk: 'А потім мої сумочки почали подорожувати…'
				}
			},
			{
				type: 'p',
				text: {
					en: 'When I showed my beaded coin purses to friends, they loved them.',
					pt: 'Quando mostrei as minhas bolsas-moedeiro às amigas, elas adoraram.',
					ru: 'Когда я показала свои сумочки-монетницы подругам, они им очень понравились.',
					uk: 'Коли я показала свої сумочки-гаманці подругам, їм дуже сподобалося.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And I happily gave one away.',
					pt: 'E ofereci uma com muito gosto.',
					ru: 'И я с удовольствием подарила одну.',
					uk: 'І я із задоволенням подарувала одну.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Then a second one.',
					pt: 'Depois uma segunda.',
					ru: 'Потом вторую.',
					uk: 'Потім другу.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Then a third… 😊',
					pt: 'Depois uma terceira… 😊',
					ru: 'Потом третью… 😊',
					uk: 'Потім третю… 😊'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Even little girls were delighted by them!',
					pt: 'Até as meninas pequenas ficaram encantadas com elas!',
					ru: 'Даже маленькие девочки были от них в восторге!',
					uk: 'Навіть маленькі дівчатка були від них у захваті!'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I sent the purses to different countries, and little by little my small pieces started travelling around the world.',
					pt: 'Enviei as bolsas para vários países, e aos poucos os meus pequenos trabalhos começaram a viajar pelo mundo.',
					ru: 'Я отправляла сумочки в разные страны, и постепенно мои маленькие работы начали путешествовать по миру.',
					uk: 'Я відправляла сумочки в різні країни, і поступово мої маленькі роботи почали подорожувати світом.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And I really love thinking that somewhere far from me these little things are living now — things that once started as just a handful of beads, a tiny clasp frame, and that very same fishing line. ))',
					pt: 'E é muito bom pensar que, longe de mim, vivem agora estas pequenas peças que começaram apenas com um punhado de contas, um pequeno fecho e aquele mesmo fio de pesca. ))',
					ru: 'И мне очень приятно думать, что где-то далеко от меня сейчас живут эти маленькие вещицы, которые когда-то начинались всего лишь с горстки бусинок, маленького фермуара и той самой рыболовной лески. ))',
					uk: 'І мені дуже приємно думати, що десь далеко від мене зараз живуть ці маленькі речі, які колись починалися лише з жмені бісеру, маленької застібки і тієї самої риболовної волосіні. ))'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And it all began with one photo online and one simple thought:',
					pt: 'E tudo começou com uma fotografia na internet e um pensamento simples:',
					ru: 'А ведь всё началось с одной фотографии в интернете и простой мысли:',
					uk: 'А адже все почалося з однієї фотографії в інтернеті і простої думки:'
				}
			},
			{
				type: 'p',
				text: {
					en: '"Could I make one like that myself?"',
					pt: '«Será que também consigo fazer uma assim?»',
					ru: '«А смогу ли я сделать такую сама?»',
					uk: '«А чи зможу я зробити таку сама?»'
				}
			},
			{
				type: 'p',
				text: {
					en: 'It turned out — I could. ❤️',
					pt: 'Afinal — consegui. ❤️',
					ru: 'Оказалось — смогу. ❤️',
					uk: 'Виявилося — зможу. ❤️'
				}
			},
			{
				type: 'p',
				text: {
					en: "I think that's exactly why I love handmade work.",
					pt: 'Talvez seja mesmo por isto que adoro o trabalho manual.',
					ru: 'Наверное, именно за это я и люблю рукоделие.',
					uk: 'Напевно, саме за це я і люблю рукоділля.'
				}
			},
			{
				type: 'p',
				text: {
					en: "You see something beautiful, and an idea appears. Then you start looking for materials, you try, sometimes something doesn't work out, you redo it…",
					pt: 'Vê-se algo bonito, e surge uma ideia. Depois começa-se a procurar materiais, experimenta-se, às vezes algo não corre bem, refaz-se…',
					ru: 'Ты видишь что-то красивое, и у тебя появляется идея. Потом начинаешь искать материалы, пробуешь, иногда что-то не получается, переделываешь…',
					uk: "Ти бачиш щось красиве, і в тебе з'являється ідея. Потім починаєш шукати матеріали, пробуєш, іноді щось не виходить, переробляєш…"
				}
			},
			{
				type: 'p',
				text: {
					en: "And then a thing appears in your hands that, not so long ago, didn't exist at all.",
					pt: 'E depois aparece nas nossas mãos uma peça que, até há pouco tempo, não existia.',
					ru: 'А потом в твоих руках появляется вещь, которой ещё совсем недавно не существовало.',
					uk: "А потім у твоїх руках з'являється річ, якої ще зовсім недавно не існувало."
				}
			},
			{
				type: 'p',
				text: {
					en: 'And the best part is when the thing you made starts bringing joy not only to you, but to other people too.',
					pt: 'E o melhor de tudo é quando a peça que fizemos começa a alegrar não só a nós, mas também outras pessoas.',
					ru: 'И самое приятное — когда сделанная тобой вещь начинает радовать не только тебя, но и других людей.',
					uk: 'І найприємніше — коли зроблена тобою річ починає радувати не тільки тебе, а й інших людей.'
				}
			},
			{
				type: 'p',
				text: {
					en: "That's how my little beaded coin purses got their own story. ❤️",
					pt: 'Assim, as minhas pequenas bolsas-moedeiro ganharam a sua própria história. ❤️',
					ru: 'Так мои маленькие сумочки-монетницы получили свою собственную историю. ❤️',
					uk: 'Так мої маленькі сумочки-гаманці отримали свою власну історію. ❤️'
				}
			}
		]
	},
	{
		slug: 'caring-for-beadwork',
		tagKey: 'journal_tagCare',
		date: '2026-04-28',
		readMinutes: 6,
		title: {
			en: 'How to keep beadwork jewellery beautiful for years',
			pt: 'Como manter a beleza das joias em contas durante anos',
			ru: 'Как сохранить красоту изделий из бисера и бусин надолго',
			uk: 'Як надовго зберегти красу виробів із бісеру та намистин'
		},
		excerpt: {
			en: 'Storage, cleaning, and what not to do so the thread lasts for years.',
			pt: 'Armazenamento, limpeza e o que evitar para o fio durar anos.',
			ru: 'Хранение, чистка и что точно не стоит делать, чтобы нить прослужила годы.',
			uk: 'Зберігання, чищення і чого точно не варто робити, щоб нитка прослужила роки.'
		},
		body: [
			{
				type: 'p',
				text: {
					en: 'I love seed beads and beads for the way they play with light. Sometimes you pick up a finished piece, turn it toward the window — and it shines in a completely different way. ✨',
					pt: 'Adoro o bisel e as contas pela forma como brincam com a luz. Às vezes pegamos numa peça pronta, viramo-la para a janela — e ela brilha de um jeito completamente diferente. ✨',
					ru: 'Я очень люблю бисер и бусины за то, как они умеют играть со светом. Иногда возьмёшь готовое изделие в руки, повернёшь его к окну — и оно совсем по-другому засияет. ✨',
					uk: 'Я дуже люблю бісер і намистини за те, як вони вміють грати зі світлом. Іноді береш готовий виріб у руки, повертаєш його до вікна — і він зовсім по-іншому починає сяяти. ✨'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And of course, when you make something like this with your own hands, you want it to stay as beautiful, bright and shiny as it was on day one, for as long as possible.',
					pt: 'E claro, quando fazemos uma peça assim com as nossas próprias mãos, queremos que ela continue tão bonita, vibrante e brilhante quanto no primeiro dia, pelo maior tempo possível.',
					ru: 'И конечно, когда делаешь такую вещь своими руками, хочется, чтобы она как можно дольше оставалась такой же красивой, яркой и блестящей, как в первый день.',
					uk: 'І звісно, коли робиш таку річ власними руками, хочеться, щоб вона якомога довше залишалася такою ж гарною, яскравою і блискучою, як у перший день.'
				}
			},
			{
				type: 'p',
				text: {
					en: "In fact, beadwork and beaded pieces don't need any complicated care. You just need to remember a few small rules. I'd like to share them with you.",
					pt: 'Na verdade, as peças de bisel e contas não exigem cuidados complicados. Basta lembrar algumas pequenas regras. Quero partilhá-las convosco.',
					ru: 'На самом деле изделия из бисера и бусин не требуют какого-то сложного ухода. Нужно просто помнить несколько небольших правил. Хочу поделиться ими с вами.',
					uk: 'Насправді вироби з бісеру та намистин не потребують якогось складного догляду. Потрібно просто пам’ятати кілька невеликих правил. Хочу поділитися ними з вами.'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-bead-blue-bicone-ring-bracelet/1.webp',
				linkPath: '/products/white-bead-blue-bicone-ring-bracelet/',
				width: 941,
				height: 1672,
				alt: {
					en: 'White beaded bracelet with blue bicone accent',
					pt: 'Pulseira de contas brancas com acento em bicone azul',
					uk: 'Браслет із білого бісеру та синього біконуса',
					ru: 'Браслет из белого бисера и синего биконуса'
				}
			},
			{
				type: 'h2',
				text: {
					en: "💧 Seed beads and beads don't love water",
					pt: '💧 O bisel e as contas não gostam muito de água',
					ru: '💧 Бисер и бусины не очень любят воду',
					uk: '💧 Бісер і намистини не дуже люблять воду'
				}
			},
			{
				type: 'p',
				text: {
					en: "If it's a bracelet, ring or other piece of jewellery, it's best to take it off before a shower, a bath, or a trip to the pool.",
					pt: 'Se for uma pulseira, anel ou outra joia, o melhor é tirá-la antes do duche, do banho ou de ir à piscina.',
					ru: 'Если это браслет, кольцо или другое украшение, лучше снимать его перед душем, ванной или походом в бассейн.',
					uk: 'Якщо це браслет, кільце чи інша прикраса, краще знімати її перед душем, ванною або походом у басейн.'
				}
			},
			{
				type: 'p',
				text: {
					en: "And I'd especially advise against swimming in jewellery in the sea. Salt, water and sun are a wonderful combination for us, but not the best one for beads. 😊",
					pt: 'E, principalmente, não aconselho nadar no mar com joias postas. Sal, água e sol são uma combinação ótima para nós, mas não tanto para o bisel. 😊',
					ru: 'И особенно я бы не советовала купаться в украшениях в море. Соль, вода и солнце — прекрасное сочетание для нас, но не самое лучшее для бисера. 😊',
					uk: 'І особливо я б не радила купатися в прикрасах у морі. Сіль, вода і сонце — чудове поєднання для нас, але не найкраще для бісеру. 😊'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Even if nothing happens to the beads right away, over time their coating can lose its original shine, and the metal parts can darken.',
					pt: 'Mesmo que nada aconteça às contas de imediato, com o tempo o revestimento pode perder o brilho original, e as partes metálicas podem escurecer.',
					ru: 'Даже если с бусинами ничего не случится сразу, со временем их покрытие может потерять первоначальный блеск, а металлические детали — потемнеть.',
					uk: 'Навіть якщо з намистинами нічого не станеться одразу, з часом їхнє покриття може втратити початковий блиск, а металеві деталі — потемніти.'
				}
			},
			{
				type: 'p',
				text: {
					en: "If a piece accidentally gets wet, it's not a big deal. Just gently blot it with a soft cloth and let it dry naturally.",
					pt: 'Se uma peça se molhar por acidente, não há problema. Basta secá-la delicadamente com um pano macio e deixá-la secar naturalmente.',
					ru: 'Если изделие случайно намокло, ничего страшного. Просто аккуратно промокните его мягкой салфеткой и оставьте высохнуть естественным образом.',
					uk: 'Якщо виріб випадково намок, нічого страшного. Просто акуратно промокніть його м’якою серветкою і дайте висохнути природним шляхом.'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-silver-princess-beaded-bracelet/1.webp',
				linkPath: '/products/white-silver-princess-beaded-bracelet/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'White and silver beaded bracelet',
					pt: 'Pulseira em contas brancas e prateadas',
					uk: 'Браслет з білого та срібного бісеру',
					ru: 'Браслет из белого и серебристого бисера'
				}
			},
			{
				type: 'h2',
				text: {
					en: "☀️ Don't leave it in bright sun for long",
					pt: '☀️ Não deixe muito tempo ao sol forte',
					ru: '☀️ Не оставляйте надолго на ярком солнце',
					uk: '☀️ Не залишайте надовго на яскравому сонці'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Wearing jewellery in summer is, of course, absolutely fine — and encouraged!',
					pt: 'Usar joias no verão é, claro, perfeitamente possível — e recomendado!',
					ru: 'Носить украшения летом, конечно же, можно и нужно!',
					uk: 'Носити прикраси влітку, звісно ж, можна і потрібно!'
				}
			},
			{
				type: 'p',
				text: {
					en: "But I wouldn't recommend storing them where direct sunlight falls on them every day. For example, try not to leave a bracelet or a bag on a windowsill or in a car under the sun for long.",
					pt: 'Mas não aconselho guardá-las onde a luz solar direta incide todos os dias. Por exemplo, evite deixar uma pulseira ou uma bolsa muito tempo no parapeito da janela ou dentro do carro ao sol.',
					ru: 'Но хранить их там, где на них каждый день падают прямые солнечные лучи, я бы не советовала. Например, не стоит надолго оставлять браслет или сумочку на подоконнике или в машине под солнцем.',
					uk: 'Але зберігати їх там, куди щодня потрапляють прямі сонячні промені, я б не радила. Наприклад, не варто надовго залишати браслет або сумочку на підвіконні чи в машині на сонці.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Some beads have a beautiful coloured, pearlescent or metallic coating, and constant bright sun can gradually change its shade over time.',
					pt: 'Algumas contas têm um belo revestimento colorido, perolado ou metalizado, e o sol forte constante pode, com o tempo, alterar o seu tom.',
					ru: 'Некоторые бусины имеют красивое цветное, перламутровое или металлизированное покрытие, и постоянное яркое солнце со временем может изменить его оттенок.',
					uk: 'Деякі намистини мають гарне кольорове, перламутрове чи металізоване покриття, і постійне яскраве сонце з часом може змінити його відтінок.'
				}
			},
			{
				type: 'h2',
				text: {
					en: '🌸 Perfume and cream first — jewellery after',
					pt: '🌸 Primeiro o perfume e o creme — depois a joia',
					ru: '🌸 Сначала духи и крем — потом украшение',
					uk: '🌸 Спочатку парфуми і крем — потім прикраса'
				}
			},
			{
				type: 'p',
				text: {
					en: "It's a very small habit, but it helps keep jewellery looking beautiful for much longer.",
					pt: 'É um hábito muito simples, mas ajuda a manter as joias bonitas por muito mais tempo.',
					ru: 'Это совсем маленькая привычка, но она помогает сохранить украшения красивыми намного дольше.',
					uk: 'Це зовсім невелика звичка, але вона допомагає зберегти прикраси гарними набагато довше.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'First apply your cream, perfume, hairspray or other cosmetics. Wait a little, and only then put on your bracelet, ring or other piece of jewellery.',
					pt: 'Primeiro aplique o creme, o perfume, o laquê ou outra cosmética. Espere um pouco e só depois coloque a pulseira, o anel ou outra joia.',
					ru: 'Сначала нанесите крем, духи, лак для волос или другую косметику. Подождите немного, а уже потом надевайте браслет, кольцо или другое украшение.',
					uk: 'Спочатку нанесіть крем, парфуми, лак для волосся чи іншу косметику. Трохи зачекайте, а вже потім надягайте браслет, кільце чи іншу прикрасу.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Try to keep perfume and cosmetics from getting directly onto the beads. Some coatings are quite delicate and can gradually lose their shine.',
					pt: 'Tente evitar que o perfume e os cosméticos caiam diretamente sobre as contas. Alguns revestimentos são bastante delicados e podem perder o brilho aos poucos.',
					ru: 'Старайтесь, чтобы духи и косметические средства не попадали прямо на бусины. Некоторые покрытия довольно нежные и могут постепенно потерять свой блеск.',
					uk: 'Намагайтеся, щоб парфуми та косметичні засоби не потрапляли прямо на намистини. Деякі покриття доволі ніжні і можуть поступово втратити свій блиск.'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-bead-blue-bicone-ring-bracelet/3.webp',
				linkPath: '/products/white-bead-blue-bicone-ring-bracelet/',
				width: 1254,
				height: 1254,
				alt: {
					en: 'Matching ring with white beads and blue bicone accent, close-up',
					pt: 'Anel a condizer de contas brancas com acento em bicone azul, pormenor',
					uk: 'Кільце з білого бісеру та синього біконуса в комплекті, крупним планом',
					ru: 'Кольцо из белого бисера и синего биконуса в комплекте, крупным планом'
				}
			},
			{
				type: 'h2',
				text: {
					en: '👜 Beaded bags love gentle care too',
					pt: '👜 As bolsas de contas também gostam de cuidado delicado',
					ru: '👜 Сумочки из бусин тоже любят бережное отношение',
					uk: '👜 Сумочки з намистин теж люблять дбайливе ставлення'
				}
			},
			{
				type: 'p',
				text: {
					en: "A beaded bag shouldn't be washed or soaked in water.",
					pt: 'Uma bolsa de contas não deve ser lavada nem molhada em água.',
					ru: 'Сумочку из бусин не нужно стирать или замачивать в воде.',
					uk: 'Сумочку з намистин не потрібно прати чи замочувати у воді.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'If it gets a little dusty, it is enough to gently wipe it with a soft dry cloth. If needed, you can use a slightly damp cloth, then let the bag dry well afterwards.',
					pt: 'Se ficar um pouco empoeirada, basta limpá-la delicadamente com um pano macio e seco. Se necessário, pode usar um pano ligeiramente húmido e depois deixar a bolsa secar bem.',
					ru: 'Если она немного запылилась, достаточно осторожно протереть её мягкой сухой салфеткой. При необходимости можно использовать слегка влажную ткань, а потом дать сумочке хорошо высохнуть.',
					uk: 'Якщо вона трохи запилилася, достатньо обережно протерти її м’якою сухою серветкою. За потреби можна скористатися злегка вологою тканиною, а потім дати сумочці добре висохнути.'
				}
			},
			{
				type: 'p',
				text: {
					en: "And one more piece of advice — don't overload a bag like this.",
					pt: 'E mais um conselho meu — não sobrecarregue esta bolsa.',
					ru: 'И ещё один мой совет — не перегружайте такую сумочку.',
					uk: 'І ще одна моя порада — не перевантажуйте таку сумочку.'
				}
			},
			{
				type: 'p',
				text: {
					en: "Even though I try to use sturdy materials for my pieces, a beaded bag is still a handmade item. It's made for beautiful, useful little things, not for heavy items. 😊",
					pt: 'Apesar de eu tentar usar materiais resistentes nas minhas peças, uma bolsa de contas continua a ser feita à mão. Ela foi criada para pequenos objetos bonitos e úteis, não para coisas pesadas. 😊',
					ru: 'Несмотря на то что для своих изделий я стараюсь использовать прочные материалы, сумочка из бусин всё-таки остаётся ручной работой. Она создана для красивых и нужных мелочей, а не для тяжёлых вещей. 😊',
					uk: 'Попри те, що для своїх виробів я намагаюся використовувати міцні матеріали, сумочка з намистин все ж залишається ручною роботою. Вона створена для гарних і потрібних дрібничок, а не для важких речей. 😊'
				}
			},
			{
				type: 'img',
				src: '/images/products/beaded-evening-bag/1.webp',
				linkPath: '/products/beaded-evening-bag/',
				width: 1254,
				height: 1254,
				alt: {
					en: 'Beaded evening bag for special occasions',
					pt: 'Bolsa de noite em contas para ocasiões especiais',
					uk: 'Нарядна сумочка з бісеру для урочистих подій',
					ru: 'Нарядная сумочка из бисера для торжества'
				}
			},
			{
				type: 'img',
				src: '/images/products/black-beaded-coin-purse/2.webp',
				linkPath: '/products/black-beaded-coin-purse/',
				width: 1280,
				height: 1067,
				alt: {
					en: 'Black beaded heart-shaped coin purse clipped to a black leather bag',
					pt: 'Bolsa moedeiro preta em forma de coração, presa a uma bolsa preta de cabedal',
					uk: 'Чорна сумочка-гаманець у формі серця на чорній шкіряній сумці',
					ru: 'Чёрная сумочка-монетница в форме сердца на чёрной кожаной сумке'
				}
			},
			{
				type: 'h2',
				text: {
					en: '🧼 Skip harsh cleaning products',
					pt: '🧼 Não use produtos de limpeza fortes',
					ru: '🧼 Не нужно использовать сильные чистящие средства',
					uk: '🧼 Не варто використовувати сильні миючі засоби'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Sometimes you want to give a piece a really good clean so it shines again. But this is exactly where it is best not to overdo it.',
					pt: 'Às vezes apetece limpar bem uma joia para que volte a brilhar. Mas é aqui que convém não exagerar.',
					ru: 'Иногда хочется хорошенько почистить украшение, чтобы оно снова блестело. Но здесь как раз лучше не переусердствовать.',
					uk: 'Іноді хочеться добряче почистити прикрасу, щоб вона знову заблищала. Але тут якраз краще не перестаратися.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Alcohol, acetone, dish soap and other household cleaning products are best kept for other purposes.',
					pt: 'O álcool, a acetona, o detergente da loiça e outros produtos de limpeza domésticos são melhor guardados para outros fins.',
					ru: 'Спирт, ацетон, средства для мытья посуды и другие бытовые чистящие средства лучше оставить для других целей.',
					uk: 'Спирт, ацетон, засоби для миття посуду та інші побутові миючі засоби краще залишити для інших цілей.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'In most cases, a soft dry cloth is all seed beads and beads really need.',
					pt: 'Na maioria dos casos, um pano macio e seco é suficiente para o bisel e as contas.',
					ru: 'В большинстве случаев бисеру и бусинам достаточно мягкой сухой салфетки.',
					uk: 'У більшості випадків бісеру та намистинам достатньо м’якої сухої серветки.'
				}
			},
			{
				type: 'h2',
				text: {
					en: '📦 How I recommend storing your pieces',
					pt: '📦 Como aconselho guardar as peças',
					ru: '📦 Как я советую хранить изделия',
					uk: '📦 Як я раджу зберігати вироби'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Best of all is a dry place, kept separate from other jewellery.',
					pt: 'O ideal é um local seco, separado das outras joias.',
					ru: 'Лучше всего — в сухом месте, отдельно от других украшений.',
					uk: 'Найкраще — у сухому місці, окремо від інших прикрас.'
				}
			},
			{
				type: 'p',
				text: {
					en: "You can put a piece in a small box or a soft pouch. That way the beads won't constantly rub against metal, chains and other jewellery, and are less likely to get scratched.",
					pt: 'Pode colocar a peça numa caixinha ou num saquinho macio. Assim, as contas não ficam a esfregar constantemente em metal, correntes e outras joias, e correm menos risco de riscar.',
					ru: 'Можно положить изделие в небольшую коробочку или мягкий мешочек. Тогда бусины не будут постоянно тереться о металл, цепочки и другие украшения и меньше рискуют поцарапаться.',
					uk: 'Можна покласти виріб у невелику коробочку або м’який мішечок. Тоді намистини не будуть постійно тертися об метал, ланцюжки та інші прикраси і менше ризикують подряпатися.'
				}
			},
			{
				type: 'p',
				text: {
					en: "The bathroom, though, isn't the best place to keep them — it's too humid there.",
					pt: 'Já a casa de banho não é muito adequada para guardar — é demasiado húmida.',
					ru: 'А вот ванная комната для хранения не очень подходит — там слишком влажно.',
					uk: 'А от ванна кімната для зберігання не дуже підходить — там занадто волого.'
				}
			},
			{
				type: 'p',
				text: {
					en: "I'd suggest storing a beaded bag so that it can simply lie or stand without anything pressing down on it. That way it will keep its shape for longer.",
					pt: 'Sugiro guardar a bolsa de contas de forma que fique deitada ou em pé sem nada a fazer pressão em cima. Assim, mantém a forma por mais tempo.',
					ru: 'Сумочку из бусин я бы советовала хранить так, чтобы она спокойно лежала или стояла и сверху на неё ничего не давило. Тогда она дольше сохранит свою форму.',
					uk: 'Сумочку з намистин я б радила зберігати так, щоб вона спокійно лежала або стояла і зверху на неї нічого не тиснуло. Тоді вона довше збереже свою форму.'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-pearl-bead-necklace/1.webp',
				linkPath: '/products/white-pearl-bead-necklace/',
				width: 1086,
				height: 1448,
				alt: {
					en: 'Necklace of white faux pearls and seed beads',
					pt: 'Colar de pérolas brancas e miçangas',
					uk: 'Намисто з білих штучних перлин і бісеру',
					ru: 'Колье из белого искусственного жемчуга и бисера'
				}
			},
			{
				type: 'h2',
				text: {
					en: '❤️ And most important of all — wear your favourite things',
					pt: '❤️ E o mais importante — use as suas peças favoritas',
					ru: '❤️ И самое главное — носите свои любимые вещи',
					uk: '❤️ І найголовніше — носіть свої улюблені речі'
				}
			},
			{
				type: 'p',
				text: {
					en: "I really don't want you to come away from all this advice thinking that beadwork should be put in a box and only brought out for big occasions. 😊",
					pt: 'Não quero, de todo, que depois de todos estes conselhos vos pareça que as peças de bisel devem ficar guardadas numa caixa e só sair em grandes ocasiões. 😊',
					ru: 'Я совсем не хочу, чтобы после всех этих советов вам показалось, что изделия из бисера нужно положить в коробочку и доставать только по большим праздникам. 😊',
					uk: 'Я зовсім не хочу, щоб після всіх цих порад вам здалося, що вироби з бісеру треба покласти в коробочку і діставати тільки на великі свята. 😊'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Quite the opposite!',
					pt: 'Muito pelo contrário!',
					ru: 'Совсем наоборот!',
					uk: 'Зовсім навпаки!'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Wear them, take them with you, pair them with your favourite clothes, give them as gifts, and enjoy them.',
					pt: 'Usem-nas, levem-nas convosco, combinem-nas com a roupa que mais gostam, ofereçam-nas e desfrutem delas.',
					ru: 'Носите их, берите с собой, сочетайте с любимой одеждой, дарите и получайте удовольствие.',
					uk: 'Носіть їх, беріть із собою, поєднуйте з улюбленим одягом, даруйте і отримуйте задоволення.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Just treat handmade pieces with a little bit of care.',
					pt: 'Basta tratar as peças artesanais com um pouco de cuidado.',
					ru: 'Просто относитесь к ручной работе с небольшой заботой.',
					uk: 'Просто ставтеся до ручної роботи з невеликою турботою.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And then your favourite bracelet, a little coin purse or a beaded bag will keep delighting you with its colour and shine for a long time.',
					pt: 'E assim, a pulseira favorita, a pequena bolsa-moedeiro ou a bolsa de contas continuarão a alegrar-vos com a sua cor e brilho por muito tempo.',
					ru: 'И тогда любимый браслет, маленькая сумочка-монетница или сумочка из бусин ещё долго будут радовать вас своим цветом и блеском.',
					uk: 'І тоді улюблений браслет, маленька сумочка-монетниця чи сумочка з намистин ще довго будуть радувати вас своїм кольором і блиском.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'After all, things made by hand also love a little care in return. ❤️',
					pt: 'Afinal, as coisas feitas à mão também gostam um pouco de ser cuidadas. ❤️',
					ru: 'Ведь вещи, сделанные руками, тоже немного любят, когда о них заботятся. ❤️',
					uk: 'Адже речі, зроблені руками, теж трохи люблять, коли про них піклуються. ❤️'
				}
			},
			{
				type: 'img',
				src: '/images/products/bright-mini-bag-for-girl/2.webp',
				linkPath: '/products/bright-mini-bag-for-girl/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'Bright mini beaded bag with matching beaded bracelet',
					pt: 'Mini-bolsa em contas de cores vivas com bracelete em contas a combinar',
					uk: 'Яскрава міні-сумочка з бісеру з відповідним браслетом',
					ru: 'Яркая мини-сумочка из бисера с подходящим браслетом'
				}
			}
		]
	},
	{
		slug: 'a-day-in-the-workshop',
		tagKey: 'journal_tagWorkshop',
		date: '2026-04-09',
		readMinutes: 6,
		title: {
			en: 'A day in the workshop: from sketch to the final knot',
			pt: 'Um dia no ateliê: do esboço ao nó final',
			ru: 'Один день в мастерской: от эскиза до узелка',
			uk: 'Один день у майстерні: від ескізу до вузлика'
		},
		excerpt: {
			en: 'How many hours a heart keychain takes — and why I never make two the same.',
			pt: 'Quantas horas leva um porta-chaves coração — e porque nunca faço dois iguais.',
			ru: 'Сколько часов уходит на брелок-сердце и почему я не делаю два одинаковых.',
			uk: 'Скільки годин іде на брелок-сердечко і чому я не роблю два однакових.'
		}
	},
	{
		slug: 'portuguese-cotton',
		tagKey: 'journal_tagWorkshop',
		date: '2026-03-21',
		readMinutes: 7,
		title: {
			en: "Portuguese cotton: why it's the only yarn I knit with",
			pt: 'Algodão português: porque é o único fio que uso',
			ru: 'Португальский хлопок: почему я вяжу только им',
			uk: 'Португальська бавовна: чому в’яжу тільки нею'
		},
		excerpt: {
			en: "The yarn that keeps a top's shape and doesn't fade in the sun.",
			pt: 'O fio que mantém a forma de um top e não desbota ao sol.',
			ru: 'Нить, которая держит форму топа и не выцветает на солнце.',
			uk: 'Нитка, яка тримає форму топа і не вицвітає на сонці.'
		}
	},
	{
		slug: 'five-handmade-gift-ideas',
		tagKey: 'journal_tagIdeas',
		date: '2026-09-27',
		readMinutes: 6,
		title: {
			en: 'Gift ideas: five handmade picks',
			pt: 'Ideias de prendas: cinco sugestões artesanais',
			ru: 'Что подарить: пять идей ручной работы',
			uk: 'Що подарувати: п’ять ідей ручної роботи'
		},
		excerpt: {
			en: 'A quick cheat sheet for birthdays, weddings, and "just because".',
			pt: 'Uma lista rápida para aniversários, casamentos e "sem motivo".',
			ru: 'Небольшая шпаргалка на день рождения, свадьбу и «просто так».',
			uk: 'Невеличка шпаргалка на день народження, весілля і «просто так».'
		},
		body: [
			{
				type: 'p',
				text: {
					en: 'Five small and big gifts for someone you want to make happy.',
					pt: 'Cinco prendas pequenas e grandes para quem se quer fazer feliz.',
					ru: 'Пять маленьких и больших подарков для тех, кого хочется порадовать.',
					uk: 'П’ять маленьких і великих подарунків для тих, кого хочеться порадувати.'
				}
			},
			{
				type: 'p',
				text: {
					en: "Sometimes you want to give something special — not necessarily expensive or large. Just a beautiful thing, chosen with the person in mind. Handmade pieces have exactly that small charm: each one is a little different from the next, and carries the warmth of the maker's hands.",
					pt: 'Às vezes apetece oferecer algo especial — não necessariamente caro ou grande. Só uma coisa bonita, escolhida a pensar na pessoa. As peças artesanais têm exactamente esse pequeno encanto: cada uma é um pouco diferente da outra, e guarda o calor das mãos de quem a fez.',
					ru: 'Иногда хочется подарить что-нибудь особенное — не обязательно дорогое или большое. Просто красивую вещь, выбранную с вниманием к человеку. Изделия ручной работы как раз обладают этим маленьким очарованием: каждое немного отличается от другого и хранит тепло рук мастера.',
					uk: 'Іноді хочеться подарувати щось особливе — не обов’язково дороге чи велике. Просто гарну річ, обрану з увагою до людини. Вироби ручної роботи якраз мають цю маленьку чарівність: кожен трохи відрізняється від іншого і зберігає тепло рук майстрині.'
				}
			},
			{
				type: 'h2',
				text: {
					en: '1. A beaded coin purse',
					pt: '1. Uma bolsa-moedeiro de contas',
					ru: '1. Сумочка-монетница из бусин',
					uk: '1. Сумочка-гаманець з бісеру'
				}
			},
			{
				type: 'p',
				text: {
					en: 'A small, unusual and pretty little bag — a sweet gift for a girl or young woman. It can hold coins, a small piece of jewellery, or some other little treasure.',
					pt: 'Uma bolsinha pequena, pouco comum e bonita — uma prenda querida para uma menina ou jovem. Pode guardar moedas, uma pequena joia, ou algum mimo que seja especial para a pessoa.',
					ru: 'Маленькая, необычная и нарядная сумочка — милый подарок для девочки или молодой девушки. В неё можно положить монетки, небольшое украшение или какую-нибудь дорогую сердцу мелочь.',
					uk: 'Маленька, незвичайна і святкова сумочка — милий подарунок для дівчинки чи молодої дівчини. У неї можна покласти монетки, невелику прикрасу або якусь дорогу серцю дрібничку.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The purse itself can also become a small ornament — the beads catch the light beautifully, and its tiny size gives it a special charm.',
					pt: 'A própria bolsa também pode tornar-se um pequeno adorno — as contas brilham lindamente à luz, e o tamanho miniatura dá-lhe um charme especial.',
					ru: 'А ещё сама сумочка может стать маленьким украшением — бусины красиво переливаются на свету, а миниатюрный размер придаёт ей особое очарование.',
					uk: 'А ще сама сумочка може стати маленькою прикрасою — намистини гарно переливаються на світлі, а мініатюрний розмір надає їй особливого шарму.'
				}
			},
			{
				type: 'img',
				src: '/images/products/red-beaded-mini-coin-purse/1.webp',
				linkPath: '/products/red-beaded-mini-coin-purse/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'Red beaded mini coin purse',
					pt: 'Mini bolsa moedeiro vermelha em contas',
					uk: 'Міні сумочка-гаманець з червоного бісеру',
					ru: 'Мини сумочка монетница из красного бисера'
				}
			},
			{
				type: 'p',
				text: {
					en: 'But a little purse like this has another role too — as a decoration for a bigger bag. Just clip it onto the handle, and a familiar bag gets a whole new mood. A little beaded purse looks like a charm or an ornament, while staying a real, tiny bag in its own right.',
					pt: 'Mas uma bolsinha assim também pode ter outro papel — como enfeite para uma bolsa maior. Basta prendê-la à asa, e uma bolsa habitual ganha um ar completamente diferente. Uma pequena bolsa de contas parece um pingente ou um adorno, mas continua a ser uma verdadeira mini-bolsa.',
					ru: 'Но у такой малышки может быть и ещё одна роль — украшение для большой сумки. Достаточно прикрепить её к ручке, и привычная сумка получает совсем другое настроение. Маленькая сумочка из бусин выглядит как подвеска или украшение, но при этом остаётся настоящей миниатюрной сумочкой.',
					uk: 'Але в такої малючки може бути і ще одна роль — прикраса для великої сумки. Достатньо причепити її до ручки, і звична сумка отримує зовсім інший настрій. Маленька сумочка з бісеру виглядає як підвіска чи прикраса, але при цьому залишається справжньою мініатюрною сумочкою.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I love it when one small detail can make a familiar thing feel a little more unusual and personal.',
					pt: 'Gosto quando um pequeno detalhe consegue tornar algo familiar um pouco mais especial e pessoal.',
					ru: 'Мне нравится, когда одна маленькая деталь способна сделать знакомую вещь чуть более необычной и индивидуальной.',
					uk: 'Мені подобається, коли одна маленька деталь здатна зробити знайому річ трохи незвичнішою й індивідуальнішою.'
				}
			},
			{
				type: 'img',
				src: '/images/products/black-beaded-coin-purse/2.webp',
				linkPath: '/products/black-beaded-coin-purse/',
				width: 1280,
				height: 1067,
				alt: {
					en: 'Black beaded heart-shaped coin purse clipped to a black leather bag',
					pt: 'Bolsa moedeiro preta em forma de coração, presa a uma bolsa preta de cabedal',
					uk: 'Чорна сумочка-гаманець у формі серця на чорній шкіряній сумці',
					ru: 'Чёрная сумочка-монетница в форме сердца на чёрной кожаной сумке'
				}
			},
			{
				type: 'link',
				path: '/journal/beaded-mini-coin-purses/',
				text: {
					en: 'Read the story of my coin purses →',
					pt: 'Ler a história das minhas bolsas-moedeiro →',
					ru: 'История сумочек-монетниц →',
					uk: 'Читати історію моїх сумочок-гаманців →'
				}
			},
			{
				type: 'h2',
				text: {
					en: '2. A handmade bracelet',
					pt: '2. Uma pulseira artesanal',
					ru: '2. Браслет ручной работы',
					uk: '2. Браслет ручної роботи'
				}
			},
			{
				type: 'p',
				text: {
					en: "A bracelet is a small and very personal gift for a friend, sister or daughter. It's easy to match to a mood: delicate, romantic, bright, or simply understated.",
					pt: 'Uma pulseira é uma prenda pequena e muito pessoal para uma amiga, irmã ou filha. É fácil de escolher conforme o estilo: delicada, romântica, vibrante ou bem simples.',
					ru: 'Браслет — небольшой и очень личный подарок подруге, сестре или дочери. Его легко подобрать по настроению: нежный, романтичный, яркий или совсем лаконичный.',
					uk: 'Браслет — невеликий і дуже особистий подарунок подрузі, сестрі чи доньці. Його легко підібрати за настроєм: ніжний, романтичний, яскравий або зовсім лаконічний.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Every bracelet has its own character. "Princess", "Little Flower" and "Tenderness" turned out completely different from one another, though each stays a light, feminine piece.',
					pt: 'Cada pulseira tem o seu próprio carácter. "Princesa", "Florzinha" e "Ternura" ficaram completamente diferentes umas das outras, embora todas continuem a ser peças leves e femininas.',
					ru: 'У каждого браслета свой характер. «Принцесса», «Цветочек» и «Нежность» получились совершенно разными, хотя каждый из них остаётся лёгким и женственным украшением.',
					uk: 'У кожного браслета свій характер. «Принцеса», «Квіточка» і «Ніжність» вийшли зовсім різними, хоча кожен із них залишається легкою жіночною прикрасою.'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-silver-princess-beaded-bracelet/1.webp',
				linkPath: '/products/white-silver-princess-beaded-bracelet/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'White and silver beaded bracelet',
					pt: 'Pulseira em contas brancas e prateadas',
					uk: 'Браслет з білого та срібного бісеру',
					ru: 'Браслет из белого и серебристого бисера'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-gold-flower-beaded-bracelet/1.webp',
				linkPath: '/products/white-gold-flower-beaded-bracelet/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'White and gold beaded bracelet with a flower motif',
					pt: 'Pulseira em contas brancas e douradas com motivo floral',
					uk: 'Браслет із квітковим візерунком з білого та золотистого бісеру',
					ru: 'Браслет с цветочным узором из белого и золотистого бисера'
				}
			},
			{
				type: 'img',
				src: '/images/products/tenderness-beaded-bracelet/1.webp',
				linkPath: '/products/tenderness-beaded-bracelet/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'Delicate hand-woven beaded bracelet',
					pt: 'Pulseira delicada em contas, tecida à mão',
					uk: 'Ніжний браслет із бісеру ручної роботи',
					ru: 'Нежный браслет из бисера ручной работы'
				}
			},
			{
				type: 'h2',
				text: {
					en: '3. A handmade bag',
					pt: '3. Uma bolsa artesanal',
					ru: '3. Сумочка ручной работы',
					uk: '3. Сумочка ручної роботи'
				}
			},
			{
				type: 'p',
				text: {
					en: 'A bag is a more noticeable gift, but still a very personal one. It can become part of a favourite look and stay with its owner for more than one season.',
					pt: 'Uma bolsa é já uma prenda mais visível, mas continua a ser muito pessoal. Pode tornar-se parte de um look preferido e acompanhar a sua dona por mais do que uma estação.',
					ru: 'Сумочка — подарок уже более заметный, но при этом очень личный. Она может стать частью любимого образа и сопровождать свою хозяйку не один сезон.',
					uk: 'Сумочка — подарунок уже помітніший, але водночас дуже особистий. Вона може стати частиною улюбленого образу і супроводжувати свою господиню не один сезон.'
				}
			},
			{
				type: 'p',
				text: {
					en: "I especially love pieces where the interesting texture and details aren't obvious at first glance. You want to look closer, touch them, notice the weave, the shape of the handles, the clasp.",
					pt: 'Gosto especialmente de peças em que a textura e os detalhes interessantes não se notam logo à primeira vista. Dá vontade de as observar mais de perto, tocar-lhes, reparar na tecelagem, na forma das asas, no fecho.',
					ru: 'Мне особенно нравятся вещи, в которых интересная фактура и детали заметны не сразу. Их хочется рассматривать поближе, прикасаться к ним, замечать плетение, форму ручек, застёжку.',
					uk: 'Мені особливо подобаються речі, в яких цікава фактура і деталі помітні не одразу. Їх хочеться роздивлятися зблизька, торкатися, помічати плетіння, форму ручок, застібку.'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-crochet-bag/1.webp',
				linkPath: '/products/white-crochet-bag/',
				width: 1122,
				height: 1402,
				alt: {
					en: 'White crochet bag',
					pt: 'Bolsa branca em croché',
					uk: 'Біла в’язана сумочка гачком',
					ru: 'Вязаная белая сумочка'
				}
			},
			{
				type: 'img',
				src: '/images/products/brown-lace-crochet-bag/2.webp',
				linkPath: '/products/brown-lace-crochet-bag/',
				width: 1067,
				height: 1280,
				alt: {
					en: 'Brown lace crochet bag with a gold chain strap and heart-shaped clasps',
					pt: 'Bolsa em croché rendado castanha com corrente dourada e fechos em coração',
					uk: 'Коричнева ажурна сумочка із золотистим ланцюжком і карабінами-сердечками',
					ru: 'Коричневая ажурная сумочка с золотистой цепочкой и карабинами-сердечками'
				}
			},
			{
				type: 'link',
				path: '/journal/brown-lace-crochet-bag/',
				text: {
					en: 'Read how this bag was made →',
					pt: 'Ler como esta bolsa foi feita →',
					ru: 'История создания этой сумочки →',
					uk: 'Читати історію створення цієї сумочки →'
				}
			},
			{
				type: 'h2',
				text: {
					en: '4. A beaded piece of jewellery or accessory',
					pt: '4. Uma joia ou acessório de contas',
					ru: '4. Украшение или аксессуар из бисера',
					uk: '4. Прикраса або аксесуар з бісеру'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Sometimes the best gift is a very small one. A necklace, a keychain or a little beaded accessory can be given just because, with no special occasion needed.',
					pt: 'Às vezes a melhor prenda é bem pequena. Um colar, um porta-chaves ou um pequeno acessório de contas pode ser oferecido só porque sim, sem motivo especial.',
					ru: 'Иногда лучший подарок — совсем небольшой. Колье, брелок или маленький аксессуар из бисера можно подарить просто так, без особенного повода.',
					uk: 'Іноді найкращий подарунок — зовсім невеликий. Намисто, брелок або маленький аксесуар з бісеру можна подарувати просто так, без особливого приводу.'
				}
			},
			{
				type: 'p',
				text: {
					en: "These pieces draw you in with their details: the mix of beads, the shine, the colour, and the careful handwork. And that's exactly why a small gift can feel very personal — especially when it's chosen with the person's character and favourite colours in mind.",
					pt: 'Estas peças conquistam pelos detalhes: a combinação das contas, o brilho, a cor e o trabalho manual cuidado. E é exactamente por isso que uma prenda pequena pode ser muito pessoal — sobretudo quando é escolhida a pensar no carácter e nas cores preferidas da pessoa.',
					ru: 'Такие вещи привлекают деталями: сочетанием бусин, блеском, цветом и аккуратной ручной работой. И именно поэтому небольшой подарок может оказаться очень личным — особенно если выбрать его, думая о характере и любимых цветах человека.',
					uk: 'Такі речі приваблюють деталями: поєднанням намистин, блиском, кольором і акуратною ручною роботою. І саме тому невеликий подарунок може виявитися дуже особистим — особливо якщо обрати його, думаючи про характер і улюблені кольори людини.'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-pearl-bead-necklace/1.webp',
				linkPath: '/products/white-pearl-bead-necklace/',
				width: 1086,
				height: 1448,
				alt: {
					en: 'Necklace of white faux pearls and seed beads',
					pt: 'Colar de pérolas brancas e miçangas',
					uk: 'Намисто з білих штучних перлин і бісеру',
					ru: 'Колье из белого искусственного жемчуга и бисера'
				}
			},
			{
				type: 'img',
				src: '/images/products/red-beaded-heart-keychain/1.webp',
				linkPath: '/products/red-beaded-heart-keychain/',
				width: 1086,
				height: 1448,
				alt: {
					en: 'Red beaded heart-shaped keychain',
					pt: 'Porta-chaves em forma de coração em contas vermelhas',
					uk: 'Брелок у вигляді серця з червоного бісеру',
					ru: 'Брелок в виде сердца из красного бисера'
				}
			},
			{
				type: 'h2',
				text: {
					en: '5. A knitted piece',
					pt: '5. Uma peça em croché',
					ru: '5. Вязаная вещь',
					uk: '5. В’язана річ'
				}
			},
			{
				type: 'p',
				text: {
					en: "Knitted things are associated with warmth and care. A crochet hat can become a light, unusual addition to a summer look, while a soft white top is a cosy piece you'll enjoy wearing again and again.",
					pt: 'As peças em croché associam-se a carinho e conforto. Um chapéu pode tornar-se um complemento leve e pouco comum para um look de verão, e uma blusa branca e macia é uma peça aconchegante que se gosta de usar vezes sem conta.',
					ru: 'Вязаные вещи ассоциируются с теплом и заботой. Панамка может стать лёгким и необычным дополнением летнего образа, а мягкая белая кофта — уютной вещью, которую приятно носить снова и снова.',
					uk: 'В’язані речі асоціюються з теплом і турботою. Панамка може стати легким і незвичним доповненням літнього образу, а м’яка біла кофточка — затишною річчю, яку приємно носити знову і знову.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'It\'s especially lovely when a piece is made for one specific person — with the right size, colour, and small details that make it truly "theirs".',
					pt: 'É especialmente bonito quando uma peça é feita para uma pessoa em concreto — com o tamanho certo, a cor certa e pequenos detalhes que a tornam verdadeiramente "sua".',
					ru: 'Особенно приятно, когда такая вещь создаётся для конкретного человека — с подходящим размером, цветом и небольшими деталями, которые делают её именно «своей».',
					uk: 'Особливо приємно, коли така річ створюється для конкретної людини — з відповідним розміром, кольором і невеликими деталями, які роблять її саме «своєю».'
				}
			},
			{
				type: 'img',
				src: '/images/products/crochet-panama-hat/1.webp',
				linkPath: '/products/crochet-panama-hat/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'Crochet panama hat',
					pt: 'Chapéu panamá em croché',
					uk: 'В’язана панама гачком',
					ru: 'Панама'
				}
			},
			{
				type: 'img',
				src: '/images/products/white-cotton-motif-crochet-top/1.webp',
				linkPath: '/products/white-cotton-motif-crochet-top/',
				width: 1448,
				height: 1086,
				alt: {
					en: 'White cotton crochet top made from joined motifs',
					pt: 'Blusa branca em croché de algodão, feita de motivos unidos',
					uk: 'Біла кофточка, пов’язана з окремих мотивів',
					ru: 'Белая кофточка, связанная из отдельных мотивов'
				}
			},
			{
				type: 'p',
				text: {
					en: "You don't always need a big occasion to give a gift. Sometimes it's enough to see a beautiful thing and think: \"she'll love this.\"",
					pt: 'Nem sempre é preciso um grande motivo para fazer uma prenda. Às vezes basta ver uma coisa bonita e pensar logo: "ela vai adorar isto."',
					ru: 'Не всегда нужен большой повод, чтобы сделать подарок. Иногда достаточно увидеть красивую вещь и сразу подумать: «Это ей понравится».',
					uk: 'Не завжди потрібен великий привід, щоб зробити подарунок. Іноді достатньо побачити гарну річ і одразу подумати: «Їй це сподобається».'
				}
			},
			{
				type: 'p',
				text: {
					en: 'And if none of the finished pieces is quite the right one, you can pick an idea you like and talk about a similar piece, made specially for its future owner.',
					pt: 'E se, entre as peças já feitas, não encontrar exactamente a certa, pode escolher uma ideia de que goste e combinar uma peça semelhante, feita especialmente para a sua futura dona.',
					ru: 'А если среди готовых работ не нашлось именно той, можно выбрать понравившуюся идею и обсудить похожее изделие, созданное специально для будущей хозяйки.',
					uk: 'А якщо серед готових робіт не знайшлося саме тієї, можна обрати ідею, яка сподобалася, і обговорити схожий виріб, створений спеціально для майбутньої господині.'
				}
			}
		]
	},
	{
		slug: 'measuring-for-a-knitted-top',
		tagKey: 'journal_tagCare',
		date: '2026-02-14',
		readMinutes: 4,
		title: {
			en: 'How to take measurements for a knitted top',
			pt: 'Como tirar medidas para um top de tricô',
			ru: 'Как снять мерки для вязаного топа',
			uk: 'Як зняти мірки для в’язаного топа'
		},
		excerpt: {
			en: 'Three measurements, a tape measure, and ten minutes — for a perfect fit.',
			pt: 'Três medidas, uma fita métrica e dez minutos — para um caimento perfeito.',
			ru: 'Три замера, сантиметровая лента и десять минут — и вещь сядет идеально.',
			uk: 'Три заміри, сантиметрова стрічка і десять хвилин — і річ сяде ідеально.'
		}
	}
];

export const journalTagKeys = [
	'journal_tagMaterials',
	'journal_tagWorkshop',
	'journal_tagCare',
	'journal_tagIdeas'
];
