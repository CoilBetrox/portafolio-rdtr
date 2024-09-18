<template>
  <div class="about-view">
    <h1 class="title">SOBRE MÍ</h1>
    <p class="subtitle">Soy un desarrollador backend con residencia en Quito, Ecuador</p>
    <p class="description">Estas son mis habilidades, lo que hago relacionado con la programación y tecnología</p>
    
    <div class="content-wrapper">
      <div class="about-text">
        <p>Ingeniero en Ciencias de la Computación, desarrollando mi proyecto de graduación.</p>
        <p>Combino una sólida base teórica con un enfoque práctico y holístico para la solución de problemas tecnológicos. Destaco por mi capacidad para:</p>
        <ol>
          <li>Abordar retos de manera integral, identificando y solucionando las causas raíz.</li>
          <li>Colaborar eficazmente en equipos multidisciplinarios, manteniendo el foco bajo presión.</li>
          <li>Comunicar ideas de forma clara y concisa, facilitando el entendimiento y la cooperación.</li>
        </ol>
        <p>Mi pasión por la tecnología y mis habilidades técnicas e interpersonales, me posicionan como un profesional versátil orientado a resultados en el ámbito de la informática.</p>
      </div>
      
      <div class="skills-container">
        <div class="skill-tag" v-for="skill in skills" :key="skill">{{ skill }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      skills: [
        'POO', 'Java', 'Spring Boot', 'Gradle - Maven', 'JWT',
        'OAuth 2.0', 'Microservices', 'Jenkins', 'Docker',
        'PHP', 'Python', 'Github',
        'Vue.js', 'HTML', 'CSS', 'JavaScript',
        'PostgreSQL', 'SQLServer', 'MongoDB', 'GCP - SQL',
        'Windows Server 2019', 'Ubuntu 22.04',
        'Microsoft Office', 'Canva', 'Power BI'
      ]
    }
  }
}
</script>

<style scoped>
.about-view {
  max-width: 1200px;
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

.subtitle, .description {
  font-size: 1.3rem;
  text-align: center;
  color: #4A4A4A;
  margin-top: 0;
  margin-bottom: 0;
}

.content-wrapper {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.about-text {
  flex: 1;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.about-text p, .about-text ol {
  margin-bottom: 1rem;
}

.skills-container {
  flex: 1;
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  align-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.skill-tag {
  background-color: #f0f0f0;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
}
</style>
