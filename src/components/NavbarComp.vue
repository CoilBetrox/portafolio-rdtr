<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <router-link to="/" class="logo">
                <img src="@/assets/logo.png" alt="Logo" />
                <span class="name-inicio">RoberthTroya</span>
            </router-link>
        </div>
        <div class="navbar-menu">
            <router-link to="/" class="navbar-item">{ Home }</router-link>
            <router-link to="/about" class="navbar-item">{ About }</router-link>
            <router-link to="/projects" class="navbar-item">{ Projects }</router-link>
            <router-link to="/contact" class="navbar-item">{ Contact }</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.name-inicio {
    font-size: 1.5rem;
    margin-left: 1rem;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

.navbar-brand {
    display: flex;
    align-items: center;
    margin-left: 5%;
}

.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

.logo img {
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
}

.navbar-menu {
    display: flex;
    gap: 1rem;
    margin-right: 5%;
}

.navbar-item {
    text-decoration: none;
    color: #007bff;
    font-weight: 500;
    font-size: 1.3rem;
}

.navbar-item:hover {
    text-decoration: underline;
}
</style>