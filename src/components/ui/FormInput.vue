<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      v-if="type !== 'textarea'"
      :id="id"
      :type="type"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-input"
    />
    <textarea
      v-else
      :id="id"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-textarea"
    ></textarea>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    modelValue: [String, Number],
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    required: Boolean,
    placeholder: String,
    error: String,
    id: String
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-md);
}

label {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xs);
  text-align: left;
}

.form-input,
.form-textarea {
  padding: var(--spacing-sm);
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

.error-message {
  color: #dc3545;
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
}
</style>