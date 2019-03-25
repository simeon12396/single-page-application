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
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>