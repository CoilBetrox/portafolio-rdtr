<template>
  <span :class="['status-badge', `status-badge--${status}`]">
    {{ statusText }}
  </span>
</template>

<script>
export default {
  name: 'StatusBadge',
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => ['Completo', 'Update', 'Desarrollo'].includes(value)
    }
  },
  computed: {
    statusText() {
      const statusMap = {
        'Completo': 'Completo',
        'Update': 'En Actualización', 
        'Desarrollo': 'En Desarrollo'
      }
      return statusMap[this.status] || this.status
    }
  }
}
</script>

<style scoped>
.status-badge {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  font-weight: 500;
  margin-left: var(--spacing-sm);
}

.status-badge--Completo {
  background-color: #d4edda;
  color: #155724;
}

.status-badge--Update {
  background-color: #fff3cd;
  color: #856404;
}

.status-badge--Desarrollo {
  background-color: #cce7ff;
  color: #004085;
}
</style>