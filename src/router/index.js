import { createRouter, createWebHashHistory } from 'vue-router'

// Importação das páginas
import Home from '@/views/Home.vue'
import Articles from '@/views/Articles.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: Articles },
]

const router = createRouter({
  history: createWebHashHistory(), // <--- aqui mudou para hash
  routes,
})

export default router
