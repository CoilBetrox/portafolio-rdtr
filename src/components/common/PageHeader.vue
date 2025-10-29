<template>
  <header class="page-header">
    <h1 class="page-title">{{ title }}</h1>
    <p class="page-subtitle" v-if="subtitle">{{ subtitle }}</p>
    <p class="page-description" v-if="description">{{ description }}</p>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    description: String
  }
}
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.page-title {
  font-size: var(--font-size-4xl);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.page-subtitle,
.page-description {
  font-size: var(--font-size-lg);
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}
</style>