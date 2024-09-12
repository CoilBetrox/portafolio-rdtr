<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <router-link to="/" class="logo">
                <img src="@/assets/logort6.png" alt="Logo" />
                <span class="name-inicio">Roberth Troya</span>
            </router-link>
            <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">☰</button>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
            <router-link to="/" class="navbar-item" @click="closeMenu">{ Inicio }</router-link>
            <router-link to="/about" class="navbar-item" @click="closeMenu">{ Info }</router-link>
            <router-link to="/projects" class="navbar-item" @click="closeMenu">{ Proyectos }</router-link>
            <router-link to="/contact" class="navbar-item" @click="closeMenu">{ Contacto }</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComp',
    data() {
        return {
            isMenuActive: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive
        },
        closeMenu() {
            this.isMenuActive = false;
            window.scrollTo(0, 0);
        }
    }
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
    justify-content: space-between;
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
    width: 45px;
    height: 45px;
    margin-right: 0.5rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
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
    transition: color 0.3s, background-color 0.3s;
}

.navbar-item:hover {
    text-decoration: underline;
}

@media (max-width: 820px) {
  .menu-toggle {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #f8f9fa;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-right: 0;
  }

  .navbar-menu.is-active {
    display: flex;
  }

  .navbar-brand {
    width: 100%;
  }
}
</style>