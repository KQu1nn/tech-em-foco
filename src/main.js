// src/main.js
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './plugins/fontawesome'

const app = createApp(App)   
const pinia = createPinia()
app.use(router)              
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.mount('#app')           
