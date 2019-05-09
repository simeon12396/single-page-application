<template>
  <div class="wrapper">
    <v-container>
      <v-img :src="headingSide.baseImage"></v-img>
      
      <v-img class="new-icon" src="http://pluspng.com/img-png/coming-soon-hd-png-download-coming-soon-png-images-transparent-gallery-advertisement-845.png"></v-img>

      <div class="heading-side">
        <v-img class="heading-left-image" :src="headingSide.leftImage"></v-img>

        <div class="heading-typography">
          <div class="title mb-2">{{getSingularNews.title}}</div>
          <div class="subheading">{{headingSide.description}}</div>
        </div>

        <v-img clas="heading-logo-image" :src="headingSide.logoImage"></v-img>

        <v-img class="heading-right-image" :src="headingSide.rightImage"></v-img>
      </div>

      <div class="box-container">
        <div class="information-side" v-for="(eachBox, index) in informationSide" :key="index">
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
      headingSide: {
        baseImage: require("../assets/images/base-image-1.jpg"),
        leftImage: require("../assets/images/left-image.jpg"),
        rightImage: require("../assets/images/right-image.jpg"),
        description: "The CHUWI Herobook laptop will inspire you to be more productive at work, school or play. Lightweight and stylish, it features a beautiful 14.1'' screen and WiFi for fast connectivity and reliability that you can count on wherever you venture. Thin and light, this boundless device is fast and and the battery has enough juice to power you though your day.",
        logoImage: require("../assets/images/chuwi-laptop-logo.jpg")
      },
      informationSide: [
        { imageSrc: require("../assets/images/info-image-1.jpg"), title: "14.1'' Anti-Glare Display", desc: "The 14.1'' glare proof screen brings you a wider view and is still clearly visible even in strong outdoor light. Besides, the night mode and color setting will help reduce the onset of eye strain."},
        { imageSrc: require("../assets/images/info-image-2.jpg"), title: "Thinner and Lighter",  desc: "The CHUWI Herobook laptop is thinner and lighter. It weighs just 3.06lb and has an amazingly thin 0.8 in profile. It is very convenient to carry with it when you are traveling."},
        { imageSrc: require("../assets/images/info-image-3.jpg"), title: "Powerful Performance",  desc: "Powerful and efficient Intel Quad Core X5-E8000 Processor up to 2.0GHz speeds thanks to the 14-nm process technology and 5W ultra-low power design. The built-in HD graphics N3000 ensures faster image processing."},
        { imageSrc: require("../assets/images/info-image-4.jpg"), title: "More Storage Space",  desc: "4GB RAM and 64GB storage helps you run multiple apps seamlessly. With up to 128GB TF expansion provides plenty of room for your documents,photos and videos. A separate M.2 SSD expansion is provided for greater space and faster read/write speed."},
        { imageSrc: require("../assets/images/info-image-5.jpg"), title: "More Learning Time",  desc: "A monstrous 38Wh polymer lithium-ion battery with ultra-low power interl CPU enables Herobook last over 9 hours. With fast charge technology, you can get longer time for your work or entertainment."},
        { imageSrc: require("../assets/images/info-image-6.jpg"), title: "Full Sized Keyboard",  desc: "A full-size borderless keyboard with 17mm keycap and 3mm keypitch ensures supreme typing comfort. Typing on a compact device has never been this comfortable."}
      ]
    };
  },
  computed: {
    ...mapGetters(["getSingularNews"])
  }
};
</script>

<style lang="scss" scoped>
  @import "../styles/components/singularNews.scss";

</style>
