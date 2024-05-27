import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { install } from "@icon-park/vue-next/es/all";
import "@icon-park/vue-next/styles/index.css";

const app = createApp(App);
install(app, "icpk");

app.use(router).mount("#app");
