<template>
  <nav>
    <a id="profile" href="/profile">Profile</a>
    <a v-show="state.admin" id="admin" href="/admin">Admin</a>
  </nav>

</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup(props) {
    const state = reactive({
      admin: false,
    })
    return {
      state,
    }
  },
})
</script>
