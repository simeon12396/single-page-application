<template>
  <div>
    <v-layout justify-center class="first-flexbox">
      <v-flex>
        <v-btn color="info" to="/dashboard/add_post" @click="dashboardHideCnt">
          Add News
        </v-btn>
      </v-flex>

      <v-flex>
        <v-btn color="error" to="/dashboard/manage_post" @click="dashboardHideCnt">
          Manage News
        </v-btn>
      </v-flex>
    </v-layout>
    
    <v-layout>
      <v-flex>
        <transition name="addPost-animation" enter-active-class="slideInLeft">
          <router-view></router-view>
        </transition>
      </v-flex>
    </v-layout>

    <v-layout v-if="dashboardCntFlag" class="third-flexbox">
      <v-flex>
        <v-img :src=dashboardImgSrc></v-img>
      </v-flex>

      <v-flex>
        <span>This is your main dashboard!</span>
      </v-flex>
    </v-layout>

    <go-top :size=40 bg-color="#2196f3 "></go-top>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import GoTop from '@inotom/vue-go-top';

export default {
  name: "Dashboard",
  components: {
    GoTop
  },
  data() {
    return {
      dashboardImgSrc: require("../assets/images/coffe.jpg"),
      dashboardCntFlag: true
    };
  },
  methods: {
    dashboardHideCnt() {
      this.dashboardCntFlag = false;
    },
    ...mapMutations([
      'setResetProducts'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/components/dashboard.scss";
</style>
