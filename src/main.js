// src/main.js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './plugins/fontawesome'

const app = createApp(App)   // ← Primeiro cria o app
app.use(router)              // ← Depois usa o router
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')           // ← Por fim, monta na #app
