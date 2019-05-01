<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
       <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="submitSignInForm(formData)">
              <v-text-field v-model="formData.email" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
              <v-text-field v-model="formData.password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <div class="caption">You don't have an account? You can <router-link to="/signup">create one</router-link></div>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="primary" >Sign in</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SignIn',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    /*
      submitSignInForm() { this.$store.dispatch('submitSignInForm', this.formData); } -> is equal to code below!
    */
   ...mapActions(['submitSignInForm'])
  }
}
</script>

<style scoped>

</style>

