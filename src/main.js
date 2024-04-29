import './assets/main.css'

import { createApp } from 'vue'
import App from './pages/App.vue'
import routes from "./Routes"
    

const app = createApp(App);


app.use(routes);

app.mount('#app');
