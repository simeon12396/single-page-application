<template>
  <div>
    <v-layout justify-center>
      <v-flex>
        <v-btn color="info" to="/dashboard/add_post" @click="dashboardHideCnt">
          Add post
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn color="error" to="/dashboard/add_post" @click="dashboardHideCnt">
          Manage post
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="secondFlex">
      <v-flex>
        <router-view></router-view>
      </v-flex>
    </v-layout>

    <v-layout class="thirdFlex" v-if="dashboardCntFlag">
      <v-flex>
        <v-img :src="dashboardImgSrc"/>
      </v-flex>

      <v-flex>
        <span>That is your main dashboard!</span>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      dashboardImgSrc:"https://cdn.pixabay.com/photo/2019/03/01/17/49/speed-4028234_960_720.jpg",
      dashboardCntFlag: true
    }
  },
  methods: {
    dashboardHideCnt() {
      this.dashboardCntFlag = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/components/dashboard.scss";
</style>

