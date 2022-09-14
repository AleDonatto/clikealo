import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

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
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/registro',
    name: 'RegistroView',
    component: () => import('@/views/RegistroView.vue')
  },
  {
    path: '/paginas',
    name : 'PaginasView',
    component: () => import('@/views/Admin/PaginasView.vue')
  },
  {
    path: '/formularios',
    name: 'FormularioView',
    component: () => import('@/views/Admin/FormulariosView.vue')
  },
  {
    path: '/terminos-uso',
    name: 'TerminosView',
    component: () => import('@/views/Admin/TerminosView.vue')
  },
  {
    path: '/codigos',
    name: 'CodigosView',
    component: () => import('@/views/Admin/CodigosView.vue')
  },
  {
    path: '/reportes', 
    name: 'ReportesView',
    component: () => import('@/views/Admin/ReporteView.vue')
  },
  {
    path: '/paginas/create',
    name: 'CrearPagina',
    component: () => import('@/views/Admin/Paginas/CrearPaginaView.vue')
  },
  {
    path: '/formularios/create',
    name: 'CrearForm',
    component: () => import('@/views/Admin/Formularios/CrearFormView.vue')
  },
  {
    path: '/terminos/create',
    name: 'CrearTerminos',
    component: () => import('@/views/Admin/Terminos/CrearTerminosView.vue')
  },
  {
    path: '/codigos/create',
    name: 'CreateCodigos',
    component: () => import('@/views/Admin/Codigos/CrearCodigo.vue')
  },
  {
    path: '/paginas/edit/:id',
    name: 'EditPagina',
    component: () => import('@/views/Admin/Paginas/CrearPaginaView.vue')
  },
  {
    path: '/formularios/edit/:id',
    name: 'EditForm',
    component: () => import('@/views/Admin/Formularios/CrearFormView.vue')
  },
  {
    path: '/terminos/edit/:id',
    name: 'EditTerminos',
    component: () => import('@/views/Admin/Terminos/CrearTerminosView.vue')
  },
  {
    path: '/codigos/edit/:id',
    name: 'EditCodigos',
    component: () => import('@/views/Admin/Codigos/CrearCodigo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
