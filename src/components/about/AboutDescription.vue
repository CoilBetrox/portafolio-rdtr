<template>
  <div class="about-description app-card">
    <p>Ingeniero en Ciencias de la Computación, desarrollando mi proyecto de graduación.</p>
    <p>Combino una sólida base teórica con un enfoque práctico y holístico para la solución de problemas tecnológicos. Destaco por mi capacidad para:</p>
    <ol class="strengths-list">
      <li v-for="strength in strengths" :key="strength" class="strength-item">
        {{ strength }}
      </li>
    </ol>
    <p>Mi pasión por la tecnología y mis habilidades técnicas e interpersonales, me posicionan como un profesional versátil orientado a resultados en el ámbito de la informática.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutDescription',
  data() {
    return {
      strengths: [
        'Abordar retos de manera integral, identificando y solucionando las causas raíz.',
        'Colaborar eficazmente en equipos multidisciplinarios, manteniendo el foco bajo presión.',
        'Comunicar ideas de forma clara y concisa, facilitando el entendimiento y la cooperación.'
      ]
    }
  }
}
</script>

<style scoped>
.about-description {
  flex: 1; /* Ocupa toda la altura disponible */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinea el contenido al inicio */
  padding: 1.5rem;
  height: 100%; /* Ocupa toda la altura del contenedor padre */
}

.strengths-list {
  margin: var(--spacing-md) 0;
  padding-left: var(--spacing-lg);
}

.strength-item {
  margin-bottom: var(--spacing-sm);
  line-height: 1.5;
}
</style>