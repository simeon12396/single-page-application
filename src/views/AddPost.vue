<template>
  <div>
    <v-container>
      
      <v-img v-if="getImgUpload" :src="getImgUpload"/>

      <input type="file" name="File" ref="fileInput" @change="imgUpload"/>

      <v-text-field v-model="formData.title" name="title" label="Title" type="text" @blur="$v.formData.title.$touch()"></v-text-field>

      <v-alert transition="moveInUp" :value="$v.formData.title.$error" type="error">
        This title is required.
      </v-alert>

      <v-text-field v-model="formData.description" name="description" label="Description" type="text"></v-text-field>

      <wysiwyg v-model="formData.content"></wysiwyg>

      <v-text-field v-model="formData.author" name="author" label="Author" type="text" @blur="$v.formData.author.$touch()"></v-text-field>

      <v-alert transition="moveInUp" :value="$v.formData.author.$error" type="error">
        This author is required. The min length is 8 characters!
      </v-alert>
        
      <div class="text-xs-center">
        <v-rating v-model="formData.rating" color="yellow"></v-rating>
      </div>

      <v-btn type="submit" color="success" @click="submitAddNews(formData)">
        <i class="material-icons">create</i>
      </v-btn>
      
      <v-alert :value="submitFlag" type="error" dismissible transition="moveInUp">Something is wrong. Please, fill the form correctly!</v-alert>

      <v-alert type="success" :value="alertInfo">Your post was added!</v-alert>

      <go-top :size=50 bg-color="#2196f3 "></go-top>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import { setTimeout } from 'timers';
import GoTop from '@inotom/vue-go-top';

export default {
  name: "AddPost",
  components: {
    GoTop
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
        content: "",
        rating: 2,
        author: "",
        image: ""
      },
      submitFlag: false
    }
  },
  validations: {
    formData: {
      title: {
        required
      },
      author: {
        required,
        minLength: minLength(8)
      }
    }
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
    //logikata e sushtaprosto gledam ot tuk i go pisha pak shtoto veche go pisah vednuj ama sega ne stava eba lo gp -,-
    submitAddNews(formData){
      if(!this.$v.$invalid) {
        this.$store.dispatch('submitAddNews', formData);
      } else{
        this.submitFlag= true;

        setTimeout(() => {
          this.submitFlag = false;
        }, 2500)
      }
    },
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
  @import '../styles/components/App.scss';
</style>
