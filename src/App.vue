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

<style lang="scss">
@import './styles/main.scss';
@import './styles/components/App.scss';

.v-content__wrap { background: white; }
</style>

