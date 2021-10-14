<template>
  <p data-testid="count">{{ state.count }}</p>
  <button type="button" data-testid="incrementButton" @click="increment">+</button>
  <button type="button" data-testid="decrementButton" @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
    })
    const increment = () => {
      state.count++
    }
    const decrement = () => {
      state.count--
    }
    return {
      state,
      increment,
      decrement,
    }
  },
})
</script>
