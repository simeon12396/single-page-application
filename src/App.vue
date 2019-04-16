<template>
  <v-app>
    <app-navigation/>
    <v-content>
      <transition name="moveInUp">
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style lang="scss" scoped>
@import './styles/Main.scss';
@import './styles/components/App.scss';
</style>

