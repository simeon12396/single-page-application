import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase';
import router from './router.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    user: null,
    isAuthenticated: false
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    submitSignUpForm({commit}, payload) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(userData => {
        commit('setUser', userData);
        commit('setIsAuthenticated', true);
        alert(`Your account has been created and you are now connected with ${userData.user.email}!`);
        router.push('/');
      })
      .catch((error) => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        alert('Oops. ' + error.message);
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
      .catch((error) => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        alert('Oops. ' + error.message);
      })
    },
    logoutUser({commit}) {
      firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      })
    }
  }
});
