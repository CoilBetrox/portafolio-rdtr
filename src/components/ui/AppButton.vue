<template>
  <button 
    :class="['app-button', `app-button--${variant}`, { 'app-button--block': block }]"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    label: String,
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    block: Boolean
  },
  emits: ['click']
}
</script>

<style scoped>
.app-button {
  padding: 0.75rem 2rem;
  font-size: var(--font-size-base);
  color: white;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.app-button:hover {
  background-color: var(--color-primary-hover);
}

.app-button:disabled {
  background-color: var(--color-secondary);
  cursor: not-allowed;
}

.app-button--secondary {
  background-color: var(--color-secondary);
}

.app-button--outline {
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.app-button--block {
  width: 100%;
}
</style>