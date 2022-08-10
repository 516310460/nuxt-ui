import { createApp } from 'vue'
import Onu from 'nuxt-ui'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './main.css'
import 'nuxt-ui/dist/style.css'
import 'uno.css'

createApp(App).use(Onu).mount('#app')
