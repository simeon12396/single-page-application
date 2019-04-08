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
    postStatus: false,
    fetchAllPosts: {}
  },
  plugins: [createPersistedState()],
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getPostStatus(state) {
      return state.postStatus;
    },
    getFetchAllPosts(state) {
      return state.fetchAllPosts;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setClearPostStatus(state, payload) {
      state.postStatus = payload;
    },
    setPostStatus(state, payload) {
      state.postStatus = payload;
    },
    setResetPostStatus(state, payload) {
      state.postStatus = payload;
    },
    setFetchAllPosts(state, payload) {
      state.fetchAllPosts = payload;
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
    submitAddPost({commit}, payload) {
      firebase
      .database()
      .ref('news')
      .push( {...payload} );
      commit('setPostStatus', true);
      setTimeout(() => {
        commit('setResetPostStatus', false);
      }, 3000);
    },
    fetchAllPosts({commit}) {
      firebase.database().ref('news').once('value')
      .then((dataSnapshot) => {
        console.log(dataSnapshot.val());
        commit('setFetchAllPosts', dataSnapshot.val());
      })
    }
  }
});
