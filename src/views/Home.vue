<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.src"
      ></v-carousel-item>
    </v-carousel>

    <v-container fluid>
      <v-layout>
        <v-flex class="flex-item">
          <h2>All about News</h2>
          <v-layout wrap class="flex-item__posts">
            <v-flex v-for="(news, index) in getFetchAllNews" :key="index">
              <v-card>
                <v-img
                  src="https://media.steelseriescdn.com/thumbs/filer_public/79/38/793810c0-be38-4840-ab60-0657e7ecd973/purchase-gallery-650wl-top.png__1850x800_q100_crop-scale_optimize_subsampling-2.png"
                  aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="flex-item__posts-heading">{{ news.title }}</h3>
                    <div class="flex-item__posts-desc">
                      {{ news.description }}
                    </div>
                  </div>
                </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange" @click="loadSingularNews(index)">
                  View more
                </v-btn>
                <v-btn flat color="orange">
                  Add to favorites
                </v-btn>
              </v-card-actions>
           </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

        <v-flex class="flex-item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          nulla quod obcaecati sequi odit beatae quis similique soluta animi
          labore fugit quibusdam nihil illum excepturi, minus incidunt atque
          eaque eveniet possimus natus ipsum saepe? Magnam ratione neque unde
          quidem, quam voluptatum saepe doloremque iure, corporis debitis
          voluptatem alias repudiandae inventore?
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      slides: [
        { src: require("../assets/images/steelseries1.png") },
        { src: require("../assets/images/steelseries2.png") },
        { src: require("../assets/images/steelseries3.png") }
      ]
    };
  },
  computed: {
    ...mapGetters(["getFetchAllNews"])
  },
  created() {
    this.$store.dispatch("fetchAllNews");
  },
  methods: {
    loadSingularNews(newsKey) {
      this.$store.dispatch("fetchSingularNews", newsKey);
      this.$router.push(`/news/${newsKey}`);
    }
  }
};
</script>

<style lang="scss">
@import "../styles/components/home.scss";
</style>
