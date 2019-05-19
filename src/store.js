import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "./router.js";
import createPersistedState from "vuex-persistedstate";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    user: null,
    isAuthenticated: false,
    newsStatus: false,
    fetchAllNews: {},
    singularNews: null,
    retrieveAllnews: {},
    image: null,
    currentProduct:null,
    cartProducts: [],
    informationForNews: null,
    listOfAllProducts: null,
    dataAboutNews: {
      "-Lef6E08Yw0COhwQHVIi": {
        headingSide: {
          baseImage: require("./assets/images/herobook-base-image.jpg"),
          leftImage: require("./assets/images/herobook-left-image.jpg"),
          rightImage: require("./assets/images/herobook-right-image.jpg"),
          description: "The CHUWI Herobook laptop will inspire you to be more productive at work, school or play. Lightweight and stylish, it features a beautiful 14.1'' screen and WiFi for fast connectivity and reliability that you can count on wherever you venture. Thin and light, this boundless device is fast and and the battery has enough juice to power you though your day.",
          logoImage: require("./assets/images/chuwi-logo.jpg")
        },
        informationSide: [
          { imageSrc: require("./assets/images/herobook-image-1.jpg"), title: "14.1'' Anti-Glare Display", desc: "The 14.1'' glare proof screen brings you a wider view and is still clearly visible even in strong outdoor light. Besides, the night mode and color setting will help reduce the onset of eye strain."},
          { imageSrc: require("./assets/images/herobook-image-2.jpg"), title: "Thinner and Lighter",  desc: "The CHUWI Herobook laptop is thinner and lighter. It weighs just 3.06lb and has an amazingly thin 0.8 in profile. It is very convenient to carry with it when you are traveling."},
          { imageSrc: require("./assets/images/herobook-image-3.jpg"), title: "Powerful Performance",  desc: "Powerful and efficient Intel Quad Core X5-E8000 Processor up to 2.0GHz speeds thanks to the 14-nm process technology and 5W ultra-low power design. The built-in HD graphics N3000 ensures faster image processing."},
          { imageSrc: require("./assets/images/herobook-image-4.jpg"), title: "More Storage Space",  desc: "4GB RAM and 64GB storage helps you run multiple apps seamlessly. With up to 128GB TF expansion provides plenty of room for your documents,photos and videos. A separate M.2 SSD expansion is provided for greater space and faster read/write speed."},
          { imageSrc: require("./assets/images/herobook-image-5.jpg"), title: "More Learning Time",  desc: "A monstrous 38Wh polymer lithium-ion battery with ultra-low power interl CPU enables Herobook last over 9 hours. With fast charge technology, you can get longer time for your work or entertainment."},
          { imageSrc: require("./assets/images/herobook-image-6.jpg"), title: "Full Sized Keyboard",  desc: "A full-size borderless keyboard with 17mm keycap and 3mm keypitch ensures supreme typing comfort. Typing on a compact device has never been this comfortable."}
        ]
      },
      "-Lef6Wj13vyoHRuJx6JS": {
        headingSide: {
          baseImage: require("./assets/images/hi9-base-image.jpg"),
          leftImage: require("./assets/images/hi9-left-image.jpg"),
          rightImage: require("./assets/images/hi9-right-image.jpg"),
          description: "CPU: Deca Core MT6797 ( Helio X23 ) Max 2.3GHz Better performance, delivering plenty of power for your use. DDR3 4GB RAM can support more apps and faster system speed.Storage: 64GB ROM can satisfy your daily use, for many photos and videos, you also can insert up to 128GB TF card for expansion.GPU: High-specific graphics processor T880 MP4 is designed for complex graphics programs.Up to 780MHz frequencycan run heavy games smoothly, and provide stunning ultra-high definition visual experience.",
          logoImage: require("./assets/images/chuwi-logo.jpg")
        },
        informationSide: [
          { imageSrc: require("./assets/images/hi9-image-1.jpg"), title: "2.5K Display / 2560 x 16000 Screen", desc: "10.1 inch 10-point Capacitive Screen with 2560 x 1600 resolution boasts impressive color and clarity and IPS technology provides wide viewing angles. A technology called full fit that compresses the air layer between screen components by four times, reducing the glare caused by air refraction, bring you a excellent display performance both indoors and outdoors."},
          { imageSrc: require("./assets/images/hi9-image-2.jpg"), title: "4G SIM Card Available", desc: "Hi9 Air supports high-definition calls and seamless switch between dual SIM network. Enjoy clear video calling and fast internet surfing.Access the web wherever you are. GPS function is also available."},
          { imageSrc: require("./assets/images/hi9-image-3.jpg"), title: "Good for Games - Gaming Tablet", desc: "Because of High performance CPU and GPU. You can run your games smoothly."},
          { imageSrc: require("./assets/images/hi9-image-4.jpg"), title: "High Definition Cameras - HD Camera", desc: "Hi9 Air equips with dual camera, 5.0MP front camera and 13.0MP rear camera. Your pictures will be clearer."},
          { imageSrc: require("./assets/images/hi9-image-5.jpg"), title: "Dual band WiFi", desc: "Top speed 2.4G/5G dual-band WiFi supports 802.11 a/b/g/n/ac protocol. Hence, 5G signal provides stable connection since there is less signal interference."},
          { imageSrc: require("./assets/images/hi9-image-6.jpg"), title: "Power of for all day", desc: "Thanks to 8000mAh polymer battery, the Hi9 Air has an ultra-long standby time of 72 hours,heavy use of 5.5 hours, and long battery life to accompany you throughout the day."}
        ]
      },
      "-Lef6i8FKkdF5DB8VF6A": {
        headingSide: {
          baseImage: require("./assets/images/hi9-plus-base-image.jpg"),
          leftImage: require("./assets/images/hi9-plus-left-image.jpg"),
          rightImage: require("./assets/images/hi9-plus-right-image.jpg"),
          logoImage: require("./assets/images/chuwi-logo.jpg"),
          description: "Doing what you love is easy when the CHUWI Hi9 Plus does it all. Browse and stream for hours with a long-lasting battery on an 2K display that stays clear in any light, from the afternoon sun to a dim room at night. Keep all your memories right on your tablet, thanks to expandable storage."
        },
        informationSide: [
          { imageSrc: require("./assets/images/hi9-plus-image-1.jpg"), title: "Clear and crisp video", desc: "CHUWI Hi9 Plus features a 10.8 inch 2.5K 2560x1600 IPS display for a bright display with vivid colors and whiter whites for a great viewing experience from all angles." },
          { imageSrc: require("./assets/images/hi9-plus-image-2.jpg"), title: "Fast and responsive", desc: "The fast deca-core processor consists of four high-performance 2.3 GHz cores for quick app launches, smooth games and videos, and great overall performance. 4GB RAM and 64GB eMMc storage allows you to install more apps and storage videos, music, etc." },
          { imageSrc: require("./assets/images/hi9-plus-image-3.jpg"), title: "Connects wherever you are", desc: "CHUWI Hi9 Plus supports 4G-LTE and dual WiFi 2.4GHz/5.0GHz. You can watch your favorite show or play games with wifi connected, or make a call when you instert available sim card." },
          { imageSrc: require("./assets/images/hi9-plus-image-4.jpg"), title: "Turn tour tablet into a PC", desc: "Attach the keyboard and you will trun your tablet into a pc. Seamlessly juggle apps and programs with the familiar taskbar, while dragging and dropping between windows." },
          { imageSrc: require("./assets/images/hi9-plus-image-5.jpg"), title: "Do more with unplugged power", desc: "Power up quickly with fast charging. And get up to 10 hours of video playback on a single charge." },
          { imageSrc: require("./assets/images/hi9-plus-image-6.jpg"), title: "Lighter and Thinner", desc: "You can put it into your bag easily thanks to 17.63oz weight and 0.31'' thickness." }
        ]
      },
      "-Lef6x9yIHuWIld6aK_s": {
        headingSide: {
          baseImage: require("./assets/images/hi10-base-image.jpg"),
          leftImage: require("./assets/images/hi10-left-image.jpg"),
          rightImage: require("./assets/images/hi10-right-image.jpg"),
          logoImage: require("./assets/images/chuwi-logo.jpg"),
          description: "Hi10 Air features 469g weight and 8.5mm thiness. It is very convenient to put it into your bag when you are on a business trip or travel."
        },
        informationSide: [
          { imageSrc: require("./assets/images/hi10-image-1.jpg"), title: "Transform your tablet into a PC", desc: "Attach the keyboard cover and it will transform your tablet into a full desktop experience. Seamlessly juggle apps and programs with the familiar taskbar, while dragging and dropping between windows." },
          { imageSrc: require("./assets/images/hi10-image-2.jpg"), title: "Stylus pen provides imagination", desc: "Equipped with advanced pressure sensitivity, the Hi10 Air tablet stylus pen enables you to naturally jot down notes and write memos with full responsiveness." },
          { imageSrc: require("./assets/images/hi10-image-3.jpg"), title: "Capture deails in 1080P definition", desc: "The CHUWI Hi10 Air tablet features a brilliant 10.1 inch 1080P display so you will not miss a thing while watching your favourite movies or playing games." },
          { imageSrc: require("./assets/images/hi10-image-4.jpg"), title: "Powerful Windows 10 Home", desc: "CHUWI Hi10 Air comes with Windows 10 system Inside, delivers the better performance for your study and business. 4GB RAM and 64GB eMMc allow to install more apps and storage documents." },
          { imageSrc: require("./assets/images/hi10-image-5.jpg"), title: "Powerful processor", desc: "The Intel Cherry Trail Z8350 processor combines with Intel HD Graphics 400 gives you great performance while consuming less power. Memory size can easily be expanded by up to 128 GB using a MicroSD card." },
          { imageSrc: require("./assets/images/hi10-image-6.jpg"), title: "Charge fast and go", desc: "Power up quickly with fast charging. And get up to max 4 hours of video playback on a single charge." }
        ]
      }
    },
    allNotebooksV2: {
      "Acer Nitro 5 (AN515-52)": {
        name: "Acer Nitro 5 (AN515-52)",
        oldPrice: 2399,
        newPrice: 1.679,
        characteristics: {
          charOne: "Intel Core i7-8750H",
          charTwo: "NVIDIA GeForce GTX 1060",
          charThree: "16GB DDR4",
          charFour: "256GB SSD + 1TB HDD",
        },
        stars: 5,
        reviewed: 250,
        baseImage: require("./assets/images/acer-nitro-base.jpg"),
        imageOne: require("./assets/images/acer-nitro-1.jpg"),
        titleOne: "Отличен дизайн",
        informationOne: "Acer Nitro 5 се отличава от тълпата със своя дизайн, който споделя агресивния външен вид на висококачествените Predator лаптопи на Acer. Получавате ярко червено осветяване на клавиатурата и големи изпускателни отвори от задната страна.",
        imageTwo: require("./assets/images/acer-nitro-2.jpg"),
        titleTwo: "Acer CoolBoost",
        informationTwo: "Технологията Acer CoolBoost ви дава възможност да управлявате ръчно процеса на охлаждане, като позволява двойната система за охлаждане на вентилатора да доставя до 11% понижение на температурата на процесора и видеокартата.",
        imageThree: require("./assets/images/acer-nitro-3.jpg"),
        titleThree: "Висока производителност",
        informationThree: "Acer Nitro 5 прдължава да бъде едно от най-атрактивните предложения в категорията на бюджетните геймърски ноутбуци. Ако сте геймър, разлика между конфигурацията с i5-8300H и тази с i7-8750H едва ли ще забележите.",
        imageFour: require("./assets/images/acer-nitro-4.jpg"),
        titleFour: "Чудесна картина",
        informationFour: "Nitro 5 (AN515-52) идва с качествен IPS панел с Full HD резолюция (142 ppi), високи яркост и котраст и доста сериозен цветови обхват."
      },
      "Acer Predator Helios 500": {
        name: "Acer Predator Helios 500",
        oldPrice: 3399,
        newPrice: 2.379,
        characteristics: {
          charOne: "AMD Ryzen 7 2700",
          charTwo: "AMD RX Vega 56",
          charThree: "16B DDR4",
          charFour: "256GB SSD NVMe + 1TB HDD"
        },
        stars: 4,
        reviewed: 200,
        baseImage: require("./assets/images/acer-predator-base.jpg"),
        imageOne: require("./assets/images/acer-predator-1.png"),
        titleOne: "Най-ново поколение процесори",
        informationOne: "Acer Predator Helios 500 е гейминг лаптопът който разполага с толкова много видове конфигурации, че ще ви е трудно да изберете. Като започнем от процесорите, Predator 500 разполага с най-новото и най-доброто от Intel в лицето на Core i9-8950HK. За любителите на AMD имаме и вариант с процесор - AMD Ryzen 7 2700, който със свойте 8 ядра и overclock до 4.10 GHz изпълнява всяка задача без затруднение.",
        imageTwo: require("./assets/images/acer-predator-2.png"),
        titleTwo: "Скорост като никой друг",
        informationTwo: "Acer не са пренабрагнали и възможностите за дисково пространство. Лаптопът разполага с място за Хард диск и с два М.2 слота за разширение на паметта, който поддържат PCIe SSD с възможност и за увеличаване на скоростта с Raid 0.",
        imageThree: require("./assets/images/acer-predator-3.png"),
        titleThree: "Дисплей подходящ за всеки",
        informationThree: "Както при процесор и видеокарти, Acer Predator Helios 500 предлага и избор на екрани. Можете да изберете от 2 вида - UHD 4K IPS панел работещ с опреснение до 60Hz и Full HD панел работещ с опреснение до 144Hz - подходящ за запалените геймъри.",
        imageFour: require("./assets/images/acer-predator-4.png"),
        titleFour: "Клавиатура с RGB подсветка",
        informationFour: "Клавиатура е много приятна за писане и игра. Тя има и RGB LED подсветка, а WASD клавишите и стрелките са акцентирани в синьо, за да подчертаят предназначението на тази машина. Горните 6 бутона могат да бъдат използвани за различни режими на производителност и профили на вентилаторите."
      },
      "Acer Aspire 7 (A717-72G)": {
        name: "Acer Aspire 7 (A717-72G)",
        oldPrice: 1949,
        newPrice: 1.364,
        characteristics: {
          charOne: "Intel Core i7-8750H",
          charTwo: "NVIDIA GeForce GTX 1050",
          charThree: "8GB DDR4",
          charFour: "128GB SSD NVMe + 1TB HDD"
        },
        stars: 5,
        reviewed: 350,
        baseImage: require("./assets/images/acer-aspire-base.jpg"),
        imageOne: require("./assets/images/acer-aspire-1.jpg"),
        titleOne: "Устойчив дизайн",
        informationOne: "Acer Aspise 7 (A717-71G) съдържа полиран алуминий в конструкцията си като основен материал, което води до по-голяма стабилност. Клавиатурата също изглежда обновена и по-удобна.",
        imageTwo: require("./assets/images/acer-aspire-2.jpg"),
        titleTwo: "Качество на дисплея",
        informationTwo: "Дисплеят на Acer Aspire 7 (A717-71G) има Full HD панел с IPS матрица. Диагоналът му е 17.3-инчов (43.94 см), а резолюцията 1920 х 1080 пиксела, като притежава изключително комфортни ъгли на видимост.",
        imageThree: require("./assets/images/acer-aspire-3.jpg"),
        titleThree: "Множество интерфейси",
        informationThree: "Ноутбукът притежава много добре подредена конфигурация от портове - отляво намираме повечето конектори като RJ-45 за LAN, USB-C 3.1 (Gen 1), HDMI, USB 3.0 и SD картов четец. Дясната страна приютява буксата за зареждане, два USB 2.0 конектора и 3.5 мм аудио жак.",
        imageFour: require("./assets/images/acer-aspire-4.jpg"),
        titleFour: "Прочети подробното ни ревю",
        informationFour: "Наред с появата на серията Aspire 5, Acer представиха по-мощна версия, наречена Aspire 7, която използва четири ядрени процесори Intel Kaby Lake-H и предлага прилична видеокарта GTX 1050, която е достатъчна за до умерен гейминг."
      },
      "Acer TravelMate B117": {
        name: "Acer TravelMate B117",
        oldPrice: 469,
        newPrice: 328,
        characteristics: {
          charOne: "Intel Celeron N3060",
          charTwo: "Intel HD Graphics 400",
          charThree: "4GB DDR3",
          charFour: "64GB eMMC"
        },
        stars: 4,
        reviewed: 190,
        baseImage: require("./assets/images/acer-travelmate-base.jpg"),
        imageOne: require("./assets/images/acer-travelmate-1.jpg"),
        titleOne: "Лаптоп, предназначен за модерната класна стая",
        informationOne: "Acer попълва гамата си от мобилни компютри с модел лаптоп, който е компактен и предназначен за нуждите на образованието. На капака е разположен светодиод, който променя цвета според избрания вариант за отговор при задаване на въпрос.",
        imageTwo: require("./assets/images/acer-travelmate-2.jpg"),
        titleTwo: "Устойчив дизайн",
        informationTwo: "TravelMate B117 има рамка с гумена лента, която рамкира шасито, за да предпази устройството от неочаквани удари и капки. Теглото му е едва 1.35 кг. Клавиатурата е устойчива на разливане, водоустойчив дизайн, който предпазва от случайни разливи .",
        imageThree: require("./assets/images/acer-travelmate-3.jpg"),
        titleThree: "По-добър начин за взаймодействие",
        informationThree: "Acer TravelMate B117 включва в себе си вградено Acer TeachSmart решение и чрез него се позволяват нови начини на комуникация в класната стая. Учителите получават инструменти и клауд-базирани услуги, с помощта на които размножават и разпространяват учебните материали и събират завършените работите на учениците.",
        imageFour: require("./assets/images/acer-travelmate-4.jpg"),
        titleFour: "Богати възможности за свързване",
        informationFour: "TravelMate B117 е снабден с безжична връзка, което позволява плавни бързи мрежови връзки. Опциите за кабелна връзка включват един USB 3.0 порт, един USB 2.0 порт и един HDMI порт с пълен размер."
      }
    },
    allSmartphonesV2: {
      "Huawei Nova plus 32GB, сив цвят": {
        name: "Huawei Nova plus 32GB, сив цвят",
        oldPrice: 550,
        newPrice: 385,
        characteristics: {
          charOne: '5.5" IPS',
          charTwo: "8-ядрен",
          charThree: "две SIM карти",
          charFour: "16-мегапикселова камера"
        },
        stars: 5,
        reviewed: 220,
        baseImage: require("./assets/images/huawei-nova-base.jpg"),
        imageOne: require("./assets/images/huawei-nova-1.jpg"),
        titleOne: "Стилно метално тяло",
        informationOne: "Huawei nova plus разполага с изключително изискан дизайн с дебелина на профила от само 7.3 милиметра и заоблени краища за по-комфортен захват. Конструкцията включва алуминиево-магнезиева сплав, като 90% от тялото е изработено от метал. В предната част има 2.5D сстъкло с леки извивки по краищата, които правят цялостната визия на смартфона още по-привлекателна.",
        imageTwo: require("./assets/images/huawei-nova-2.jpg"),
        titleTwo: "5.5-инчов дисплей",
        informationTwo: "Дисплеят на смартфона е с диагонал от 5.5 инча, като разделителната му способност е Full HD (1920 x 1080). Това ще ви осигури висока детайлност на картината с гъстота на пикселите от около 401ppi, Насреща е и IPS матрица, която ще направи изображенията по-контрастни и ярки, а ъглите на видимост по-широки.",
        imageThree: require("./assets/images/huawei-nova-3.jpg"),
        titleThree: "16MP камера",
        informationThree: "Основната камера е 16-мегапикселова, като тя може да се похвали с оптична стабилизация, която ще премахне нежеланите размазани изображения. Благодарение на f/2.0 блендата пък ще може да се възползвате и от качествени снимки при по-ниска осветеност, а насреща са още бърз автофокус, двойна LED светкавица, както и възможност за заснемане на 4K видео.",
        imageFour: require("./assets/images/huawei-nova-4.jpg"),
        titleFour: "8-ядрен Snapdragon 625",
        informationFour: "Huawei nova plus също притежава Snapdragon 625, който вклчва осем Cortex-A53 ядра, работещи с тактова честота до 2.00GHz. На разположение са също Adreno 506 видеокарта, както и 3GB оперативна памет, така че може да очаквате пъргава работа с устройството."
      },
      "Samsung Galaxy A9 (SM-А950F) 128GB, син цвят": {
        name: "Samsung Galaxy A9 (SM-А950F) 128GB, син цвят",
        oldPrice: 898,
        newPrice: 628,
        characteristics: {
          charOne: '6.3" Super AMOLED',
          charTwo: "8-ядрен",
          charThree: "две SIM карти",
          charFour: "четворна задна 24MP камера"
        },
        stars: 5,
        reviewed: 400,
        baseImage: require("./assets/images/samsung-a9-base.jpg"),
        imageOne: require("./assets/images/samsung-a9-1.jpg"),
        titleOne: "4 пъти повече забавление с първата четворна камера в света",
        informationOne: "Открий четири пъти повече начини да правиш зашеметяващи снимки. Galaxy A9 има четири задни камери, за да улавя почти всеки момент. Освен това усъвършенства снимките ти с лекота благодарение на интелигентните функции като оптимизиране на сцените и откриване на дефекти.",
        imageTwo: require("./assets/images/samsung-a9-2.jpg"),
        titleTwo: "Направена така, че да правиш повече",
        informationTwo: "Възползвай се от предимството на хипермобилния начин на живот с колоритния Galaxy A9. Увековечи прекрасни снимки с първата в света четворна камера. Потопи се в 6,3-инчовия инфинити дисплей и съраунд звук Dolby Atmos. Благодарение на елегантния и ергономичен дизайн ръцете ти ще се чувстват комфортно, докато ти продължаваш да бъдеш свързан.",
        imageThree: require("./assets/images/samsung-a9-3.jpg"),
        titleThree: "Приближаване към детайлите",
        informationThree: "Улови пейзажа, където и да си. Galaxy A9 има 10-MP камера с телеобектив и 2х оптично приближаване, която заснема красиви и подробни снимки дори и от разстояние.",
        imageFour: require("./assets/images/samsung-a9-4.jpg"),
        titleFour: "Стил, в който ще се влюбиш",
        informationFour: "Galaxy A9 е създаден да подхожда на вкуса ти, независимо дали предпочиташ класическия цвят - гланцов „черен хайвер” или искаш да се отърсиш от монохромните цветове с дръзките и уникални преливащи цветове „синя лимонада” или „бонбонено розово”. На усещане е също толкова приятен, колкото и на външен вид, заради своя ергономичен дизайн за по-удобен захват."
      },
      "Samsung Galaxy J6+ (SM-J610F), Dual 32GB, червен": {
        name: "Samsung Galaxy J6+ (SM-J610F), Dual 32GB, червен",
        oldPrice: 359,
        newPrice: 251,
        characteristics: {
          charOne: "6-инчов Super AMOLED",
          charTwo: "4-ядрен",
          charThree: "сензор за пръстов отпечатък",
          charFour: "двойна 13 + 5-мегапикселова камера"
        },
        stars: 5,
        reviewed: 230,
        baseImage: require("./assets/images/samsung-j6-base.jpg"),
        imageOne: require("./assets/images/samsung-j6-1.jpg"),
        titleOne: "По-голям екран, повече видимост",
        informationOne: "Приготви се да достигнеш ново, по-високо ниво на изживяването по време на гледане. Galaxy J6+ разполага с поразителен 6.0-инчов инфинити дисплей с оптимизирано съотношение на екрана 18.5:9. А благодарение на олекотения и фин дизайн можеш да гледаш любимото си съдържание още по-удобно.",
        imageTwo: require("./assets/images/samsung-j6-2.jpg"),
        titleTwo: "Oтличи се със стил",
        informationTwo: "Луксозен стил, толкова приятен на допир. Galaxy J6+ се отличава с гладък дизайн със заоблени ръбове, който приляга удобно в ръката. Освен това се откроява с първокласно гланцово покритие и се предлага в серия от модерни цветови опции, включително в червено, черно и сиво за допълнителен стилен щрих.",
        imageThree: require("./assets/images/samsung-j6-3.jpg"),
        titleThree: "Затвор, който се измества, където е необходим",
        informationThree: "Благодарение на предната 8-мегапикселова и задната 13-мегапикселова двойна камера 13MP(F1,9)/5MP(F2,2) Galaxy J6+ вдъхва повече увереност при заснемане на снимки. Плаващият бутон за затвора улеснява процеса на снимане, защото ти дава възможността да освободиш затвора от всяко място на екрана.",
        imageFour: require("./assets/images/samsung-j6-4.jpg"),
        titleFour: "Създай история със снимките си",
        informationFour: "Редактирай снимките и видеоклиповете си, за да създадеш своя лична история и да организираш изображенията и видеоклиповете си по теми. Със своето съдържание можеш лесно да ги категоризираш благодарение на по-усъвършенстваните функции."
      },
      "Huawei Mate 20 Lite, 64GB, златист цвят": {
        name: "Huawei Mate 20 Lite, 64GB, златист цвят",
        oldPrice: 549,
        newPrice: 384,
        characteristics: {
          charOne: '6.3" IPS',
          charTwo: "8-ядрен",
          charThree: "сензор за пръстов отпечатък",
          charFour: "20-мегапикселова камера"
        },
        stars: 5,
        reviewed: 400,
        baseImage: require("./assets/images/huawei-p20-lite-base.jpg"),
        imageOne: require("./assets/images/huawei-p20-lite-1.jpg"),
        titleOne: "Твоят доверен партньор",
        informationOne: "Зашеметяващата картина на 6.3-инчовия FHD+ (2340 x 1080) FullView дисплей те потапя в магически моменти, а гладкият симетричен корпус гарантира удобно ползване на устройството в ръката ти.",
        imageTwo: require("./assets/images/huawei-p20-lite-2.jpg"),
        titleTwo: "Селфи майстор с изкуствен интелект",
        informationTwo: "Функцията за автоматично разкрасяване, с помощта на изкуствения интелект, прави селфитата ти забележителни. Предната 24 MP + 2 MP камера с реалистичен боке ефект, придава зашеметяваща композиция на селфитата ти. Това е възможно благодарение на изкуствения интелект, който е базиран на осем сценични категории, за да те заснеме в пълния ти блясък.",
        imageThree: require("./assets/images/huawei-p20-lite-3.jpg"),
        titleThree: "Брилянтна светкавица: HDR Pro",
        informationThree: "Професионалната HDR технология е също подбрена с помощта на изкуствен интелект, позволявайки правенето на превюта в реално време на HDR снимки и видеоклипове. Резултатът са реалистични цветни снимки и ясни записи, дори при слаба осветеност.",
        imageFour: require("./assets/images/huawei-p20-lite-4.jpg"),
        titleFour: "Надежден и издръжлив",
        informationFour: "Мощната 3 750 mAh батерия гарантира, че довереният ти партньор е там за теб денонощно. HUAWEI Quick Charge ти позволява да поддържаш ритъма си през цялото време."
      }
    }
  },
  plugins: [createPersistedState()],
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getNewsStatus(state) {
      return state.newsStatus;
    },
    getFetchAllNews(state) {
      return state.fetchAllNews;
    },
    getSingularNews(state) {
      return state.singularNews;
    },
    getRetrieveAllnews(state) {
      return state.retrieveAllnews;
    },
    getImgUpload(state) {
      return state.image;
    },
    getAllProducts(state) {
      return state.listOfAllProducts = {...state.allNotebooksV2, ...state.allSmartphonesV2};
    },
    getAllSmartphones(state) {
      return state.allSmartphonesV2;
    },
    getAllNotebooks(state) {
      return state.allNotebooksV2;
    },
    getCurrentProduct(state) {
      return state.currentProduct;
    },
    getProductsInCart(state) {
      return state.cartProducts;
    },
    getInformationForNews(state) {
      return state.informationForNews;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setNewsStatus(state, payload) {
      state.newsStatus = payload;
    },
    setResetNewsStatus(state, payload) {
      state.newsStatus = payload;
    },
    setFetchAllNews(state, payload) {
      state.fetchAllNews = payload;
    },
    setFetchSingularNews(state, payload) {
      state.singularNews = payload;
    },
    setRetrieveAllNews(state, payload) {
      state.retrieveAllnews = payload;
    },
    setImgUpload(state, payload) {
      state.image = payload.secure_url;
    },
    setClearImgUpload(state) {
      state.image = "";
    },
    setCurrentProduct(state, payload) {
      state.currentProduct = payload;
    },
    setAddProduct(state, payload) {
      state.cartProducts.push(payload);
    },
    setDeleteProduct(state, payload) {
      state.cartProducts.splice(payload, 1);
    },
    setSearchNews(state, payload) {
      for(let key in state.dataAboutNews) {
        if (key === payload) {
          state.informationForNews = state.dataAboutNews[key];
        }
      }
    },
    setClearCurrentInfoNews(state) {
      state.informationForNews = null;
    },
    setResetCart(state) {
      if(state.user === null) {
        alert(`Please, login or signup!`);
        router.push('/signin');
      } else if (state.cartProducts.length < 1) {
        alert('Your cart is empty!');
      } else {
        alert(`Thank you, ${state.user.user.email}! Your order was successful processed!`)
        state.cartProducts = [];
        router.push('/products/all_products');
      }
    }
  },
  actions: {
    submitSignUpForm({commit}, payload) {
      firebase.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(userData => {
        commit('setUser', userData);
        commit('setIsAuthenticated', true);
        alert(`Your account has been created and you are now connected with ${userData.user.email}!`)
        router.push('/');
      })
      .catch((signUpError) => {
        alert(`Oops. ${signUpError.message}`)
      })
    },
    submitSignInForm({commit}, payload) {
      firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(userData => {
        commit('setUser', userData);
        commit('setIsAuthenticated', true);
        alert(`Well done! You are now connected with ${userData.user.email}!`);
        router.push('/');
      })
      .catch((signInError) => {
        alert('Oops. ' + signInError.message);
      })
    },
    socialLogin({commit}) { 
      const googleProvider = new firebase.auth.GoogleAuthProvider();

      firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(userDataFromGoogle => {
        commit('setUser', userDataFromGoogle);
        commit('setIsAuthenticated', true);
        router.push('/')
      }) 
    },
    logoutUser({commit}) {
      firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/signup');
      })
    },
    submitAddNews({commit}, payload) {
      firebase
      .database()
      .ref('news')
      .push( {...payload} );
      commit('setNewsStatus', true);
      setTimeout(() => {
        commit('setResetNewsStatus', false);
      }, 1500);
    },
    fetchAllNews({commit}) {
      firebase.database().ref('news').once('value')
      .then((dataSnapshot) => {
        console.log(dataSnapshot.val());
        commit('setFetchAllNews', dataSnapshot.val());
      })
    },
    fetchSingularNews({commit}, payload) {
      firebase.database().ref(`news/${payload}`).once('value')
      .then(dataSnapshot => {
        commit('setFetchSingularNews', dataSnapshot.val());
      })
    },
    retrieveAllNews({commit}) {
      firebase.database().ref('news').on('value', dataSnapshot => {
        commit('setRetrieveAllNews', dataSnapshot.val());
      })
    },
    deleteNews({commit}, payload) {
      setTimeout(() => {
        firebase.database().ref(`news/${payload}`).remove();
      }, 1000);
    },
    imgUpload({commit}, payload) {
      const cloudinary_url = "https://api.cloudinary.com/v1_1/dq6edue1z/image/upload";
      const cloudinary_preset = "ulugwxnr";

      let formData = new FormData();

      formData.append('file', payload);
      formData.append('upload_preset', cloudinary_preset);

      axios.post(cloudinary_url, formData, {
        'Content-type': 'application/x-www-form-urlencoded'
      })
      .then(response => {
        commit('setImgUpload', response.data);
      })
    },
    /*currentProduct({commit}, payload) {
      commit('setCurrentProduct', payload);
    },
    addProduct({commit}, payload) {
      commit('setAddProduct', payload);
    },
    deleteProduct({commit}, payload) {
      commit('setDeleteProduct', payload);
    }*/
  }
});
