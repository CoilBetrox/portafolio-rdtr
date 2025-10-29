<template>
  <header class="app-header">
    <AppNavigation />
  </header>
</template>

<script>
import AppNavigation from './AppNavigation.vue'

export default {
  name: 'AppHeader',
  components: {
    AppNavigation
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>