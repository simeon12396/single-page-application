import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Products from './views/Products.vue';
import Dashboard from "./views/Dashboard.vue";
import Favorites from "./views/Favorites.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Products',
      path: '/products',
      component: Products
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'Favorites',
      path: '/favorites',
      component: Favorites,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'SignUp',
      path: '/signup',
      component: SignUp,
      meta: {
        requiresGuest: true
      }
    },
    {
      name: 'SignIn',
      path: '/signin',
      component: SignIn,
      meta: {
        requiresGuest: true
      }
    }
  ]
}); 

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  const requiresGuest = to.matched.some(route => route.meta.requiresGuest);

  firebase.auth().onAuthStateChanged((user) =>{
    /*
      Check the user is signed in or not.

      If (user) {
        //user is signed in.
      }
      else {
        //No user is signed in.
      }
     */
    
    if (user && requiresAuth) {
      next();
    } 
    else if (!user && requiresAuth) {
      next('/signin');
    }
    else if (user && requiresGuest) {
      next('/');
    }
    else if (!user && requiresGuest) {
      next();
    }
    else {
      next();
    }
  });
});

export default router;
