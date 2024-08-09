// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
// import VeeValidate from 'vee-validate';


// Vue.use(VeeValidate);

const app = createApp(App)
app.use(router)
app.mount('#app')
