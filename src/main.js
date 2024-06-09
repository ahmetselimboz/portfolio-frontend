import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./Routes";
import store from "./store";
import appAxios from "./utils/appAxios";
import i18n from "./utils/i18n";
import {createHead} from "@vueuse/head"
const head = createHead()

const app = createApp(App);

app.use(store);
app.use(routes);
app.provide("appAxios", appAxios);
app.use(i18n);
app.use(head)
app.mount("#container-1");



