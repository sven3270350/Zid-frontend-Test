import { createApp } from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueCreditCardValidation from 'vue-credit-card-validation';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(VueSidebarMenu)
app.use(VueCreditCardValidation)

app.use(router)

app.mount('#app')
