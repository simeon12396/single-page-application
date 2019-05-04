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
                  :src="news.image"
                  height="212px"
                  class="news-image"
                ></v-img>
                <v-img class="new-icon"
                  src="http://pluspng.com/img-png/coming-soon-hd-png-download-coming-soon-png-images-transparent-gallery-advertisement-845.png"
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
                  <v-btn color="info" @click="loadSingularNews(index)">
                    View more
                  </v-btn>
                  <v-btn color="info">
                    Add to favorite
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
        { src: require("../assets/images/headset-arctis-pro.png") },
        { src: require("../assets/images/mousepad-qck-limited.png") },
        { src: require("../assets/images/mice-rival-650.png") }
      ]
    };
  },
  computed: {
    ...mapGetters(["getFetchAllNews", "getImgUpload"])
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

  .v-card:hover .news-image {
    transform: scale(1.2);
  }

  .news-image {
    transition: all .2s linear;
  }
</style>
