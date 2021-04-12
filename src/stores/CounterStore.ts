import { createStore } from "vuex";

interface CounterStoreState {
  count: number;
}
const CounterStore = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: CounterStoreState) {
      state.count++;
    },
    decrement(state: CounterStoreState) {
      state.count--;
    },
  },
});

export default CounterStore;
