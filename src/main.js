// src/main.js
import './assets/main.css'
import { LockClosedIcon } from '@heroicons/vue/24/outline'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './plugins/fontawesome'

import { supabase } from '@/supabase.js'
import { useUserStore } from '@/stores/user'

const app = createApp(App)
const pinia = createPinia()

// Registra os plugins e componentes globais
app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('LockClosedIcon', LockClosedIcon)

// Função para recuperar o usuário da sessão antes de montar o app
async function init() {
  const userStore = useUserStore()

  // Pega a sessão atual do supabase, que contém o usuário e token
  const { data: { session } } = await supabase.auth.getSession()

  if (session?.user) {
    userStore.setUser(session.user)
  }
}

// Inicializa a sessão e só depois monta o app
init().then(() => {
  app.mount('#app')
})
