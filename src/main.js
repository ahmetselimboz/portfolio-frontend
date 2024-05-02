import "./frontend/assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import routes from "./Routes";
import store from "./store";
import DOM from "./DOM";

const app = createApp(App);

app.use(store);

app.use(routes);
app.use(DOM);
app.mount("#app");
