import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { supabase } from '@/supabase'

import Home from '@/views/Home.vue'
import Articles from '@/views/Articles.vue'
import CreatePost from '@/views/CreatePost.vue'
import PostView from '@/views/PostView.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import About from '@/views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: Articles },
  { path: '/create-post', name: 'create-post', component: CreatePost, meta: { requiresAuth: true } },
  { path: '/post/:slug', name: 'post-view', component: PostView, props: true },
  { path: '/login', component: Login },
  { path: '/Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  
  if (to.meta.requiresAuth) {
    if (!userStore.user) {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        userStore.setUser(session.user)
      } else {
        next('/login')
        return
      }
    }
  }
  
  next()
})

export default router
