import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMobileDetection from 'vue-mobile-detection'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

const app = createApp(App)
app.use(router)
app.use(VueLoading)
app.use(VueAxios, axios)
app.use(VueMobileDetection)
app.mount('#app')
