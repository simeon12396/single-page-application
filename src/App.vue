<template>
  <v-app>
    <app-navigation/>
    <v-content>
      <transition name="moveInUp">
        <router-view/>
      </transition>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppFooter
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
@import './styles/components/App.scss';

.v-content__wrap { background: white; }
</style>

