<template>  
  <v-container>
    <div class="table-headings">
      <span class="th">Product</span>
      <span class="th">Name</span>
      <span class="th">Quantity</span>
      <span class="th">Price</span>
      <span class="th">Remove</span>
    </div>

    <div class="table-descriptions" v-for="(product, index) in getProductsInCart" :key="index">
      <router-link to="/products/product_details">
        <span class="td" @click="setCurrentProduct(product)">
          <v-img :src="product.baseImage"></v-img>
        </span>
       </router-link>

      <router-link to="/products/product_details">
        <span class="td" @click="setCurrentProduct(product)">
          <div class="title mb-2"> {{product.name}} </div>
        </span>
      </router-link> 

      <span class="td"> 1 </span>

      <span class="td">$ {{product.newPrice}} </span>

      <span class="td">
        <v-btn flat @click="setDeleteProduct(index)">
          <i class="far fa-trash-alt"></i>
        </v-btn> 
      </span>
      
    </div>

    <div class="table-footer mt-2">
      <span class="tf">Total Price <p>$ {{totalPrice}}</p></span>

      <span class="tf">
        <v-btn color="success checkout" @click="setResetCart">Checkout</v-btn>
      </span>
    </div>

    <go-top :size=50 bg-color="#2196f3 "></go-top>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'Cart',
  components: {
    GoTop
  },
  data() {
    return {
      countProducts: null,
      dialog: false
    }
  },
  computed: {
    ...mapGetters([
      'getProductsInCart'
    ]),
    totalPrice() {
      return this.getProductsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.newPrice, 0);
    }
  },
  methods: {
    ...mapMutations([
      'setDeleteProduct',
      'setCurrentProduct',
      'setResetCart'
    ])
  },
  created() {
    console.log(this.getProductsInCart);
  }
}

</script>

<style lang="scss" scoped>
  .container { @include flexbox-center(); width: 70vw; flex-direction: column;}

  a { text-decoration: none; color: black; }

  .table-headings {
    font-weight: 500;
    display: grid;
    grid-template-columns: 100px 450px 100px 100px 100px;
    grid-gap: 1rem;
    grid-template-rows: 25px;
    grid-template-areas: 
    "product name quantity price remove";
    border-bottom: 2px solid #ddd;
    padding-bottom: .5rem;
    margin-bottom: .5rem;
  }

  .th:nth-child(1) { grid-area: product; }

  .th:nth-child(2) { grid-area: name; }

  .th:nth-child(3) { grid-area: quantity; text-align: center; }

  .th:nth-child(4) { grid-area: price; text-align: center; }

  .th:nth-child(5) { grid-area: remove; text-align: center; }

  .table-descriptions {
    display: grid;
    grid-template-columns: 100px 450px 100px 100px 100px;
    grid-gap: 1rem;
    grid-template-areas: 
    "product name quantity price remove";
    border-bottom: 2px solid #ddd;
    padding: 1rem;
  }

  .td:nth-child(1) { grid-area: product; }

  .td:nth-child(2) { grid-area: name; }

  .td:nth-child(3) { grid-area: quantity; text-align: center; @include flexbox-center();}

  .td:nth-child(4) { grid-area: price; text-align: center; @include flexbox-center();}

  .td:nth-child(5) { grid-area: remove; text-align: center; @include flexbox-center();}

  .table-descriptions:hover{ background: #f5f5f5; cursor: pointer; }

  .fa-trash-alt{ font-size: 1.7rem; color: #ff5252; }

  .table-footer {
    display: grid;
    grid-template-columns: 100px 450px 100px 100px 100px;
    grid-gap: 1rem;
  }

  .table-footer { 
    font-weight: 500;
    
    span:nth-child(1) { grid-column: 4/5; text-align: center; }

    span:nth-child(2) {
      grid-column: 5/-1;

      .v-btn { margin-left: 0; margin-right: 0; }
    }
  }
</style>
