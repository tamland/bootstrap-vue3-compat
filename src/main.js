import { createApp } from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

const app = createApp(App)
app.use(BootstrapVue)
app.use(BootstrapVueIcons)
app.mount('#app')
