<template>
  <v-content>
    
    <v-layout justify-center>

      <v-flex class="mr-5 mt-5">
        <v-zoomer style="width:400px; height: 400px;">
          <v-img :src="getCurrentProduct.baseImage" class="base-image"></v-img>
        </v-zoomer> 
      </v-flex>

      <v-flex class="second-flex-item">
        <v-layout column justify-center>

          <v-flex>
            <div class="title mt-5 mb-3">{{getCurrentProduct.name}}</div>
          </v-flex>

          <v-flex>
            <div class="headline mb-3">KEY CHARACTERISTICS</div>
          </v-flex>  

          <v-flex v-for="(characteristic, index) in getCurrentProduct.characteristics" :key="index" class="mb-2">
            <i class="fas fa-check mr-3"></i>
            <span>{{characteristic}}</span>
          </v-flex>

          <v-flex>
            <div class="body-2 price-text">Customer rating: </div>
            <v-rating v-model="getCurrentProduct.stars" color="yellow"></v-rating>
          </v-flex>
          
          <v-flex>
            <div class="body-1">{{getCurrentProduct.reviewed}} reviews.</div>
          </v-flex>

          <v-flex class="mt-3">
             <v-btn block color="success" @click="setAddProduct(getCurrentProduct)">Add to cart </v-btn>
          </v-flex>

        </v-layout>

      </v-flex>

    </v-layout>

    <v-layout column class="informations-side">
      
      <v-flex class="mt-5 mb-">
        
        <v-layout>
          
          <v-flex>
            <v-img :src="getCurrentProduct.imageOne"></v-img>
          </v-flex>

          <v-flex class="pr-5">
            <div class="title mb-3">{{getCurrentProduct.titleOne}}</div>
            <div class="subheading">{{getCurrentProduct.informationOne}}</div>
          </v-flex>
        </v-layout>

      </v-flex>


      <v-flex class="mt-5 mb-4">
        
        <v-layout>

          <v-flex class="pl-5">
            <div class="title mb-3">{{getCurrentProduct.titleTwo}}</div>
            <div class="subheading">{{getCurrentProduct.informationTwo}}</div>
          </v-flex>
          
          <v-flex>
            <v-img :src="getCurrentProduct.imageTwo"></v-img>
          </v-flex>

        </v-layout>

      </v-flex>

      <v-flex class="mt-5 mb-4">
        
        <v-layout>
          
          <v-flex>
            <v-img :src="getCurrentProduct.imageThree"></v-img>
          </v-flex>

          <v-flex class="pr-5">
            <div class="title mb-3">{{getCurrentProduct.titleThree}}</div>
            <div class="subheading">{{getCurrentProduct.informationThree}}</div>
          </v-flex>
        </v-layout>

      </v-flex>


      <v-flex class="mt-5 mb-4">
        
        <v-layout>

          <v-flex class="pl-5">
            <div class="title mb-3">{{getCurrentProduct.titleFour}}</div>
            <div class="subheading">{{getCurrentProduct.informationFour}}</div>
          </v-flex>
          
          <v-flex>
            <v-img :src="getCurrentProduct.imageFour"></v-img>
          </v-flex>

        </v-layout>

      </v-flex>
      
    </v-layout>

    <go-top :size=50 bg-color="#2196f3 "></go-top>
  </v-content>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import GoTop from '@inotom/vue-go-top';

export default {
  components: {
    GoTop
  },
  data() {
    return {
   
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentProduct'
    ])
  },
  methods: {
    ...mapMutations([
      'setAddProduct'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .v-content {
    .flex { flex: 0 1 auto; }

    .second-flex-item { display: flex; }
    
    .base-image { width: 450px; }

    .body-1,
    .price-text { text-align: center; }

    .headline { text-align: left; }

    .informations-side {

      .flex { 
        flex: 0 1 auto; 
        padding: 0 1rem;

        .v-layout {  }
      }

      .v-image { width: 250px; }
    }
  }
</style>
