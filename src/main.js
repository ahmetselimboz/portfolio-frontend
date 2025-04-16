import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./Routes";
import store from "./store";
import appAxios from "./utils/appAxios";
import i18n from "./utils/i18n";
import { createHead } from "@vueuse/head";
import VueGtag from "vue-gtag";
import VueLazyLoad from 'vue-lazyload';

const head = createHead();
const app = createApp(App);

app.use(store);
app.use(routes);
app.provide("appAxios", appAxios);
app.use(i18n);
app.use(head);
// app.use(VueGtag, {
// //   appName: "ahmetselimboz.com",
// //   pageTrackerScreenviewEnabled: true,
//   config: {
//     id: "G-GVWQ2F2229",
//   },
// });

app.use(VueLazyLoad, {
    preLoad: 1.3,
    error: '',
    loading: '',
    attempt: 1,
   
});
app.mount("#container-1");
