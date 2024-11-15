import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import About from '@/views/AboutPage.vue'
import Contact from '@/views/ContactPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
