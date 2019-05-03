import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import allProducts from "./views/allProducts.vue";
import SingularNews from "./views/singularNews";
import Dashboard from "./views/Dashboard.vue";
import SignUp from "./views/Signup.vue";
import SignIn from "./views/Signin.vue";
import firebase from "firebase";
import AddPost from "./views/AddPost.vue";
import ManagePost from "./views/managePost.vue";
import NotFound404 from "./views/NotFound404.vue";
import Cart from "./views/Cart.vue";
import productDetails from "./views/productDetails.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "NotFound404",
      path: "*",
      component: NotFound404
    },
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "Products",
      path: "/products",
      component: Products,
      children: [
        {
          name: "AllProducts",
          path: "all_products",
          component: allProducts,
        }
      ]
    },
    {
      name: "ProductDetails",
      path: "/products/product_details",
      component: productDetails
    },
    {
      name: "SingularNews",
      path: "/news/:id",
      component: SingularNews
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          name: "AddPost",
          path: "add_post",
          component: AddPost
        },
        {
          name: "ManagePost",
          path: "manage_post",
          component: ManagePost
        }
      ]
    },
    {
      name: "SignUp",
      path: "/signup",
      component: SignUp,
      meta: {
        requiresGuest: true
      }
    },
    {
      name: "SignIn",
      path: "/signin",
      component: SignIn,
      meta: {
        requiresGuest: true
      }
    },
    {
      name: "Cart",
      path: "/cart",
      component: Cart
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  const requiresGuest = to.matched.some(route => route.meta.requiresGuest);
  const currentUser = firebase.auth().currentUser;

  if (currentUser && requiresGuest) {
    next("/");
  } else if (!currentUser && requiresAuth) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
