import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/ProjectsView.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/ContactView.vue')
      }
    ]
  },
  {
    path: '/valentine',
    name: 'Valentine',
    component: () => import('@/components/layout/AppLayoutNoNav.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/ValentineView.vue')
      }
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router