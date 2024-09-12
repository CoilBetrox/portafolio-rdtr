<template>
    <div class="principal-content">
        <h1 class="title">CONTACTO</h1>
        <p class="subtitle">No dude en ponerte en contacto conmigo enviando el siguiente formulario.</p>
        <p class="description">Lo recibiré y me pondré en contacto lo antes posible.</p>

        <div class="content-wrapper">
            <form class="form-contact" @submit.prevent="submitForm" :action="formspreeUrl" method="POST">
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input id="name" v-model="form.name" type="text" required placeholder="Escriba su nombre">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input id="email" v-model="form.email" type="email" required placeholder="Escriba su correo">
                </div>
                <div class="form-group">
                    <label for="message">Mensaje:</label>
                    <textarea id="message" v-model="form.message" required placeholder="Escriba su mensaje"></textarea>
                </div>
                <div class="content-button">
                    <button class="generic-button" type="submit" :disabled="isSubmitting">{{ isSubmitting ? 'Sending...' : 'Send' }}</button>
                </div>
            </form>
            <p v-if="submitStatus" :class="submitStatus">{{ submitMessage }}</p>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    name: 'ContactView',
    setup() {
        const formspreeUrl = process.env.VUE_APP_FORMSPREE_URL;
        const form = reactive({
            name: '',
            email: '',
            message: ''
        })
        const isSubmitting = ref(false)
        const submitStatus = ref('')
        const submitMessage = ref('')

        const submitForm = async () => {
            isSubmitting.value = true
            submitStatus.value = ''
            submitMessage.value = ''
            try {
                const response = await fetch(formspreeUrl, {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Accept': 'application/json'
                }
                })

                const result = await response.json()

                if (response.ok) {
                submitStatus.value = 'success'
                submitMessage.value = 'Message sent successfully!'
                // Reset form
                form.name = ''
                form.email = ''
                form.message = ''
                } else {
                throw new Error(result.error || 'Something went wrong')
                }
            } catch (error) {
                submitStatus.value = 'error'
                submitMessage.value = error.message
            } finally {
                isSubmitting.value = false
            }
        }

        return { form, submitForm, isSubmitting, submitStatus, submitMessage, formspreeUrl }
    }
}
</script>

<style scoped>
label {
    font-size: 1rem;
    text-align: left;
    margin-bottom: 0.3rem;
}

input, textarea {
    font-size: 1rem;
    padding: 0.4rem 0.4rem;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.principal-content {

    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
    margin-top: 60px;
}

.title {
    font-size: 2.5rem;
    color: #4A4A4A;
    text-align: center;
    margin-bottom: 1rem;
}

.subtitle,
.description {
    font-size: 1.3rem;
    text-align: center;
    color: #4A4A4A;
    margin-top: 0;
    margin-bottom: 0;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;
    align-items: normal;
}

.description-text-wrapper {
    flex: 1;
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.description-text-wrapper p,
.description-text-wrapper ol {
    margin-bottom: 1rem;
}

.second-content-wrapper {
    flex: 1;
    background-color: #ffffff;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    align-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.project-item {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    background-color: #ffffff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.content-wraper-image {
    flex: 1;
}

.content-wraper-details {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content-button {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.generic-button {
    padding: 0.60rem 2rem;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.generic-button:hover {
    background-color: #0056b3;
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: left;
}


.generic-button:disabled {
  background-color: #cccccc;
}

@media (max-width: 768px) {

    .content-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        margin-left: 0rem;
        margin-right: 0rem;
        align-items: normal;
    }

}
</style>