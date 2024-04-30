import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';
import { AboutPage, HomePage, ReceptionPage, LoginPage, CategoriesPage, NewAccount, NotFound } from './pages/index.js'

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
  {
    path: '/login',
    component: LoginPage,
    meta: {
      title: 'Iniciar sesión',
      layout: DefaultLayout
    }
  },
  {
    path: '/categories',
    component: CategoriesPage,
    meta: {
      title: 'Categorías',
      layout: DefaultLayout
    }
  },
  {
    path: '/register',
    component: NewAccount,
    meta: {
      title: 'Crear cuentas',
      layout: DefaultLayout
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: {
        title: 'Página no encontrada',
        layout: DefaultLayout
    }
  },
];

const router = createRouter({
  /*history: createWebHistory(import.meta.env.BASE_URL)*/
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Tienda'
})

export default router
