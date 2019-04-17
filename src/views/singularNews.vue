<template>
  <div>
    <v-container>
      <v-img src="https://media.steelseriescdn.com/thumbs/filer_public/79/38/793810c0-be38-4840-ab60-0657e7ecd973/purchase-gallery-650wl-top.png__1850x800_q100_crop-scale_optimize_subsampling-2.png"></v-img>

      <div class="display-3">
        {{getSingularNews.title}}
      </div>

      <div class="headline mt-4">
        {{getSingularNews.description}}
      </div>

      <div class="subheading mt-4" v-html="getSingularNews.content"></div>

      <div class="text-xs-center">
        <v-rating v-model=getSingularNews.rating></v-rating>
      </div>

      <div class="caption mt-4">
        Written by <span>{{getSingularNews.author}}</span>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SingularNews',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getSingularNews'
    ])
  }
}
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
</style>
