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
      <span class="td">
        <v-img :src="product.image"></v-img>
      </span>
      <span class="td">
        <div class="title mb-2">{{product.name}}</div>
        <div class="body-1">{{product.details}}</div>
      </span>
      <span class="td">5</span>
      <span class="td">{{product.price}}</span>
      <span class="td">
        <v-btn flat mx-0 my-0 @click="setDeleteProduct(index)">
          <i class="far fa-trash-alt"></i>
        </v-btn>
      </span>

      <go-top :size=50 bg-color="#2196f3 "></go-top>
    </div>
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
      countProducts: null
    }
  },
  computed: {
    ...mapGetters([
      'getProductsInCart'
    ])
  },
  methods: {
    ...mapMutations([
      'setDeleteProduct'
    ])
  }
}

</script>

<style lang="scss" scoped>
  .container { @include flexbox-center(); width: 70vw; flex-direction: column;}

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

  .table-descriptions:hover{
    background: #f5f5f5;
    cursor: pointer;
  }

  .fa-trash-alt{
    font-size: 1.7rem;
    color: #ff5252;
  }
</style>
