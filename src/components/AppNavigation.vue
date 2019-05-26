<template>
  <v-toolbar dark color="rgba(0,0,0,0.5)">
    <v-toolbar-title>
      <v-btn flat to="/"> {{ toolbarTitle }} </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y>
        <v-btn flat slot="activator">
          <v-icon left color="white">expand_more</v-icon>
          <span>Products</span>
        </v-btn>

        <v-list>
          <v-list-tile v-for="(link) in productsLinks" :key="link.title" :to="link.route">
            <v-icon :class="link.icon"></v-icon>
            <v-list-tile-title class="align-title">{{link.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat to="/dashboard" v-if="getIsAuthenticated">
        <span>Dashboard</span>
      </v-btn>

      <v-btn color="info" to="/cart">
        <v-badge right>
          <template v-slot:badge>
            <span>{{getProductsInCart.length}}</span>
          </template>
          <v-icon large color="white" class="shopping_cart">
            shopping_cart
          </v-icon>
        </v-badge>
      </v-btn>

      <v-btn flat to="/signup" v-if="!getIsAuthenticated">
        <span>Sign Up</span>
      </v-btn>

      <v-btn flat to="/signin" v-if="!getIsAuthenticated">
        <span>Sign in</span>
      </v-btn>

      <v-btn flat @click="logoutUser" v-else>
        <v-icon size="1.5rem" color="blue darken-2">fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "AppNavigation",
  data() {
    return {
      toolbarTitle: "tech-store",
      productsLinks: [
        { title: 'All Products', route: '/products/all_products', icon: ""},
        { title: 'Smartphones', route: '/products/smartphones', icon : "fas fa-mobile"},
        { title: 'Notebooks', route: '/products/notebooks', icon : "fas fa-laptop" },
      ]
    };
  },
  computed: {
    /*
      getIsAuthenticated() { return this.$store.getters['getIsAuthenticated']; } -> -> is equal to code below!
    */
    ...mapGetters(["getIsAuthenticated", "getProductsInCart"])
  },
  methods: {
    /*
      logoutUser() { this.$store.dispatch('logoutUser'); } -> is equal to code below!
    */
    ...mapActions(["logoutUser"])
  }
};
</script>

<style lang="scss" scoped>
  .align-title { text-align: center; }
  
  svg { margin-right: .5rem; }
</style>

