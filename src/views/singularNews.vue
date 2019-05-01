<template>
  <div>
    <v-container>
      <v-img :src="getSingularNews.image"></v-img>
      
      <v-img class="new-icon" src="http://pluspng.com/img-png/coming-soon-hd-png-download-coming-soon-png-images-transparent-gallery-advertisement-845.png"></v-img>

      <div class="display-3">
        {{ getSingularNews.title }}
      </div>

      <div class="headline mt-4">
        {{ getSingularNews.description }}
      </div>

      <div class="subheading mt-4" v-html="getSingularNews.content"></div>

      <div class="text-xs-center">
        <v-rating v-model="getSingularNews.rating"></v-rating>
      </div>

      <div class="caption mt-4">
        Written by <span>{{ getSingularNews.author }}</span>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SingularNews",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSingularNews"])
  }
};
</script>

<style lang="scss" scoped>
.display-3,
.headline {
  text-align: center;
}
.caption {
  font-family: $subheading-font-family;
  font-weight: 900;
  text-align: right;
  padding-right: 2.2rem;

  span {
    color: grey;
    font-style: italic;
    font-size: 1rem;
  }
}

.v-image {
  height: 400px;
}

.container {
  position: relative;
}

.new-icon {
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  height: initial;
}
</style>
