import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router