<template>
  <div>
    <div data-test="count">{{ count }}</div>
    <button data-test="increment" @click="increment">Increment</button>
    <button data-test="decrement" @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
});
</script>
