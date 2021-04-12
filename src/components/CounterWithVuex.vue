<template>
  <div>
    <div data-test="count">{{ count }}</div>
    <button data-test="increment" @click="increment">Increment</button>
    <button data-test="decrement" @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters("CounterStore", ["count"]),
  },
  methods: {
    increment() {
      this.$store.commit("CounterStore/increment");
    },
    decrement() {
      this.$store.commit("CounterStore/decrement");
    },
  },
});
</script>
