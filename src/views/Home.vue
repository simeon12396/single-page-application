<template>
  <div>
    <v-carousel router>
      <v-carousel-item 
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.src"
        :to="slide.route"
      ></v-carousel-item>
    </v-carousel>

    <v-container fluid>
      <v-layout>
        <v-flex class="flex-item">

          <div class="headline mb-4">All about News</div>

          <v-layout wrap class="flex-item__posts">
            <v-flex v-for="(news, index) in getFetchAllNews" :key="index">

              <v-card class="home-card">
                <v-img :src="news.image" height="212px" class="news-image"></v-img>

                <v-img class="new-icon" :src="comingSoonIcon"></v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="flex-item__posts-heading" @click="loadSingularNews(index)">{{ news.title }}</h3>
                    <div class="flex-item__posts-desc">
                      {{ news.description }}
                    </div>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn color="info" @click="loadSingularNews(index)">
                    View more
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex class="flex-item">
          <div class="headline mb-4">Most reviewed products</div>

          <v-layout wrap class="flex-most-reviewed-products" justify-space-around>
            <v-flex v-for="(product, index) in arrayOfMostReviewedProducts" :key="index">
          
              <v-card class="home-card">
                <v-img :src="product.image" class="product-image"/>

                 <v-img class="new-icon popular-image" :src="popularImage"></v-img>
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
                  <router-link to="/products/product_details" class="view-details-btn">
                    <v-btn color="info" @click="setCurrentProduct(product)"> View details </v-btn>
                  </router-link>

                  <v-btn block color="success" @click="setAddProduct(product)">Add to cart </v-btn>
                </v-card-actions>
              </v-card>

            </v-flex>
          </v-layout>

        </v-flex>
      </v-layout>
      <go-top :size=50 bg-color="#2196f3"></go-top>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import GoTop from '@inotom/vue-go-top';

export default {
  name: "Home",
  components: {
    GoTop
  },
  data() {
    return {
      comingSoonIcon: 'http://pluspng.com/img-png/coming-soon-hd-png-download-coming-soon-png-images-transparent-gallery-advertisement-845.png',
      slides: [
        { src: require("../assets/images/herobook-image.jpg") },
        { src: require("../assets/images/hi9-image.jpg") },
        { src: require("../assets/images/hi9-plus-image.jpg") },
        { src: require("../assets/images/hi10-image.jpg") }
      ],
      popularImage: "https://media.istockphoto.com/vectors/most-popular-sign-icon-bestseller-symbol-vector-id1017946144?s=170667a",
      arrayOfMostReviewedProducts: []
    }
  },
  computed: {
    ...mapGetters(["getFetchAllNews", "getImgUpload","getAllProducts"])
  },
  created() {
    this.$store.dispatch("fetchAllNews");
    this.mostReviewedProducts();
  },
  methods: {
    loadSingularNews(newsKey) {
      this.$store.dispatch("fetchSingularNews", newsKey);
      this.$router.push(`/news/${newsKey}`);
    },
    mostReviewedProducts() {

      this.getAllProducts.forEach((item, index) => {
        if(item.totalReviews >= 230) {
          this.arrayOfMostReviewedProducts.push(item);
        }
      })
    },
    ...mapMutations([
      'setCurrentProduct',
      'setAddProduct'
    ])
  }
};
</script>

<style lang="scss">
  @import "../styles/components/home.scss";
  
  .home-card { padding-top: 1rem; }

  .v-card:hover .news-image { transform: scale(1.1); }

  .news-image { transition: all .2s linear; padding-top: 1rem;}

  .v-window-item { background: white; }

  .flex-item__posts-heading:hover { cursor:  pointer; }

  .headline { text-align: center; }

  .popular-image { width: 60px;}

  .flex-most-reviewed-products {
    
    .v-card, .title { margin-bottom: 1rem; }
    .v-image { width: 200px; margin: 0 auto; transition: all .2s linear}

    .popular-image { width: 70px; }

    .flex { flex: 0 1 45%; }

    .view-details-btn { margin-right: .5rem; }

    .v-card:hover .v-image {transform: scale(1.03); }
  }
  
  .application a { text-decoration: none; color: black; }
</style>
