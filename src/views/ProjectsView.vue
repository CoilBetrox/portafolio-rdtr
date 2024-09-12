<template>
  <div class="principal-content">
    <h1 class="title">PROJECTS</h1>
    <p class="subtitle">Here you will find my developed projects which includes:</p>
    <p class="description">overview, tools used and links to the product.</p>
    
    <div class="content-wrapper">
        <div class="project-item" v-for="project in projects" :key="project.nameProject">
          <div class="content-wraper-image">
            <img :src="project.imageProject" alt="Imagen del proyecto">
          </div>
          <div class="content-wraper-details">
            <h3>{{ project.nameProject }}</h3>
            <p><strong>Descripción:</strong> {{ project.descriptionProject }}</p>
            <p><strong>Tecnologías:</strong> {{ project.tecnoProject }}</p>
            <button class="generic-button" @click="showDetails(project)">Detalles</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          nameProject: 'Plataforma para un salón de belleza con usuarios y administradores',
          descriptionProject: 'Este aplicativo integra registro de usuarios con validación de correo, reestablecer contraseña, servicios, registro de citas, resumen de citas, búsqueda de citas, sección administrador base de datos MySql',
          tecnoProject: 'PHP 8, Apache, Html, Css, Javascript, MySql',
          imageProject: 'image 1',
          urlProject: 'link 1'
        },
        /*
        {
          nameProject: 'Proyecto 2',
          descriptionProject: 'Descripcion de proyecto 2',
          tecnoProject: '',
          imageProject: 'image 2',
          urlProject: 'link 2'
        },
        {
          nameProject: 'Proyecto 3',
          descriptionProject: 'Descripcion de proyecto 3',
          tecnoProject: '',
          imageProject: 'image 3',
          urlProject: 'link 3'
        },
        */
      ]
    }
  },
  methods: {
    showDetails() {

    }
  }
}
</script>

<style scoped>
.principal-content {
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
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.description-text-wrapper {
  flex: 1;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.description-text-wrapper p, .description-text-wrapper ol {
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
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.project-item {
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
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

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
}
</style>
