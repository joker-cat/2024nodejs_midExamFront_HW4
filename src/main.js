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

const app = createApp(App)

app.component('NavbarComponent', NavbarComponent)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
