<template>
  <div class="principal-content">
    <h1 class="title">PROYECTOS</h1>
    <p class="subtitle">Aquí encontrará los proyectos que he desarrollado, estos incluyen</p>
    <p class="description">descripción general, herramientas utilizadas y enlaces al producto.</p>
    
    <div class="content-wrapper">
        <div class="project-item" v-for="project in projects" :key="project.id">
          <div class="project-left">
            <div class="content-wraper-image">
              <img :src="project.image" :alt="'Imagen de ' + project.name">
            </div>
            <button class="generic-button" @click="showDetails(project)">Link del proyecto</button>
          </div>
          <div class="content-wraper-details">
            <h3>{{ project.name }}</h3>
            <div class="container-description">
              <p><strong>Descripción:</strong> {{ project.description }}</p>
            </div>
            <p><strong>Tecnologías:</strong> {{ project.technologies }}</p>
            <p><strong>Estado:</strong> 
              <span :class="['status-badge', `status-${project.status.toLowerCase()}`]">
                {{ getStatusText(project.status) }}
              </span>
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import rdtroyaImage from '@/assets/images/rdtroyaram.png'
import appSalonImage from '@/assets/images/appsalon.png'
import celecepImage from '@/assets/images/celecep.png'
import etalentImage from '@/assets/images/etalent.png'

export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Sistema interno de seguimiento de personal, retroalimentación y gestión de capacitación para ETAFASHION | RM',
          description: 'Aplicativo web para el seguimiento de personal, desarrollada en dos módulos, (frontend-Vue.js) y (backend-SpringBoot). La plataforma incluye secciones dedicadas para Administradores y Clientes internos, ofreciendo funcionalidades específicas para cada perfil de usuario. La integración de JWT (JSON Web Tokens) añade una capa adicional de seguridad, asegurando un acceso controlado a los datos sensibles. El despliegue de la aplicación se realizó en un servidor en la nube de Oracle, garantizando accesibilidad y rendimiento óptimo. Por motivos propios el endpoint no se encuentra disponible al público y cualquier consula acerca de los repositorios backend y frontend hacerlos a mi correo: roberthdanielt@gmail.com',
          technologies: 'Spring Boot 3.3.5, Java 17, Gradle 8.7, JWT, Vue.js, GitHub, Jenkins, Oracle Cloud, Ubuntu 22.04, Putty, PostgreSQL',
          image: etalentImage,
          url: 'https://google.com',
          status: 'Completo'
        },
        {
          id: 2,
          name: 'Plataforma de visualización de energía producida en tiempo real para CELEC EP Termopichincha',
          description: 'Aplicativo web desarrollado para CELEC EP Termopichincha. Liderado por: Ing. Andrés Oviedo. Equipo de desarrollo: Ing. Alexander Quintana e Ing. Roberth Troya. El aplicativo tiene la capacidad de capturar y normalizar en tiempo real la energía activa y pasiva producida por las plantas de generación y las Unidades de cada planta para mostrarla en tiempo real.',
          technologies: 'PHP 8, Apache, HTML, CSS, JavaScript, AJAX, AmCharts 5, PostgreSQL, Windows server 2019',
          image: celecepImage,
          url: 'https://potencia.celec.gob.ec/pages/index.php',
          status: 'Completo'
        },
        {
          id: 3,
          name: 'Portafolio Personal',
          description: 'Aplicativo web de visualización de habilidades, proyectos desarrollados y captura de información de contactos. El proyecto integra tecnologías escalables muy demandadas. Mantiene actualización constante y despliegue automático mediante Jenkins, GitHub y Oracle Cloud',
          technologies: 'Vue.js, GitHub, Github Actions, Oracle Cloud, Ubuntu 22.04, Putty, Draw.io, Dominio Hostinger, Formspree',
          image: rdtroyaImage,
          url: 'https://rdtroyaram.site/',
          status: 'Completo'
        },
        {
          id: 4,
          name: 'Plataforma para un salón de belleza con usuarios y administradores',
          description: 'Aplicativo web que integra registro de usuarios con validación de correo, restablecer contraseña, registro, resumen, búsqueda de citas y sección administrador. Todo el sistema se encuentra integrado a una base de datos MySql',
          technologies: 'PHP 8, Apache, HTML, CSS, JavaScript, MySQL',
          image: appSalonImage,
          url: 'https://google.com',
          status: 'Update'
        }
      ]
    }
  },
  methods: {
    showDetails(project) {
      window.open(project.url, '_blank')
    },
    getStatusText(status) {
      const statusMap = {
        'Completo': 'Completo',
        'Update': 'En Actualización',
        'Desarrollo': 'En Desarrollo'
      }
      return statusMap[status] || status
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
  margin-left: 4rem;
  margin-right: 4rem;
}

.project-item {
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  gap: 2rem;
}

.project-left {
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.content-wraper-image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.content-wraper-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.content-wraper-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container-description {
  max-width: 100%;
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
  width: 100%;
  max-width: 200px;
}

.generic-button:hover {
  background-color: #0056b3;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 0.5rem;
}

.status-completo {
  background-color: #d4edda;
  color: #155724;
}

.status-update {
  background-color: #fff3cd;
  color: #856404;
}

.status-desarrollo {
  background-color: #cce7ff;
  color: #004085;
}

@media (max-width: 768px) {
  .content-wrapper {
    margin-left: 0;
    margin-right: 0;
  }

  .project-item {
    flex-direction: column;
    gap: 1rem;
  }

  .project-left {
    flex: none;
    width: 100%;
  }

  .content-wraper-image img {
    max-width: 200px;
  }

  .generic-button {
    max-width: 200px;
  }
}
</style>