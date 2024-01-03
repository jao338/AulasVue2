import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/users/:id',
    name: 'users-edit',

    component: () => import("../views/UserEditView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
