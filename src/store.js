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
    submitSignup({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(userData => {
        console.log('SIGNUP!');
        commit('setUser', userData);
        commit('setIsAuthenticated', true);
        router.push('/');
      })
      .catch(() => {
        console.log('ERROR SIGNUP!');
        commit('setUser', null);
        commit('setIsAuthenticated', false);
      })
    },
    submitSignin({commit}, payload) {
      firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(userData => {
        console.log('CREATED SIGNIN!');
        commit('setUser', userData);
        commit('setIsAuthenticated', true);
        router.push('/');
      })
      .catch((error) => {
        console.log('ERROR SIGNIN!');
        commit('setUser', null);
        commit('setIsAuthenticated', false);
      })
    },
    logoutUser({commit}) {
      firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('LOGOUT SUCCESS');
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/signin');
      })
    }
  }
});
