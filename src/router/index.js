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
    meta: {requiresAuth: true},
    component: () => import('../components/AreasDeTrabajo.vue'),
    
  },
  {
    path: "/BaseDeClientes/:area",
    name: "BaseDeClientes",
    meta: {requiresAuth: true},
    component: () => import('../components/BaseClientes.vue')
  },
  {
    path : "/SistemasNuevo",
    name: "SistemasNuevos",
    meta: {requiresAuth: true},
    component: () => import('../components/SistemasNuevos.vue')
  },
  {
    path: "/SistemasNuevo/add",
    name: "AgregarSistema",
    meta: {requiresAuth: true},
    component: () => import('../components/Sistemas/add.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router
