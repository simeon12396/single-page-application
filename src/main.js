import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase';
import wysiwyg from "vue-wysiwyg";
import vuelidate from "vuelidate";
import VueZoomer from 'vue-zoomer';
import VueShareSocial from 'vue-share-social';
import 'vue-zoomer/dist/vue-zoomer.css'

Vue.config.productionTip = false;
Vue.use(wysiwyg, {});
Vue.use(vuelidate);
Vue.use(VueZoomer);
Vue.use(VueShareSocial);
let app = '';

 // Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD-Ygd2f2oJ6Mboku_iV51ogtNz2ZlEEFs",
  authDomain: "single-page-application-ff8b2.firebaseapp.com",
  databaseURL: "https://single-page-application-ff8b2.firebaseio.com",
  projectId: "single-page-application-ff8b2",
  storageBucket: "single-page-application-ff8b2.appspot.com",
  messagingSenderId: "441199291479"
});

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

