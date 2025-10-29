<template>
  <div class="projects-list">
    <ProjectCard 
      v-for="project in projects" 
      :key="project.id" 
      :project="project" 
      @project-click="handleProjectClick"
    />
  </div>
</template>

<script>
import ProjectCard from '@/components/projects/ProjectCard.vue'

export default {
  name: 'ProjectsList',
  components: {
    ProjectCard
  },
  props: {
    projects: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  emits: ['project-click'],
  methods: {
    handleProjectClick(project) {
      this.$emit('project-click', project)
    }
  }
}
</script>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}
</style>