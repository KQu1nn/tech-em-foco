import { createRouter, createWebHashHistory } from 'vue-router'

// Importação das páginas
import Home from '@/views/Home.vue'
import Articles from '@/views/Articles.vue'
import CreatePost from '@/views/CreatePost.vue'
import PostView from '@/views/PostView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: Articles },
  { path: '/create-post', component: CreatePost },
  { path: '/post/:slug', name: 'post-view', component: PostView, props: true }
]

const router = createRouter({
  history: createWebHashHistory(), // <--- aqui mudou para hash
  routes,
})

export default router
