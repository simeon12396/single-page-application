<template>
  <v-carousel>
    <v-carousel-item v-for="(slide, index) in slides" :key="index" :src="slide.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slides: [
        {
          src: require("../assets/images/steelseries1.png")
        },
        {
          src: require("../assets/images/steelseries2.png")
        },
        {
          src: require("../assets/images/steelseries3.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
  @import "../styles/components/home.scss";

</style>

