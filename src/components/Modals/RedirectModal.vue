<template>
  <div class="main flex self-center">
    <div class="solution bg-zinc-800 p-8 rounded-3xl w-96 self-center">
      <div class="solution__title flex items-center justify-between">
        <div class="solution__inner flex items-center gap-4">
          <h2 class="solution__name">Attension</h2>
        </div>
      </div>
      <h2 class="solution__info opacity-50 mt-7">{{ getData.modal.data }}</h2>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';


export default {
  components: {

  },
  methods: {
        ...mapMutations({closeModal: 'modals/removeModal'})
    },
    computed: {
        ...mapState({getData: 'modals'}),
    },
}
</script>

<style lang="scss" scoped></style>