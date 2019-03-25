import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";

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
      name: 'SignUp',
      path: '/signup',
      component: SignUp
    },
    {
      name: 'SignIn',
      path: '/signin',
      component: SignIn
    }
  ]
});
