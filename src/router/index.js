import { createRouter, createWebHistory } from 'vue-router'
import CatalogoView from '../views/CatalogoView.vue'
import PedidosView from '../views/PedidosView.vue'
import CocinaView from '../views/CocinaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CatalogoView
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: CatalogoView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: PedidosView
  },
  {
    path: '/cocina',
    name: 'cocina',
    component: CocinaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
