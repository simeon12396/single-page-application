<template>
  <div>
    <listOfProducts :products="getAllProducts" />
  </div>
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

