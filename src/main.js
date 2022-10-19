import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import toast from '@k90mirzaei/vue-toast'
import '@k90mirzaei/vue-toast/dist/index.css'

createApp(App).use(router).use(toast).mount('#app')
