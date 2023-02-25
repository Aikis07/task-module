<template>
  <div id="app bg-bg-main">
    <router-view />
    <modals-controller />
  </div>
</template>

<script>
import ModalsController from "@/components/Modals/ModalsController.vue"
export default {
  components: {
    ModalsController,
  },
};
</script>

<style lang="scss"></style>
