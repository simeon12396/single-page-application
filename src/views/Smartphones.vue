<template>
  <listOfProducts :products="getAllSmartphones" />
</template>

<script>
import listOfProducts from "../components/listOfProducts.vue";
import { mapGetters } from "vuex";

export default {
  name: 'Smartphones',
  components: {
    listOfProducts
  },
  computed: {
    ...mapGetters([
      'getAllSmartphones'
    ])
  }
}
</script>

