import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/reset.css'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/layout/BaseDialog.vue'
import './firebase'

const app = createApp(App)
const pinia = createPinia()
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.use(pinia)
app.mount('#app')
