import { createRouter, createWebHistory } from 'vue-router'

//Views
import Inicio from '../views/InicioView.vue'
import Crear from '../views/CrearView.vue'
import Update from '../views/UpdateView.vue'
import Series from '../views/SeriesView.vue'
import Peliculas from '../views/PeliculasView.vue'
import Novedades from '../views/NovedadesView.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/series',
    name: 'Series',
    component: Series
  },
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: Peliculas
  },
  {
    path: '/novedades',
    name: 'Novedades Mas Vistas',
    component: Novedades
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/actualizar/:pelicula',
    name: 'actualizar',
    component: Update
  },

]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
