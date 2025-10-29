<template>
  <div class="skills-list app-card">
    <h3 class="skills-title">Habilidades Técnicas</h3>
    <div class="skills-grid">
      <span 
        v-for="skill in skills" 
        :key="skill" 
        class="skill-tag"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsList',
  props: {
    skills: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.skills-list {
  flex: 1; /* Ocupa toda la altura disponible */
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%; /* Ocupa toda la altura del contenedor padre */
}

.skills-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  color: var(--color-text);
}

.skills-grid {
  flex: 1; /* Ocupa el espacio restante */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start; /* Alinea las tags al inicio */
  gap: 0.5rem;
  overflow-y: auto; /* Scroll si es necesario */
  padding: 0.5rem;
}

.skill-tag {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-sm);
  transition: all 0.2s ease;
  border: 1px solid #e0e0e0;
  flex: 0 0 auto;
  height: fit-content;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Scrollbar personalizado */
.skills-grid::-webkit-scrollbar {
  width: 6px;
}

.skills-grid::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.skills-grid::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.skills-grid::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>