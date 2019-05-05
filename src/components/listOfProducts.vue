<template>
  <v-layout wrap class="wrapper-flex" justify-center="">
    <v-flex v-for="(product, index) in products" :key="index">
      <v-card>
        <v-img :src="product.image" class="product-image"/>

        <v-card-title>
          <router-link to="/products/product_details">
            <div class="title" @click="setCurrentProduct(product)">{{ product.name }}</div>
          </router-link>

          <v-layout class="product-price">
            <v-flex>
              <div class="subheading">R$ {{ product.price }}</div>
            </v-flex>
            <v-flex class="last-product-item">
              <div class="subheading">10 x {{ Math.round(product.price / 10) }}, 00 </div>
            </v-flex>
          </v-layout>
        </v-card-title>

        <v-card-actions>
          <v-btn block color="success" @click="setAddProduct(product)">Add to cart </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ['products'],
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

    .flex {
      flex: 0 1 30%;
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  .product-image { width: 60%; margin: 0 auto }; 

  .v-card:hover .product-image { transform: scale(1.2); }

  .product-image { transition: transform .2s linear }; 

  .product-price { 
    margin-top: 1rem; 
    justify-content: space-between;

    .flex {
      flex: 0 1 50%;
    }
    
    .last-product-item {
      display: flex;
      justify-content: flex-end;
    }
  }
  
</style>
