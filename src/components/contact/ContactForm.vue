<template>
  <div class="contact-form-wrapper">
    <form class="contact-form app-card" @submit.prevent="handleSubmit">
      <FormInput
        v-model="form.name"
        label="Nombre"
        type="text"
        required
        placeholder="Escriba su nombre"
        :error="errors.name"
        @update:modelValue="(value) => handleInput('name', value)"
      />
      
      <FormInput
        v-model="form.email"
        label="Email"
        type="email"
        required
        placeholder="Escriba su correo"
        :error="errors.email"
        @update:modelValue="(value) => handleInput('email', value)"
      />
      
      <FormInput
        v-model="form.message"
        label="Mensaje"
        type="textarea"
        required
        placeholder="Escriba su mensaje"
        :error="errors.message"
        @update:modelValue="(value) => handleInput('message', value)"
      />
      
      <div class="form-actions">
        <AppButton 
          type="submit" 
          :disabled="isSubmitting"
          class="submit-button"
        >
          {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
        </AppButton>
      </div>
      
      <FormStatus 
        :status="submitStatus" 
        :message="submitMessage" 
      />
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useForm } from '@/composables/useForm'
import FormInput from '@/components/ui/FormInput.vue'
import AppButton from '@/components/ui/AppButton.vue'
import FormStatus from '@/components/contact/FormStatus.vue'

export default {
  name: 'ContactForm',
  components: {
    FormInput,
    AppButton,
    FormStatus
  },
  setup() {
    const { form, errors, isSubmitting, handleInput, reset } = useForm({
      name: '',
      email: '',
      message: ''
    })

    const submitStatus = ref('')
    const submitMessage = ref('')

    const handleSubmit = async () => {
      if (!form.name || !form.email || !form.message) {
        submitStatus.value = 'error'
        submitMessage.value = 'Por favor, complete todos los campos'
        return
      }

      isSubmitting.value = true
      submitStatus.value = ''
      submitMessage.value = ''

      try {
        const response = await fetch(process.env.VUE_APP_FORMSPREE_URL, {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })

        const result = await response.json()

        if (response.ok) {
          submitStatus.value = 'success'
          submitMessage.value = '¡Mensaje enviado exitosamente!'
          reset()
        } else {
          throw new Error(result.error || 'Algo salió mal')
        }
      } catch (error) {
        submitStatus.value = 'error'
        submitMessage.value = error.message
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      form,
      errors,
      isSubmitting,
      submitStatus,
      submitMessage,
      handleInput,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.contact-form-wrapper {
  max-width: 600px;
  margin: var(--spacing-xl) auto 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-actions {
  display: flex;
  justify-content: center;
}

.submit-button {
  min-width: 200px;
}
</style>