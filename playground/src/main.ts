import { createApp } from 'vue'
import NuxtUI from 'nuxt-ui'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './main.css'
import 'nuxt-ui/dist/style.css'
import 'uno.css'

createApp(App).use(NuxtUI).mount('#app')
