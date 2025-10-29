<template>
  <footer class="app-footer">
    <p>&copy; {{ currentYear }} Roberth Troya. Todos los derechos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.app-footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #6c757d;
}
</style>