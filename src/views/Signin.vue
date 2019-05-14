<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
       <v-card class="elevation-12">
          <v-toolbar dark color="#2196f3">
            <v-toolbar-title>Sign in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="submitSignInForm(formData)">
              <v-text-field v-model="formData.email" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
              <v-text-field v-model="formData.password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <v-layout column class="wrapper-flex">
                  <v-flex class="mb-2">

                    <v-layout column align-center>
                      <v-flex class="mb-3">
                        <v-btn type="submit" dark color="#2196f3">Sign in</v-btn>
                      </v-flex>
                      <v-flex>
                         <div class="subheading mb-3">or Sign In with Google</div>
                       </v-flex>
                       <v-flex>
                         <v-img :src="googleIcon" @click="socialLogin"></v-img>
                       </v-flex>
                    </v-layout>

                  </v-flex>

                  <v-flex>
                     <v-layout column align-center>
                       <v-flex>
                        <div class="subheading">You don't have an account? You can <router-link to="/signup" class="child-subheading">create one</router-link></div>
                      </v-flex>
                     </v-layout>
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
  name: 'SignIn',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      googleIcon: require("../assets/images/google.svg")
    }
  },
  methods: {
    /*
      submitSignInForm() { this.$store.dispatch('submitSignInForm', this.formData); } -> is equal to code below!
    */
   ...mapActions(['submitSignInForm', 'socialLogin'])
  }
}
</script>

<style lang="scss" scoped>

  .child-subheading { color:#2196f3; text-decoration: underline;}

  .v-image { width: 40px; }

  .v-image:hover { cursor: pointer; }

  .flex { flex: 0 1 auto; }

  .sign-in-flex { justify-content: space-between; }

  .v-card { width: 30vw; }
</style>


