<template>
  <div v-if="isShowDrawler" class="wrapper">
    <ssr-carousel>
      <div class="slide">
        <div class="courses flex flex-col gap-4 p-5">
          <div class="courses__header flex items-center justify-between">
            <h2 class="courses__title text-sm">Выберите курс</h2>
            <p @click="onClickResetCourses" class="courses__reset opacity-20 cursor-pointer">сбросить всё
            </p>
            <close-cross @click="$emit('closeDrawler', false)" class="close cursor-pointer" />
          </div>
          <div v-for="course in courses" :key="course.id" class="courses__list flex flex-col">
            <div @click="onClickCourse(course.event)"
              class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer h-20 flex items-center"
              :class="{ 'outline outline-1 outline-orange-300 rounded-2xl': selectedCourse === course.event }">
              <h2 class="coureses__title px-8 text-base opacity-30"
                :class="{ 'opacity-100': selectedCourse === course.event }">{{ course.name }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="complexity flex flex-col p-5">
          <div class="complexity__header flex items-center justify-between">
            <h2 class="complexity__title text-sm">Выберите сложность</h2>
            <p @click="onCLickResetComplexitys" class="complexity__reset opacity-20 cursor-pointer">
              сбросить всё</p>
            <close-cross @click="$emit('closeDrawler', false)" class="close cursor-pointer" />
          </div>
          <div class="inner flex flex-col gap-4 mt-6">
            <div v-for="type of complexitys" :key="type.id" @click="onCLickComplexity(type.event)"
              class="complexity__list"
              :class="{ 'outline outline-1 outline-green-300 rounded-2xl': selectedComplexity === type.event }">
              <div class="complexity__item bg-zinc-800 rounded-2xl cursor-pointer flex items-center h-20 px-8">
                <div class="complexity__icons flex ml-1">
                  <base-rating :event="type.event" />
                </div>
                <h2 class="complexity__title text-base opacity-30 ml-5"
                  :class="{ 'opacity-100': selectedComplexity === type.event }">{{ type.title }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ssr-carousel>
  </div>
</template>
<script>
import CloseCross from '@/assets/img/close-cross.svg';
import BaseRating from '@/components/General/BaseRating.vue';
import SsrCarousel from 'vue-ssr-carousel'

export default {
  components: {
    CloseCross,
    BaseRating,
    SsrCarousel,
  },
  props: {
    selectedCourse: {
      type: String,
    },
    selectedComplexity: {
      type: String,
    },
    courses: {
      type: Array,
    },
    complexitys: {
      type: Array,
    },
    isShowDrawler: {
      type: Boolean,
    }
  },
  methods: {
    onClickCourse(event) {
      this.$emit('selectedLang', event)
    },
    onCLickComplexity(complexity) {
      this.$emit('selectedComplexity', complexity)
    },
    onClickResetCourses() {
      this.$emit('resetCourses', null)
    },
    onCLickResetComplexitys() {
      this.$emit('resetComplexitys', null)
    },
  },
}
</script>

<style lang="scss" scoped></style>