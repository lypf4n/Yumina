<template>
  <TopBar />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TopBar from "@/components/TopBar.vue"

export default defineComponent({
  name: "HomeView",
  components: {
    TopBar,
  },
})
</script>
