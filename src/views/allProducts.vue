<template>
  <listOfProducts :products="getAllProducts" />
</template>

<script>
import listOfProducts from "../components/listOfProducts.vue";
import { mapGetters } from "vuex";

export default {
  name: 'AllProducts',
  components: {
    listOfProducts
  },
  computed: {
    ...mapGetters([
      'getAllProducts'
    ])
  }
}
</script>

