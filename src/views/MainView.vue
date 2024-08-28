<template>
    <div class="main-view">
        <h1 class="name">Roberth Troya</h1>
        <p class="title">COMPUTER SCIENCE ENGINEER, BACKEND</p>
        <button class="projects-button" @click="goToProjects">Proyectos</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    name: 'MainView',
    setup() {
        const router = useRouter()

        const goToProjects = () => {
            router.push('/projects')
        }

        return {
            goToProjects
        }
    }
}
</script>

<style scoped>
.main-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
}

.name {
    color: #4A4A4A;
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.title {
    font-size: 1.2rem;
    color: #6c757d;
    margin-bottom: 2rem;
}

.projects-button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.projects-button:hover {
    background-color: #0056b3;
}
</style>