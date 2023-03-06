<template>
  <div v-if="activeModal.modal !== null"
    class="wrapper z-10 text-white bg-black/[.5] top-0 left-0 w-screen h-screen absolute">
    <transition name="slide-fade">
      <component v-if="activeModal.modal !== null" class="wrapper__modal absolute top-1/2 left-1/2 -translate-x-50% -translate-y-50%"
        :is="getActuallyModalName" />
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HintModal from "@/components/Modals/HintModal.vue";
import RedirectModal from "./RedirectModal.vue";

export default {
  components: {
    HintModal,
    RedirectModal,
  },
  methods: {
    ...mapMutations({ closeModal: 'modals/removeModal' })
  },
  computed: {
    ...mapState({ activeModal: 'modals' }),
    getActuallyModalName() {
      return this.activeModal.modal.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active до версии 2.1.8 */
  {
  transform: translateX(150px);
  opacity: 0;
}
</style>
