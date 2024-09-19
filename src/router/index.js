import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/resumeView',
    name: 'resumeView',
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/projectsView',
    name: 'projectsView',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/contactView',
    name: 'contactView',
    component: () => import('../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
