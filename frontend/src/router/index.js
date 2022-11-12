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
    path: '/work',
    name: 'work',
    component: () => import('../views/WorkView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/ProjectView.vue'),
    props: {
      active: Boolean
    }
  },
  {
    path: '/about_page',
    name: 'about_page',
    component: () => import('../pages/AboutPages.vue')
  },
  {
    path: '/approche_page',
    name: 'approche_page',
    component: () => import('../pages/ApprochePage.vue')
  },
  {
    path: '/urban_vision',
    name: 'urban_vision',
    component: () => import('../pages/UrbanVisionPage.vue')
  },
  {
    path: '/florame',
    name: 'florame',
    component: () => import('../pages/Florame.vue')
  },
  {
    path: '/agence_hauwel',
    name: 'agence_hauwel',
    component: () => import('../pages/AgenceHauwel.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
