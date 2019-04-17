<template>
  <div>
    <v-container>
      <v-text-field v-model="formData.title" name="title" label="Title" type="text"></v-text-field>
      <v-text-field v-model="formData.description" name="description" label="Description" type="text"></v-text-field>
      <wysiwyg v-model="formData.content"/>
      <v-text-field v-model="formData.author" name="author" label="Author" type="text"></v-text-field>
      <div class="text-xs-center">
        <v-rating v-model="formData.rating"></v-rating>
      </div>
      <v-btn type="submit" color="primary" @click="submitAddNews(formData)">
        <i class="material-icons">create</i>
      </v-btn>
      <h1 v-if="alertInfo">Your post was added</h1>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { setTimeout } from 'timers';

export default {
  name: 'AddPost',
  data() {
    return {
      formData: {
        title: '',
        description: '',
        content: '',
        rating: 2,
        author: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getNewsStatus'
    ]),
    alertInfo() {
      if(this.getNewsStatus) {
        setTimeout(() => {
          this.clearPost();
        }, 3000);

        return true;
      }
    }
  },
  methods: {
    ...mapActions([
      'submitAddNews'
    ]),
    clearPost() {
      this.formData.title = '';
      this.formData.description = '';
      this.formData.content = '';
      this.formData.author = '';
      this.formData.rating = null;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
  @import '../styles/components/addPost.scss';
</style>


