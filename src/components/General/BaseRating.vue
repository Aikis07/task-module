<template>
  <div v-if="isMinimal" class="complexity__icons flex flex-wrap justify-center items-center px-3 ml-1">
    <exp-star v-for="star in getStarsCount(event)" :key="star"
      :class="[star <= getStarsCount(event) ? getColorWithEvent(event) : ['fill-white', 'opacity-20']]" />
  </div>
  <div v-else class="complexity__icons flex gap-1">
    <exp-star v-for="star in 5" :key="star"
      :class="[star <= getStarsCount(event) ? getColorWithEvent(event) : ['fill-white', 'opacity-20']]" />
  </div>
</template>

<script>
import ExpStar from "@/assets/img/exp-star.svg";
export default {
  components: {
    ExpStar,
  },
  props: {
    isMinimal: {
      type: Boolean,
    },
    event: {
      type: String,
    }

  },
  methods: {
    getColorWithEvent(event) {
      switch (event) {
        case 'basic': {
          return 'fill-green-400'
        }
        case 'basic+': {
          return 'fill-green-400'
        }
        case 'middle': {
          return 'fill-yellow-400'
        }
        case 'advanced': {
          return 'fill-yellow-400'
        }
        case 'expert': {
          return 'fill-red-400'
        }
      }
    },
    getStarsCount(event) {
      switch (event) {
        case 'basic': {
          return 1
        }
        case 'basic+': {
          return 2
        }
        case 'middle': {
          return 3
        }
        case 'advanced': {
          return 4
        }
        case 'expert': {
          return 5
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
