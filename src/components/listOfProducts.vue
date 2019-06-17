<template>
  <v-layout wrap class="wrapper-flex" justify-center>
    <v-flex v-for="(product, index) in products" :key="index">
      <v-card class="home-card">
                <v-img :src="product.baseImage" class="product-image"/>

                 <v-img class="new-icon popular-image" :src="sale"></v-img>
                <v-card-title>
                  <router-link to="/products/product_details">
                    <div class="title mb-3" @click="setCurrentProduct(product)">{{ product.name }}</div>
                  </router-link>

                  <v-layout class="product-price" column>
                    <v-flex v-for="(characteristic, index) in product.characteristics" :key="index">
                      <i class="fas fa-check mr-3"></i>
                      <span>{{characteristic}}</span>
                    </v-flex>
                  </v-layout>

                  <div class="prices mt-3">
                    <span class="old-price mr-2">{{product.oldPrice}} $</span>
                    <span class="promotion mr-2">(-30%)</span>
                    <span class="new-price">{{product.newPrice}} $</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/products/product_details" class="view-details-btn">
                    <v-btn color="info" @click="setCurrentProduct(product)"> View details </v-btn>
                  </router-link>

                  <v-btn block color="success" @click="setAddProduct(product)">Add to cart </v-btn>
                </v-card-actions>
              </v-card>

      <go-top :size=50 bg-color="#2196f3 "></go-top>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";
import GoTop from '@inotom/vue-go-top';

export default {
  props: ['products'],
  data() {
    return {
      sale: require("../assets/images/sale.png")
    }
  },
  components: {
    GoTop
  },
  methods: {
    ...mapMutations([
      'setCurrentProduct',
      'setAddProduct'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .v-card { width: 300px; border: 1px solid #ddd; padding: 1rem; }
  
  .wrapper-flex {
    padding-top: 1rem;

    .flex { flex: 0 1 30%; margin-bottom: 1rem; }

    a { text-decoration: none; color: black; }
  }
    
    .v-card, .title { margin-bottom: 1rem; }
    .v-image { width: 200px; margin: 0 auto; transition: all .2s linear}

    .flex { flex: 0 1 45%; }

    .view-details-btn { margin-right: .5rem; }

    .v-card:hover .v-image {transform: scale(1.03); }

    .old-price { text-decoration: line-through; font-weight: 400; }

    .new-price { font-size: 1.5rem; color: red; font-weight: 600; }

    .promotion { font-size: .8rem; color: red; }

  
  .application a { text-decoration: none; color: black; }

  .v-card__title { flex-direction: column; }

  .new-icon {
    position: absolute;
    right: 0;
    top: 10px;
    width: 60px;
}
</style>
