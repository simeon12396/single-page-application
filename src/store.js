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
    allNotebooks: [
      {
        name: 'Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
        price: 2259,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
        price: 1490,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
        price: 2307,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg',
        stars: 4.4,
        totalReviews: 340,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
        price: 2599,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg',
        stars: 3,
        totalReviews: 30,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Dell Alienware - i7 16GB',
        price: 14000,
        image: 'https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg',
        stars: 2,
        totalReviews: 248,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],
    allSmartphones: [
      {
        name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
        price: 1199,
        image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
        stars: 0,
        totalReviews: 0,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
        price: 929,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
        stars: 1.5,
        totalReviews: 11,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
        price: 3949,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg',
        stars: 1,
        totalReviews: 2,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Samsung Galaxy S7 Edge',
        price: 1943,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png',
        stars: 5,
        totalReviews: 310,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Motorola Moto G6 Plus',
        price: 1699,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg',
        stars: 2.9,
        totalReviews: 42,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Motorola Moto Z3 Play',
        price: 2999,
        image: 'https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg',
        stars: 0.5,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ]
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
      return state.allNotebooks.concat(state.allSmartphones);
    },
    getAllSmartphones(state) {
      return state.allSmartphones;
    },
    getAllNotebooks(state) {
      return state.allNotebooks;
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
