<template>
    <div class="not-found-comp">
        <h1 class="title">404</h1>
        <img src="@/assets/images/sadcat.png" alt="catsad">
        <h1 class="title">Página no encontrada</h1>
        <p class="subtitle">Lo siento, la página que está buscando no existe.</p>
        <p class="subtitle">Debe haberse perdido entre en backend y el frontend.</p>
        <router-link to="/" class="description">
            Volver al inicio
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFoundView'
}
</script>

<style scoped>
img {
    max-width: 10rem;
    height: auto;
    display: block;
    margin: 0 auto 20px;
}

.not-found-comp {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
    margin-top: 60px;
}
</style>