<template>
<div>
  <p>{{ msg }}</p>
  <p data-testid="upperMsg">{{ toUpperMsg }}</p>
  <p data-testid="name">{{ state.name }}</p>
</div>

</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    const state = reactive({
      name: 'Hoge Abcde',
      version: 'Vue 3',
    })
    const toUpperMsg = computed(() => {
      return props.msg?.toUpperCase()
    })
    return {
      state,
      toUpperMsg
    }
  },
})
</script>
