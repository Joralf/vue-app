interface CounterStoreState {
  count: number;
}

// initial state
const state = (): CounterStoreState => ({
  count: 0,
});

// getters
const getters = {
  count: (state: CounterStoreState): number => {
    return state.count;
  },
};

// actions
const actions = {};

// mutations
const mutations = {
  increment(state: CounterStoreState): void {
    state.count++;
  },
  decrement(state: CounterStoreState): void {
    state.count--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

// const CounterStore = createStore({
//   state() {
//     return {
//       count: 0,
//     };
//   },
//   mutations: {
//     increment(state: CounterStoreState) {
//       state.count++;
//     },
//     decrement(state: CounterStoreState) {
//       state.count--;
//     },
//   },
// });

// export default CounterStore;
