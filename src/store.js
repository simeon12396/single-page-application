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
    image: null
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
    }
  }
});
