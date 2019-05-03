<template>
  <v-layout wrap class="wrapper-flex">
    <v-flex v-for="(product, index) in products" :key="index">
      <v-card>
        <v-img :src="product.image"/>

        <v-card-title>
          <router-link to="/products/product_details">
            <div class="title" @click="currentProduct(product)">{{ product.name }}</div>
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
          <v-btn block color="success" @click="addProduct(product)">Add to cart </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ['products'],
  methods: {
    ...mapActions([
      'currentProduct',
      'addProduct'
    ])
  }
}

</script>

<style lang="scss" scoped>
  .v-card {
    width: 300px;
  }

  .product-price {
    margin-top: 1rem;
    justify-content: space-between;

    .last-product-item {
    display: flex;
    justify-content: flex-end;
  }
  }
  
  .wrapper-flex {
    padding-top: 1rem;

    .flex {
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }
  
</style>
