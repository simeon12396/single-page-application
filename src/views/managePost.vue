<template>
  <v-container class="my-2">
    <v-card flat class="pa-3 mb-2" v-for="(news, index) in getRetrieveAllnews" :key="index">
      <v-layout>
        <v-flex>
          <div class="caption grey--text mb-2">Title</div>
          <div>{{news.title}}</div>
        </v-flex>
        <v-flex>
          <div class="caption grey--text mb-2">Description</div>
          <div>{{news.description}}</div>
        </v-flex>
        <v-flex>
          <div class="caption grey--text mb-2">Rating</div>
          <div>{{news.rating}}</div>
        </v-flex>
        <v-flex>
          <div class="caption grey--text mb-2">Author</div>
          <div>{{news.author}}</div>
        </v-flex>
        <v-flex>
          <div class="caption grey--text mb-2">Remove news</div>
          
          <v-btn flat @click="deleteNews(index)">
            <i class="far fa-trash-alt"></i>
          </v-btn>

        </v-flex>

        <go-top :size=40 bg-color="#2196f3 "></go-top>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'ManagePost',
  components: {
    GoTop
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters(["getRetrieveAllnews"])
  },
  created() {
   this.$store.dispatch("retrieveAllNews");
  },
  methods: {
    deleteNews(key) {
      this.$store.dispatch("deleteNews", key);
      this.dialog = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .fa-trash-alt { font-size: 1.7rem; color: #ff5252; }

  .v-card { border-left: 3px solid #2196f3; }

  .v-card-dialog { border-left: none; }
  
  .flex { flex: 0 1 25%; }

  .flex:last-of-type {
    flex: 0 1 20%;
    display: flex;
    flex-direction: column;
    justify-content: fle;
    align-items: center;
  }
</style>

