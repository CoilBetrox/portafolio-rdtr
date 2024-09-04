<template>
    <div class="not-found-comp">
        <h1 class="title">404</h1>
        <h1 class="title">Page not found</h1>
        <p class="subtitle">Sorry, the page you are looking for does not exist.</p>
        <p class="subtitle">It must have been lost between the backend and the frontend.</p>
        <router-link to="/" class="description">
            Volver al inicio
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage'
}
</script>

<style scoped>
.not-found-comp {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
    margin-top: 60px;
}
</style>