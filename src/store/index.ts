import { createStore, createLogger } from "vuex";
import CounterStore from "./modules/CounterStore";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    CounterStore,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
