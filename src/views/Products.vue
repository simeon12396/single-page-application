<template>
  <div>
    <transition name="moveInUp">
      <v-toolbar class="menu-of-products" dark color="blue darken-2">
        <v-toolbar-items class="items-of-products">
          <v-btn flat to="/products/all_products">
            <span>All products</span>
          </v-btn>
          <v-btn flat to="">
            <span>Smartphones</span>
          </v-btn>
          <v-btn flat to="">
            <span>Notebooks</span>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </transition>

    <transition name="moveInUp">
      <router-view class="router-view-of-products"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style lang="scss">
@import '../styles/components/App.scss';

  .menu-of-products {
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  
  .router-view-of-products {
    width: 90vw;
    margin: 1rem auto;
  }
</style>



