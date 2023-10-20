import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import BaseClientesView from '../views/BaseClientesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../components/Login.vue')
  },
  {
    path: "/AreasDeTrabajo",
    name: "AreasDeTrabajo",
    component: () => import('../components/AreasDeTrabajo.vue')
  },
  {
    path: "/BaseDeClientes",
    name: "BaseDeClientes",
    component: () => import('../components/BaseClientes.vue')
  },
  {
    path: "/Renovaciones",
    name: "Renovaciones",
    component: () => import('../components/Renovaciones.vue')
  },
  {
    path : "/SistemasNuevo",
    name: "SistemasNuevos",
    component: () => import('../components/SistemasNuevos.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
