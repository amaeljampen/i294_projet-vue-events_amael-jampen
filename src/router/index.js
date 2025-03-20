import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/AboutView.vue'
import NewView from '../views/NewView.vue'

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
  {
    path: '/New',
    name: 'New',
    component: NewView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
