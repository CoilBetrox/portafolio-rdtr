<template>
  <div class="contact-view container">
    <PageHeader 
      title="CONTACTO"
      subtitle="No dude en ponerse en contacto conmigo enviando el siguiente formulario"
      description="Lo recibiré y me pondré en contacto lo antes posible"
    />
    
    <ContactForm />
  </div>
</template>

<script setup>
import PageHeader from '@/components/common/PageHeader.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
</script>

<style scoped>
.contact-view {
  padding: var(--spacing-xl) 0;
}
</style>