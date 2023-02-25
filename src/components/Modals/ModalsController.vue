<template>
  <div class="modal absolute w-screen h-screen">
    <component v-if="modals !== null" :is="getActuallyModalName" />
  </div>
</template>

<script>
import HintModal from "@/components/Home/BaseModal.vue";
export default {
  components: {
    HintModal,
  },
  data() {
    return {
      modals: {
        name: "HintModal",
        data: "Решение перевой задачи",
      },
    };
  },
  computed: {
    getActuallyModalName() {
      return this.modals.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
