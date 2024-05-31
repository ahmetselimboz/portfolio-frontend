import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./Routes";
import store from "./store";
import appAxios from "./utils/appAxios";

const app = createApp(App);

app.use(store);
app.use(routes);
app.provide("appAxios", appAxios);
app.mount("#container-1");



