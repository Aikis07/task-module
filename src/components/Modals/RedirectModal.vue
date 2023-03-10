<template>
  <div class="main flex self-center">
    <div class="solution bg-zinc-800 p-6 rounded-3xl w-80 lg:w-96 self-center">
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
import { mapState } from 'vuex';


export default {
  computed: {
    ...mapState({ getData: 'modals' }),
  },
}
</script>

<style lang="scss" scoped></style>