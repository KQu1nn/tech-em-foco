import { createRouter, createWebHashHistory } from 'vue-router'

// Importação das páginas
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHashHistory(), // <--- aqui mudou para hash
  routes,
})

export default router
