import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase';
import router from './router.js';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    user: null,
    isAuthenticated: false,
    newsStatus: false,
    fetchAllNews: {},
    singularNews: null
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
      }, 3000);
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
    }
  }
});
