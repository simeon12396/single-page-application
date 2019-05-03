<template>
  <div>
    <v-container>
      <v-img v-if="getImgUpload" :src="getImgUpload"/>
      <input type="file" name="File" ref="fileInput" @change="imgUpload"/>
      <v-text-field
        v-model="formData.title"
        name="title"
        label="Title"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="formData.description"
        name="description"
        label="Description"
        type="text"
      ></v-text-field>
      <wysiwyg v-model="formData.content"></wysiwyg>
      <v-text-field
        v-model="formData.author"
        name="author"
        label="Author"
        type="text"
      ></v-text-field>
      <div class="text-xs-center">
        <v-rating v-model="formData.rating" color="yellow"></v-rating>
      </div>
      <v-btn type="submit" color="success" @click="submitAddNews(formData)">
        <i class="material-icons">create</i>
      </v-btn>
      <h1 v-if="alertInfo">Your post was added</h1>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "AddPost",
  data() {
    return {
      formData: {
        title: "",
        description: "",
        content: "",
        rating: 2,
        author: "",
        image: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getNewsStatus"]),
    alertInfo() {
      if (this.getNewsStatus) {

        setTimeout(() => {
          this.clearPost();
        }, 1500);

        setTimeout(() => {
          this.$store.commit('setClearImgUpload');
        }, 1500);

        return true;
      }

      return false;
    },
    getImgUpload() {
      const imgUploaded = this.$store.getters['getImgUpload'];
      this.formData.image = imgUploaded;

      return imgUploaded;
    }
  },
  methods: {
    ...mapActions(["submitAddNews"]),
    clearPost() {
      this.$refs.fileInput.value = "";
      this.formData.title = "";
      this.formData.description = "";
      this.formData.content = "";
      this.formData.author = "";
      this.formData.rating = null;
    },
    imgUpload(event) {
      let selectedFile = event.target.files[0];
      this.$store.dispatch('imgUpload', selectedFile);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
@import "../styles/components/addPost.scss";
</style>
