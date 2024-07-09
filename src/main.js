import "./assets/css/main.scss";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import Antd from "ant-design-vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(router).use(Antd).use(pinia);

app.mount("#app");
