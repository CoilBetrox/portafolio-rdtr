<template>
  <div class="about-view container">
    <PageHeader 
      title="SOBRE MÍ"
      subtitle="Soy un desarrollador backend con residencia en Quito, Ecuador"
      description="Estas son mis habilidades, lo que hago relacionado con la programación y tecnología"
    />
    
    <div class="about-content">
      <div class="about-column">
        <AboutDescription />
      </div>
      <div class="about-column">
        <SkillsList :skills="skills" />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/common/PageHeader.vue'
import AboutDescription from '@/components/about/AboutDescription.vue'
import SkillsList from '@/components/about/SkillsList.vue'
import { ref } from 'vue'

export default {
  name: 'AboutView',
  components: {
    PageHeader,
    AboutDescription,
    SkillsList
  },
  setup() {
    const skills = ref([
      'POO', 'Java', 'Spring Boot', 'Gradle - Maven', 'JWT',
      'OAuth 2.0', 'Microservices', 'Jenkins', 'Docker',
      'PHP', 'Python', 'Github', 'Vue.js', 'HTML', 
      'CSS', 'JavaScript', 'PostgreSQL', 'SQLServer', 
      'MongoDB', 'GCP - SQL', 'Windows Server 2019', 
      'Ubuntu 22.04', 'Microsoft Office', 'Canva', 'Power BI'
    ])

    return {
      skills
    }
  }
}
</script>

<style scoped>
.about-view {
  padding: var(--spacing-xl) 0;
  min-height: calc(100vh - 80px);
}

.about-content {
  display: flex;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  align-items: stretch; /* Hace que ambas columnas tengan la misma altura */
}

.about-column {
  flex: 1; /* Cada columna ocupa la mitad del espacio */
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
  
  .about-view {
    padding: var(--spacing-lg) 0;
  }
}
</style>