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
    meta: {keepAlive: true},
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    meta: {keepAlive: true},
    component: () => import('../views/ManageView.vue')
  },
  {
    path: '/workspace',
    name: 'workspace',
    meta: {keepAlive: true},
    component: () => import('../views/WorkspaceView.vue')
  },
  {
    path: '/update',
    name: 'update',
    meta: {keepAlive: true},
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {keepAlive: true},
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
