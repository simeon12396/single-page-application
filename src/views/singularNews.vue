<template>
  <div class="wrapper">
    <v-container>
      <v-img :src="getInformationForNews.headingSide.baseImage"></v-img>
      
      <v-img class="new-icon" src="http://pluspng.com/img-png/coming-soon-hd-png-download-coming-soon-png-images-transparent-gallery-advertisement-845.png"></v-img>

      <div class="heading-side">
        <v-img class="heading-left-image" :src="getInformationForNews.headingSide.leftImage"></v-img>

        <div class="heading-typography">
          <div class="title mb-2">{{getSingularNews.title}}</div>
          <div class="subheading">{{getInformationForNews.headingSide.description}}</div>
        </div>

        <v-img clas="heading-logo-image" :src="getInformationForNews.headingSide.logoImage"></v-img>

        <v-img class="heading-right-image" :src="getInformationForNews.headingSide.rightImage"></v-img>
      </div>

      <div class="box-container">
        <div class="information-side" v-for="(eachBox, index) in getInformationForNews.informationSide" :key="index">
          <v-img :src="eachBox.imageSrc"></v-img>

          <div class="box-text">
            <div class="title mb-2">{{eachBox.title}}</div>
            <div clas="body-2">{{eachBox.desc}}</div>
          </div>
        </div>
      </div>
      
      <div class="title">{{getSingularNews.author}}</div>
      <go-top :size=50 bg-color="#2196f3 "></go-top>     
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoTop from '@inotom/vue-go-top';

export default {
  name: "SingularNews",
  components: {
    GoTop
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["getSingularNews", "getInformationForNews"])
  },
  created() {
    this.$store.commit("setSearchNews", this.$route.params.id);
  },
  beforeDestroy() {
    this.$store.commit('setClearCurrentInfoNews');
  }
};
</script>

<style lang="scss" scoped>
  @import "../styles/components/singularNews.scss";

</style>
