import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: EventList,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
