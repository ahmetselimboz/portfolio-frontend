import "./frontend/assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./frontend/Routes";
import store from "./store";


const app = createApp(App);

app.use(store);
app.use(routes);
app.mount("#container-1");



