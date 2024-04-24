import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// BS框架
import './assets/all.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// API
import axios from 'axios'
import VueAxios from 'vue-axios'

// 註冊全域組件
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const app = createApp(App)

const api = import.meta.env.VITE_API
app.config.globalProperties.$axios = axios.create({
  baseURL: api
})

app.component('NavbarComponent', NavbarComponent)
app.component('FooterComponent', FooterComponent)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
