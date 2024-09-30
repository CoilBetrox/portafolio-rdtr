<template>
  <div class="principal-content">
    <h1 class="title">PROYECTOS</h1>
    <p class="subtitle">Aquí encontrará los proyectos que he desarrollado, estos incluyen</p>
    <p class="description">descripción general, herramientas utilizadas y enlaces al producto.</p>
    
    <div class="content-wrapper">
        <div class="project-item" v-for="project in projects" :key="project.nameProject">
          <div class="content-wraper-image">
            <img :src="project.imageProject" alt="Imagen del proyecto">
          </div>
          <div class="content-wraper-details">
            <h3>{{ project.nameProject }}</h3>
            <div class="container-description">
              <p><strong>Descripción:</strong> {{ project.descriptionProject }}</p>
            </div>
            <p><strong>Tecnologías:</strong> {{ project.tecnoProject }}</p>
            <p><strong>Estado:</strong> {{ project.statusProject }}</p>
            <button class="generic-button" @click="showDetails(project)">Link del proyecto</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import rdtroyaImage from '@/assets/rdtroyaram.png';
import appSalonImage from '@/assets/appsalon.png';
import celecepImage from '@/assets/celecep.png';

export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          nameProject: 'Plataforma de visualización de energía producida en tiempo real para CELEC EP Termopichincha',
          descriptionProject: 'Aplicativo web desarrollado para CELEC EP Termopichincha. Liderado por: Ing. Andrés Oviedo. Equipo de desarrollo: Ing. Alexander Quintana e Ing. Roberth Troya. El aplicativo tiene la capacidad de capturar y normalizar en tiempo real la energía activa y pasiva producida por las plantas de generación y las Unidades de cada planta para mostrarla en tiempo real.',
          tecnoProject: 'PHP 8, Apache, HTML, CSS, JavaScript, AJAX, AmCharts 5, PostgreSQL, Windows server 2019',
          imageProject: celecepImage,
          urlProject: 'https://potencia.celec.gob.ec/pages/index.php',
          statusProject: 'Completo'
        },
        {
          nameProject: 'Portafolio Personal',
          descriptionProject: 'Aplicativo web de visualización de habilidades, proyectos desarrollados y captura de información de contactos. El proyecto integra tecnologías escalables muy demandadas. Mantiene actualización constante y despliegue automático mediante Jenkins, GitHub y Oracle Cloud',
          tecnoProject: 'Vue.js, GitHub, Jenkins, Oracle Cloud, Ubuntu 22.04, Putty, Draw.io, Dominio Hostinger, Formspree',
          imageProject: rdtroyaImage,
          urlProject: 'https://rdtroyaram.site/',
          statusProject: 'Completo'
        },
        {
          nameProject: 'Plataforma para un salón de belleza con usuarios y administradores',
          descriptionProject: 'Aplicativo web que integra registro de usuarios con validación de correo, restablecer contraseña, registro, resumen, búsqueda de citas y sección administrador. Todo el sistema se encuentra integrado a una base de datos MySql',
          tecnoProject: 'PHP 8, Apache, HTML, CSS, JavaScript, MySQL',
          imageProject: appSalonImage,
          urlProject: 'https://google.com',
          statusProject: 'Update'
        },
        /*
        {
          nameProject: 'Proyecto 3',
          descriptionProject: 'Descripcion de proyecto 3',
          tecnoProject: '',
          imageProject: 'image 3',
          urlProject: 'link 3',
          statusProject: 'Desarrollo'
        },
        */
      ]
    }
  },
  methods: {
    showDetails(project) {
      window.open(project.urlProject, '_blank');
    }
  }
}
</script>

<style scoped>
img {
  max-width: 16rem;
  max-height: 16rem;
}

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
  margin-left: 4rem;
  margin-right: 4rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

.container-description {
  max-width: 35rem;
}

@media (max-width: 768px) {
  img {
    max-width: 9rem;
    max-height: 9rem;
  }

  .content-wraper-image {
    padding-top: 1rem;
    padding-bottom: 1rem;
    order: 2;
  }

  .project-item {
    display: flex;
    flex-direction: column;
  }

  .content-wrapper {
    flex-direction: column;
    margin-left: 0rem;
    margin-right: 0rem;
  }
}
</style>
