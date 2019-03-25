import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Signin from "./views/Signin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Signup',
      path: '/signup',
      component: Signup
    },
    {
      name: 'Signin',
      path: '/signin',
      component: Signin
    }
  ]
});
