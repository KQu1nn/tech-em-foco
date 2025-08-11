
import './assets/main.css'
import { LockClosedIcon } from '@heroicons/vue/24/outline'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './plugins/fontawesome'

import { supabase } from '@/supabase.js'
import { useUserStore } from '@/stores/user'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('LockClosedIcon', LockClosedIcon)

async function init() {
  const userStore = useUserStore()

  const { data: { session } } = await supabase.auth.getSession()

  if (session?.user) {
    userStore.setUser(session.user)
  }
}

init().then(() => {
  app.mount('#app')
})
