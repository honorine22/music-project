import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/main.css'
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase';
import Icon from './directives/icon'

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(store); 0
        app.use(router);
        app.use(VeeValidatePlugin);
        app.directive('icon', Icon);
        app.mount('#app')
    }
})
