import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundPageComp from '@/components/NotFoundPageComp.vue'

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
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPageComp }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router