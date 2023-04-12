import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/main.css'
import VeeValidatePlugin from './includes/validation'

let app = createApp(App);

app.use(store);
app.use(router);
app.use(VeeValidatePlugin);

app.mount('#app')

