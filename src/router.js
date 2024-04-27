import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';
import { AboutPage, HomePage, ReceptionPage } from './pages/index.js'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Inicio',
      layout: DefaultLayout
    }
  },
  {
    path: '/about',
    component: AboutPage,
    meta: {
      title: 'Acerca de',
      layout: DefaultLayout
    }      
  },
  {
    path: '/reception',
    component: ReceptionPage,
    meta: {
      title: 'Recepcion',
      layout: DefaultLayout
    }
  },
];

const router = createRouter({
  /*history: createWebHistory(import.meta.env.BASE_URL)*/
  history: createWebHistory(),
  routes
})

export default router
