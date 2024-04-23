import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// BS框架
import './assets/all.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 註冊全域組件
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const app = createApp(App)

app.component('NavbarComponent', NavbarComponent)
app.component('FooterComponent', FooterComponent)

app.use(createPinia())
app.use(router)

app.mount('#app')
