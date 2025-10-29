<template>
  <div v-if="message" :class="['form-status', `form-status--${status}`]">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'FormStatus',
  props: {
    status: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.form-status {
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: 500;
}

.form-status--success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form-status--error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>