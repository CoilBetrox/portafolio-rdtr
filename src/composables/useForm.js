import { reactive, ref } from 'vue'

export function useForm(initialValues = {}) {
  const form = reactive({ ...initialValues })
  const errors = reactive({})
  const isSubmitting = ref(false)
  
  const validate = (field, value) => {
    // Lógica de validación simple
    if (!value || value.trim() === '') {
      errors[field] = 'Este campo es requerido'
    } else {
      delete errors[field]
    }
  }
  
  const handleInput = (field, value) => {
    form[field] = value
    validate(field, value)
  }
  
  const reset = () => {
    Object.keys(form).forEach(key => {
      form[key] = initialValues[key] || ''
    })
    Object.keys(errors).forEach(key => delete errors[key])
  }
  
  return {
    form,
    errors,
    isSubmitting,
    handleInput,
    reset,
    validate
  }
}