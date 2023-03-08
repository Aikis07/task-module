<template>
  <div
    class="task-card bg-zinc-900 p-3 lg:p-6 rounded-3xl flex items-center justify-between"
  >
    <div class="task-card__info">
      <div class="task-card__inner flex items-center gap-1 lg:gap-4">
        <div class="task-card__icons flex gap-1">
          <div class="complexity__icons flex ml-1">
            <base-rating :event="task.experience" />
          </div>
        </div>
        <div v-show="$mq === 'lg'" class="task-card__type flex items-center">
          <yellow-lightning v-show="task.rating === 'popular'" />
          <p class="task-card__text text-xs lg:text-base text-yellow-400 ml-2">
            {{ getRatingOfCourse(task.rating) }}
          </p>
        </div>
        <div class="task-card__views flex items-center">
          <eye />
          <p class="task-card__count text-xs lg:text-base ml-2 opacity-20">
            {{ task.statistic.views }}
          </p>
        </div>
        <div class="task-card__favorites flex items-center">
          <favorites class="task-card__icon opacity-20" />
          <p class="task-card__counter text-xs lg:text-base opacity-20 ml-2">
            {{ task.statistic.completed }}
          </p>
        </div>
        <div class="task-card__layers flex items-center">
          <layers />
          <p class="task-card__counter text-xs lg:text-base ml-2 opacity-20">
            {{ task.statistic.tryes }}
          </p>
        </div>
      </div>
      <div class="task-card__name flex items-center mt-4">
        <green-arrow />
        <h2 class="task-card__text text-sm lg:text-2xl ml-4">{{ task.name }}</h2>
      </div>
    </div>
    <div
      @click="$router.push({ path: `/tasks/${task.course}/${task.id}` })"
      class="task-card__arrow bg-zinc-800 w-7 lg:w-16 h-16 flex items-center justify-center rounded-xl cursor-pointer"
    >
      <arrow-right class="arrow"/>
    </div>
  </div>
</template>

<script>
import YellowLightning from "@/assets/img/yellow-lightning.svg";
import Eye from "@/assets/img/eye.svg";
import Favorites from "@/assets/img/favorites.svg";
import Layers from "@/assets/img/layers.svg";
import GreenArrow from "@/assets/img/green-arrow.svg";
import ArrowRight from "@/assets/img/arrow-right.svg";
import BaseRating from "@/components/General/BaseRating.vue";

export default {
  props: {
    task: {
      type: Object,
    },
  },
  components: {
    YellowLightning,
    Eye,
    Favorites,
    Layers,
    GreenArrow,
    ArrowRight,
    BaseRating,
  },
  methods: {
    getRatingOfCourse(rating) {
      switch (rating) {
        case "basic": {
          return "??";
        }
        case "basic+": {
          return "Полезное";
        }
        case "middle": {
          return "??";
        }
        case "popular": {
          return "Топ";
        }
        case "expert": {
          return "??";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
