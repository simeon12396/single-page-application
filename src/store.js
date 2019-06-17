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
    allNotebooksV4: {
      "Acer Nitro 5 (AN515-52)": {
        name: "Acer Nitro 5 (AN515-52)",
        oldPrice: 2399,
        newPrice: 1679,
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
        titleOne: "Excellent design",
        informationOne: "Acer Nitro 5 stands out from the crowd with its design that shares the aggressive look of Acer's high-quality Predator laptops. You get bright red keyboard illumination and large exhaust openings on the back side.",
        imageTwo: require("./assets/images/acer-nitro-2.jpg"),
        titleTwo: "Acer CoolBoost",
        informationTwo: "Acer CoolBoost Technology gives you the ability to manually control the cooling process by allowing the dual cooling fan system to deliver up to 11% decrease in CPU and video card temperature.",
        imageThree: require("./assets/images/acer-nitro-3.jpg"),
        titleThree: "High performance",
        informationThree: "Acer Nitro 5 is one of the most attractive offers in the category of budget gaming notebooks. If you are a gamer, the difference between the configuration with i5-8300H and the one with i7-8750H will hardly notice.",
        imageFour: require("./assets/images/acer-nitro-4.jpg"),
        titleFour: "Great picture",
        informationFour: "Nitro 5 (AN515-52) comes with a quality IPS panel with Full HD resolution (142 PPI), high brightness and kotrast and a fairly serious color range."
      },
      "Acer Predator Helios 500": {
        name: "Acer Predator Helios 500",
        oldPrice: 3399,
        newPrice: 2379,
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
        titleOne: "Latest Generation Processors",
        informationOne: "Acer Predator Helios 500 is the gaming laptop which has so many types of configurations that you will find it difficult to choose. Starting from the processors, the Predator 500 features the latest and greatest of Intel in the face of Core I9-8950HK. For AMD fans We also have an option with a processor-AMD Ryzen 7 2700, which with its 8 cores and overclock to 4.10 GHz perform every task without difficulty.",
        imageTwo: require("./assets/images/acer-predator-2.png"),
        titleTwo: "Speed like no other",
        informationTwo: "Acer does not have the capability to be overwritten and the available disk space. The laptop has a hard drive space with two M. 2 Memory expandable slots that support PCIe SSD with the ability to increase speed with Raid 0.",
        imageThree: require("./assets/images/acer-predator-3.png"),
        titleThree: "Display suitable for everyone",
        informationThree: "As with processor and video cards, the Acer Predator Helios 500 also offers a selection of screens. You can choose from 2 types-UHD 4K IPS panel working with refreshing up to 60Hz and Full HD panel working with refreshing up to 144Hz-suitable for avid gamers.",
        imageFour: require("./assets/images/acer-predator-4.png"),
        titleFour: "RGB backlit keyboard",
        informationFour: "Keyboard is very enjoyable for writing and playing. It also has an RGB LED backlight, and the WASD keys and arrows are accented in blue to emphasize the purpose of this machine. The above 6 buttons can be used for different performance modes and fans profiles."
      },
      "Acer Aspire 7 (A717-72G)": {
        name: "Acer Aspire 7 (A717-72G)",
        oldPrice: 1949,
        newPrice: 1364,
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
        titleOne: "Durable design",
        informationOne: "Acer Aspise 7 (A717-71G) contains polished aluminum in its structure as the main material, resulting in greater stability. The keyboard also looks upgraded and more comfortable.",
        imageTwo: require("./assets/images/acer-aspire-2.jpg"),
        titleTwo: "Display quality",
        informationTwo: "The Acer Aspire 7 (A717-71G) display has a Full HD panel with an IPS matrix. Its diagonal is 17.3-inch (43.94 cm), and the resolution 1920 x 1080 pixels, having extremely comfortable angles of vision.",
        imageThree: require("./assets/images/acer-aspire-3.jpg"),
        titleThree: "Multiple interfaces",
        informationThree: "The notebook has a very well arranged port configuration-on the left we find most connectors such as RJ-45 for LAN, USB-C 3.1 (Gen 1), HDMI, USB 3.0 and SD card reader. The right side shelters the charging socket, two USB 2.0 connectors and a 3.5 mm audio jack.",
        imageFour: require("./assets/images/acer-aspire-4.jpg"),
        titleFour: "Read our detailed review",
        informationFour: "Alongside the advent of the Aspire 5 series, Acer presented a more powerful version called Aspire 7, which uses four Intel Kaby Lake-H core processors and offers a decent GTX 1050 video card, which is sufficient for up to moderate gaming."
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
        titleOne: "Laptop Designed for modern classroom",
        informationOne: "Acer completes its range of mobile PCs with a laptop model that is compact and designed for the needs of education. An LED is located on the lid, which changes color according to the chosen option to answer when asking a question.",
        imageTwo: require("./assets/images/acer-travelmate-2.jpg"),
        titleTwo: "Durable design",
        informationTwo: "The TravelMate B117 has a frame with a rubber band that ramps the chassis to protect the device from unexpected shocks and drops. Its weight is only 1.35 kg. The keyboard is a spill-resistant, waterproof design that protects against accidental spills.",
        imageThree: require("./assets/images/acer-travelmate-3.jpg"),
        titleThree: "A better way to Synergy",
        informationThree: "Acer TravelMate B117 incorporates a built-in Acer TeachSmart solution and allows for new ways of communicating in the classroom. Teachers receive tools and cloud-based services, with the help of which they multiply and disseminate the learning materials and collect the completed work of the students.",
        imageFour: require("./assets/images/acer-travelmate-4.jpg"),
        titleFour: "Rich connectivity",
        informationFour: "The TravelMate B117 is equipped with a wireless connection that allows for smooth, fast network connections. Cable connection options include one USB 3.0 port, one USB 2.0 port and one full-size HDMI port."
      }
    },
    allSmartphonesV4: {
      "Huawei Nova plus 32GB, silver": {
        name: "Huawei Nova plus 32GB, silver",
        oldPrice: 550,
        newPrice: 385,
        characteristics: {
          charOne: '5.5" IPS',
          charTwo: "Octa-core 2.0 GHz Cortex-A53",
          charThree: "Hybrid Dual SIM",
          charFour: "16MP"
        },
        stars: 5,
        reviewed: 220,
        baseImage: require("./assets/images/huawei-nova-base.jpg"),
        imageOne: require("./assets/images/huawei-nova-1.jpg"),
        titleOne: "Stylish metal menu",
        informationOne: "Huawei Nova Plus has an exceptionally exquisite design with a profile thickness of just 7.3 millimeters and rounded edges for a more comfortable grip. The design includes aluminum-magnesium alloy, with 90% of the body made of metal. In front there are 2.5 D withglass with light curves on the edges that make the overall vision of the smartphone even more attractive.",
        imageTwo: require("./assets/images/huawei-nova-2.jpg"),
        titleTwo: '5.5." display',
        informationTwo: "The smartphone display has a diagonal of 5.5 inches and its resolution is Full HD (1920 x 1080). This will provide you with a high-definition picture with a pixel density of about 401ppi, it is also an IPS matrix that will make images more contrasting and vivid, and the angles of visibility wider.",
        imageThree: require("./assets/images/huawei-nova-3.jpg"),
        titleThree: "16MP camera",
        informationThree: "The main camera is 16-megapixel, as it can boast of optical stabilization that will remove unwanted blurry images. Thanks to the F/2.0 aperture, you will also be able to take advantage of quality photos in lower light conditions, as well as fast autofocus, dual LED flash, and 4K video capture capability.",
        imageFour: require("./assets/images/huawei-nova-4.jpg"),
        titleFour: "Qualcomm Snapdragon 625",
        informationFour: "Huawei Nova Plus also owns the Snapdragon 625, which includes eight Cortex-A53 cores operating at a clock speed of up to 2.00 GHz. A Adreno 506 video card is also available, as well as 3GB of RAM, so you can expect a agile handling of the device."
      },
      "Samsung Galaxy A9 (SM-А950F) 128GB, blue": {
        name: "Samsung Galaxy A9 (SM-А950F) 128GB, blue",
        oldPrice: 898,
        newPrice: 628,
        characteristics: {
          charOne: '6.3" Super AMOLED',
          charTwo: "Octa-Core Processor",
          charThree: "Dual SIM",
          charFour: "24MP Front camera"
        },
        stars: 5,
        reviewed: 400,
        baseImage: require("./assets/images/samsung-a9-base.jpg"),
        imageOne: require("./assets/images/samsung-a9-1.jpg"),
        titleOne: "Four times more fun with the worlds' first quad camera",
        informationOne: "Find four times more ways to take stunning photos. The Galaxy A9 has four rear cameras to capture almost every moment. It also refines your photos with ease thanks to intelligent features like scene optimisation and defect detection.",
        imageTwo: require("./assets/images/samsung-a9-2.jpg"),
        titleTwo: "Designed to do more",
        informationTwo: "Take advantage the advantage of the hyper-mobile lifestyle with the colorful Galaxy A9. Perpetuate wonderful pictures with the world's first quadruple camera. Immerse yourself in the 6.3-inch infinity display and Dolby Atmos surround sound. Thanks to the sleek and ergonomic design, your hands will feel comfortable while you are still connected.",
        imageThree: require("./assets/images/samsung-a9-3.jpg"),
        titleThree: "Zoom in to details",
        informationThree: "Capture the landscape wherever you are. The Galaxy A9 has a 10-MP camera with a telephoto lens and 2x optical zoom that captures beautiful and detailed photos even remotely.",
        imageFour: require("./assets/images/samsung-a9-4.jpg"),
        titleFour: "Style you will love",
        informationFour: 'The Galaxy A9 is designed to suit your taste, whether you prefer the classic colour-glossy "Black Caviar" or you want to shake off the monochrome colors with bold and unique iridescent colors "blue lemonade" or "Candy Pink". The sensation is just as pleasing as the look, because of its ergonomic design for a more comfortable grip.'
      },
      "Samsung Galaxy J6+ (SM-J610F), Dual 32GB, black": {
        name: "Samsung Galaxy J6+ (SM-J610F), Dual 32GB, black",
        oldPrice: 359,
        newPrice: 251,
        characteristics: {
          charOne: "6-inch Super AMOLED",
          charTwo: "Qualcomm Snapdragon 425",
          charThree: "Fingerprint sensor",
          charFour: "13MP + 5MP"
        },
        stars: 5,
        reviewed: 230,
        baseImage: require("./assets/images/samsung-j6-base.jpg"),
        imageOne: require("./assets/images/samsung-j6-1.jpg"),
        titleOne: "Larger screen, more visibility",
        informationOne: "Get ready to reach a new, higher level of experience while watching. Galaxy J6 + features an astounding 6.0-inch infinity display with optimized screen ratio 18.5:9. And thanks to its lightweight and subtle design, you can look at your favourite content even more comfortably.",
        imageTwo: require("./assets/images/samsung-j6-2.jpg"),
        titleTwo: "It is a style",
        informationTwo: "Luxurious style, so pleasant to the touch. The Galaxy J6 + features a slick design with rounded edges that fits comfortably in the hand. It also stands out with a premium glossy finish and comes in a range of modern color options, including red, black and grey for an extra stylish touch.",
        imageThree: require("./assets/images/samsung-j6-3.jpg"),
        titleThree: "A prison that shifts where necessary",
        informationThree: "Thanks to the front 8-megapixel and rear 13-megapixel dual-camera 13MP (F1,9)/5MP (F2,2) Galaxy J6 + inspires more confidence in capturing photos. The floating shutter button facilitates the shooting process because it gives you the ability to release the shutter from anywhere on the screen.",
        imageFour: require("./assets/images/samsung-j6-4.jpg"),
        titleFour: "Create a story with your photos",
        informationFour: "Edit your photos and videos to create your own personal history and organize your images and videos by theme. With its content, you can easily categorize them thanks to more advanced features."
      },
      "Huawei Mate 20 Lite, 64GB": {
        name: "Huawei Mate 20 Lite, 64GB",
        oldPrice: 549,
        newPrice: 384,
        characteristics: {
          charOne: '6.3" IPS',
          charTwo: "HiSilicon Kirin 710",
          charThree: "Fingerprint sensor",
          charFour: "20MP + 2MP"
        },
        stars: 5,
        reviewed: 400,
        baseImage: require("./assets/images/huawei-p20-lite-base.jpg"),
        imageOne: require("./assets/images/huawei-p20-lite-1.jpg"),
        titleOne: "Your trusted Partner",
        informationOne: "The stunning picture of the 6.3-inch FHD + (2340 x 1080) FullView display immerses you in magical moments, while the smooth symmetrical casing ensures comfortable use of the device in your hand.",
        imageTwo: require("./assets/images/huawei-p20-lite-2.jpg"),
        titleTwo: "Selfie master with artificial intelligence",
        informationTwo: "The auto-beautify feature, with the help of artificial intelligence, makes your selfies remarkable. The front 24 MP + 2 MP camera with realistic bokeh effect gives a stunning composition to your selfies. This is possible thanks to artificial intelligence, which is based on eight-stage categories to capture you in full splendor.",
        imageThree: require("./assets/images/huawei-p20-lite-3.jpg"),
        titleThree: "Brilliant Flash: HDR Pro",
        informationThree: "The professional HDR technology is also a subshore with the help of artificial intelligence, allowing the real-time use of HDR photos and videos. The result is realistic color photographs and clear recordings, even in low light conditions.",
        imageFour: require("./assets/images/huawei-p20-lite-4.jpg"),
        titleFour: "Reliable and durable",
        informationFour: "The powerful 3 750 mAh battery ensures your trusted partner is there for you around the clock. HUAWEI Quick Charge allows you to maintain your rhythm all the time."
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
      return state.listOfAllProducts = {...state.allNotebooksV4, ...state.allSmartphonesV4};
    },
    getAllSmartphones(state) {
      return state.allSmartphonesV4;
    },
    getAllNotebooks(state) {
      return state.allNotebooksV4;
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
    sendSubscribeMsg({commit}, payload) {
      firebase.database().ref('subscribers').push(payload)
      .then(response => alert('Thank you for subscribing!'))
    },
    sendContactUsMsg({commit}, payload) {
      firebase.database().ref('connectedUsers').push({...payload})
      .then(response => alert('Thank you for contacting us!'))
    }
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
