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
		readMinutes: 4,
		title: {
			en: 'How to care for beadwork jewellery',
			pt: 'Como cuidar de joias em contas',
			ru: 'Как ухаживать за изделиями из бисера',
			uk: 'Як доглядати за виробами з бісеру'
		},
		excerpt: {
			en: 'Storage, cleaning, and what not to do so the thread lasts for years.',
			pt: 'Armazenamento, limpeza e o que evitar para o fio durar anos.',
			ru: 'Хранение, чистка и что точно не стоит делать, чтобы нить прослужила годы.',
			uk: 'Зберігання, чищення і чого точно не варто робити, щоб нитка прослужила роки.'
		}
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
		date: '2026-03-03',
		readMinutes: 3,
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
		}
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
