<template>
  <listOfProducts :products="getAllNotebooks" />
</template>

<script>
import listOfProducts from "../components/listOfProducts.vue";
import { mapGetters } from "vuex";

export default {
  name: 'Notebooks',
  components: {
    listOfProducts
  },
  computed: {
    ...mapGetters([
      'getAllNotebooks'
    ])
  }
}
</script>

