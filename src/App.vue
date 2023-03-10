<template>
  <div id="app" class="bg-main h-full">
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    <modals-controller />
  </div>
</template>

<script>
import ModalsController from "@/components/Modals/ModalsController.vue"
import { mapMutations } from "vuex";

export default {
  components: {
    ModalsController,
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({ setModal: 'modals/setModal' }),
    // hasUser(statusCode) {
    //   if (statusCode !== 200) {
    //     this.setModal({ name: "RedirectModal", data: 'Вы будете перенаправлены на главную страницу через 5 секунд' })
    //   }
    // },
  },
  async created() {
    document.cookie = 'user=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmV4eUBtYWlsLnJ1IiwiaWQiOjEsImlhdCI6MTY3ODEyMzkyMywiZXhwIjoxNjc4MjEwMzIzfQ.aAQqD5McoPHERIwkaTSMiUmEhG7VgnjdL8C12uKmqjQ'
    // const statusCode = await this.$store.dispatch('getUserToken')
    // this.hasUser(statusCode.status)
  },
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .8s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active до версии 2.1.8 */
  {
  transform: translateX(100%);
  opacity: 1;
}
</style>
