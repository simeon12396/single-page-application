<template>
  <div>
    <v-img :src=notFoundSrc></v-img>
  </div>
</template>

<script>
export default {
  name: 'NotFound404',
  data() {
    return {
      notFoundSrc: "https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif"
    }
  }
}
</script>