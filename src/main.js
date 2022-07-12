import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { firestorePlugin } from 'vuefire'

createApp(App)
  .provide('firestorePlugin', firestorePlugin)
  .use(router)
  .mount('#app')
