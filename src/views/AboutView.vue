<template>
  <div class="about-view">
    <h1 class="title">ABOUT ME</h1>
    <p class="subtitle">I am a backend developer based in Quito, Ecuador.</p>
    <p class="description">These are my skills, what I do in relation to programming and technology</p>
    
    <div class="content-wrapper">
      <div class="about-text">
        <p>Computer Science Engineer, developing the graduation project.</p>
        <p>I combine a solid theoretical foundation with a practical and holistic approach to solving technological problems. I stand out for my ability to:</p>
        <ol>
          <li>Address challenges in a comprehensive manner, identifying and solving root causes.</li>
          <li>Collaborate effectively in multidisciplinary teams, maintaining focus under pressure.</li>
          <li>Communicate ideas clearly and concisely, facilitating understanding and cooperation.</li>
        </ol>
        <p>My passion for technology and my technical and interpersonal skills, position me as a versatile and results-oriented professional in the field of computing.</p>
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
