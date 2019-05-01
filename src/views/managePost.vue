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
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ManagePost',
  data() {
    return {

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
      console.log('success');
      this.$store.dispatch("deleteNews", key);
    }
  }
}
</script>

<style lang="scss" scoped>
  .fa-trash-alt {
    font-size: 1.7rem;
    color: #ff5252;
  }

  .v-card {
    border-left: 3px solid #2196f3 ;
  }

  .flex {
    flex: 0 1 25%;
  }

  .flex:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: fle;
    align-items: center;
  }
</style>

