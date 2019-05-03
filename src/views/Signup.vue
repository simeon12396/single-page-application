<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md4>
       <v-card class="elevation-12">
          <v-toolbar dark>
            <v-toolbar-title>Sign up</v-toolbar-title>
          </v-toolbar>  
          <v-card-text>
            <v-form @submit.prevent="submitSignUpForm(formData)">
              <v-text-field v-model="formData.name" prepend-icon="person" name="name" label="Name" type="text"></v-text-field>
              <v-text-field v-model="formData.email" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
              <v-text-field v-model="formData.password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" dark>Sign up</v-btn>
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
      }
    }
  },
  methods: {
    /*
      submitSignUpForm() { this.$store.dispatch('submitSignUpForm', this.formData); } -> is equal code below!
    */
   ...mapActions(['submitSignUpForm'])
  }
}
</script>

<style scoped>
  .v-toolbar {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  }

  .v-btn {
    background: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  }
</style>

