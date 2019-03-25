<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
       <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="submitSignin">
              <v-text-field v-model="formData.email" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
              <v-text-field v-model="formData.password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              <v-card-actions>
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

export default {
  name: 'Signin',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitSignin() {
      this.$store.dispatch('submitSignin', this.formData);
    }
  }
}
</script>

<style scoped>

</style>

