import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/LandingView.vue')
  },
  {
    path: '/page/:id',
    name: 'adaptation',
    component: () => import('../views/AdaptationView.vue')
  },
  {
    path: '/finish',
    name: 'finish',
    component: () => import('../views/FinishView.vue')
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('../views/AnalyticsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
