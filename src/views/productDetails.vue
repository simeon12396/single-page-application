<template>
  <v-layout justify-center>
    <v-flex>
      <v-img :src="getCurrentProduct.image"></v-img>
      <v-rating v-model="getCurrentProduct.stars" color="yellow"></v-rating>
      <div class="body-1">{{getCurrentProduct.totalReviews}} reviews.</div>
    </v-flex>

    <v-flex>
      <div class="title mb-4 flex-item">{{getCurrentProduct.name}}</div>
      <div class="display-1 mb-2 flex-item">$ {{getCurrentProduct.price}},00</div>
      <v-btn block color="success flex-item" @click="setAddProduct(getCurrentProduct)">Add to cart </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
   
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentProduct'
    ])
  },
  methods: {
    ...mapMutations([
      'setAddProduct'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    background-color: white;
    width: 60vw;
    margin: 2rem auto;
    border-radius: 1rem;
    padding-left: 2rem;

    .v-image { width: 300px; }

    .body-1 { padding-left: .7rem; }

    .flex { flex: 0 1 40%; }

    .flex:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .flex-item { flex: 0 1 auto; }
    }
  }

</style>
