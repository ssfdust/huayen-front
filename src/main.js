import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMobileDetection from 'vue-mobile-detection'

document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, {passive: false});
const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(VueMobileDetection)
app.mount('#app')
