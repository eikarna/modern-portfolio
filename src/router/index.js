import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/projects', component: () => import('../views/Projects.vue') },
  { path: '/projects/:id', component: () => import('../views/ProjectDetails.vue') },
  { path: '/contact', component: () => import('../views/Contact.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
