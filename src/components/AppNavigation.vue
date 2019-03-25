<template>
  <v-toolbar>
    <v-toolbar-title> 
      <v-btn flat to="/"> {{toolbarTitle}} </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/signup" v-if="!isAuthenticated">
        <v-icon size="1.5rem" color="blue darken-2">fas fa-user-plus</v-icon>
      </v-btn>
      <v-btn flat to="/signin" v-if="!isAuthenticated">
        <v-icon size="1.5rem" color="blue darken-2">fas fa-user</v-icon>
      </v-btn>
      <v-btn flat @click="logoutUser" v-else>
        <v-icon size="1.5rem" color="blue darken-2">fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      toolbarTitle: 'WebTech'
    }
  },
  computed: {
    //return answer whether user is authenticated or not. If it's - return true, if it's - not return false.
    isAuthenticated() {
      return this.$store.getters.getIsAuthenticated;
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser');
    }
  }
}
</script>

<style scoped>

</style>
