<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <KeyCounter />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <SampleText msg="aaaa" />
    <Counter /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import SampleText from "@/components/SampleText.vue";
// import Counter from "@/components/Counter.vue";
import KeyCounter from "@/components/KeyCounter.vue";

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    // SampleText,
    // Counter,
    KeyCounter,
  },
});
</script>
