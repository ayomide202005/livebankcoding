import { createRouter, createWebHistory } from 'vue-router'
import signup from '../view/signup.vue'
import signin from '../view/signin.vue'
import dashboard from '../view/dashboard.vue'

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },

  {
    path: '/signin',
    component : signin
  },

  {

    path: '/dashboard',
    component: dashboard
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router