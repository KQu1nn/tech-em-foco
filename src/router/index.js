import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

import Home from '@/views/Home.vue'
import Articles from '@/views/Articles.vue'
import CreatePost from '@/views/CreatePost.vue'
import PostView from '@/views/PostView.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: Articles },
  { path: '/create-post', component: CreatePost, meta: { requiresAuth: true } },
  { path: '/post/:slug', name: 'post-view', component: PostView, props: true },
  { path: '/login', component: Login },
  { path: '/Dashboard', component: Dashboard, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.user) {
    next('/login')
  } else {
    next()
  }
})

export default router
