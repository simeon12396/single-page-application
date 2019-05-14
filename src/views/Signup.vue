<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md4>
       <v-card class="elevation-12">
          <v-toolbar dark color="#2196f3">
            <v-toolbar-title>Sign up</v-toolbar-title>
          </v-toolbar>  
          <v-card-text>
            <v-form @submit.prevent="submitSignUpForm(formData)">
              <v-text-field v-model="formData.name" prepend-icon="person" name="name" label="Name" type="text"></v-text-field>
              <v-text-field v-model="formData.email" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
              <v-text-field v-model="formData.password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <v-layout column align-center>
                  <v-flex class="mb-3">
                    <v-btn type="submit" dark color="#2196f3">Sign up</v-btn>
                  </v-flex>
                  <v-flex>
                    <div class="subheading">or Sign In with Google</div>
                  </v-flex>
                  <v-flex class="mt-3">
                    <v-img :src="googleIcon" @click="socialLogin"></v-img>
                  </v-flex>
                </v-layout>
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
  name: 'SignUp',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      },
      googleIcon: require("../assets/images/google.svg")
    }
  },
  methods: {
    /*
      submitSignUpForm() { this.$store.dispatch('submitSignUpForm', this.formData); } -> is equal code below!
    */
   ...mapActions(['submitSignUpForm', 'socialLogin'])
  }
}
</script>

<style lang="scss" scoped>

  .v-image { width: 40px; }

  .v-image:hover { cursor: pointer; }
</style>

