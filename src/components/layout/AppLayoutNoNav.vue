<template>
  <div class="app-layout-no-nav">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'AppLayoutNoNav',
  components: {
    RouterView
  }
}
</script>

<style scoped>
.app-layout-no-nav {
  min-height: 100vh;
}
</style>