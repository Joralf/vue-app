<template>
  <div>
    <div data-test="count">{{ count }}</div>
    <button data-test="increment" @click="increment">Increment</button>
    <button data-test="decrement" @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface CounterData {
  count: number;
}

export default defineComponent({
  data(): CounterData {
    return { count: 0 };
  },
  methods: {
    increment(): void {
      this.count++;
    },
    decrement(): void {
      this.count--;
    },
  },
});
</script>
