<template>
  <v-toolbar dark color="rgba(0,0,0,0.5)">
    <v-toolbar-title>
      <v-btn flat to="/"> {{ toolbarTitle }} </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/products">
        <span>Products</span>
      </v-btn>
      <v-btn flat to="/dashboard" v-if="getIsAuthenticated">
        <span>Dashboard</span>
      </v-btn>
      <v-btn flat to="/favorites" v-if="getIsAuthenticated">
        <span>Favorites</span>
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
      toolbarTitle: "WebTech"
    };
  },
  computed: {
    /*
      getIsAuthenticated() { return this.$store.getters['getIsAuthenticated']; } -> -> is equal to code below!
    */
    ...mapGetters(["getIsAuthenticated"])
  },
  methods: {
    /*
      logoutUser() { this.$store.dispatch('logoutUser'); } -> is equal to code below!
    */
    ...mapActions(["logoutUser"])
  }
};
</script>

<style scoped></style>
