import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/layout/BaseDialog.vue'
import AddNewTask from './components/dialogs/AddNewTask.vue'
const app = createApp(App)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)
app.component('add-new-task', AddNewTask)

app.mount('#app')
