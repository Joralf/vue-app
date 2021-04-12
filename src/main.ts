import { createApp } from "vue";
import CounterStore from "./stores/CounterStore";
import App from "./App.vue";

const app = createApp(App);

app.use(CounterStore);

app.mount("#app");
