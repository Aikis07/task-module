<template>
    <div class="left">
        <transition name="slide-fade">
            <div v-if="isMinimal === false" key="full"
                :class="[['wrapper', 'bg-light-grey', 'text-white', 'py-9'], isMinimal ? ['w-145'] : ['w-647']]">
                <transition name="fade" mode="out-in">
                    <div v-if="isMinimal"
                        class="header flex items-center justify-center border-b pb-9 border-zinc-800 px-9">
                        <div @click="isMinimal = false"
                            class="header__wrapper flex justify-center items-center cursor-pointer">
                            <h2 class="header__text text-4xl">Т</h2>
                            <p class="header__label bg-blue-700 py-1 px-3 rounded-xl ml-2">S</p>
                        </div>
                    </div>
                    <div v-else key="full"
                        class="header flex items-center justify-between border-b pb-9 border-zinc-800 px-9">
                        <div class="header__wrapper flex items-center cursor-pointer">
                            <h2 class="header__text text-4xl">Тренажер задач</h2>
                            <p class="header__label bg-blue-700 py-2 px-3 rounded-xl ml-5">Spotlight</p>
                        </div>
                        <close-cross v-if="isMinimal === false" @click="isMinimal = true" class="close cursor-pointer" />
                    </div>
                </transition>
                <div class="main flex flex-col py-12 px-7">
                    <transition name="fade" mode="out-in">
                        <div v-if="isMinimal" class="courses flex flex-col gap-4">
                            <div class="courses__header flex items-center justify-center">
                                <h2 class="courses__title text-2xl">Курс</h2>
                            </div>
                            <div v-for="course in courses" :key="course.id" class="courses__list flex flex-col gap-4">
                                <div @click="onClickCourse(course.event)"
                                    :class="{ 'outline outline-1 outline-orange-300 rounded-2xl': selectedCourse === course.event }"
                                    class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20">
                                    <h2 class="coureses__title py-6 text-lg opacity-30 break-words"
                                        :class="{ 'opacity-100': selectedCourse === course.event }">{{ course.language }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div v-else key="full" class="courses flex flex-col gap-4">
                            <div class="courses__header flex items-center justify-between">
                                <h2 class="courses__title text-2xl">Выберите курс</h2>
                                <p @click="onClickResetCourses" class="courses__reset opacity-20 cursor-pointer">сбросить
                                    всё
                                </p>
                            </div>
                            <div v-for="course in courses" :key="course.id" class="courses__list flex flex-col">
                                <div @click="onClickCourse(course.event)"
                                    class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer h-20 flex items-center"
                                    :class="{ 'outline outline-1 outline-orange-300 rounded-2xl': selectedCourse === course.event }">
                                    <h2 class="coureses__title px-8 text-lg opacity-30"
                                        :class="{ 'opacity-100': selectedCourse === course.event }">{{ course.name }}</h2>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <transition name="fade" mode="out-in">
                        <div v-if="isMinimal" class="complexity flex flex-col mt-24">
                            <div class="complexity__header flex items-center justify-center">
                                <h2 class="complexity__title text-2xl">Слож</h2>
                            </div>
                            <div class="inner flex flex-col gap-4 mt-6">
                                <div v-for="type of complexitys" :key="type.id" @click="onCLickComplexity(type.event)"
                                    class="complexity__list">
                                    <div class="complexity__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20"
                                        :class="{ 'outline outline-1 outline-green-300 rounded-2xl': selectedComplexity === type.event }">
                                        <base-rating :isMinimal="isMinimal" :event="type.event" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else key="full" class="complexity flex flex-col mt-24">
                            <div class="complexity__header flex items-center justify-between">
                                <h2 class="complexity__title text-2xl">Выберите сложность</h2>
                                <p @click="onCLickResetComplexitys" class="complexity__reset opacity-20 cursor-pointer">
                                    сбросить всё</p>
                            </div>
                            <div class="inner flex flex-col gap-4 mt-6">
                                <div v-for="type of complexitys" :key="type.id" @click="onCLickComplexity(type.event)"
                                    class="complexity__list"
                                    :class="{ 'outline outline-1 outline-green-300 rounded-2xl': selectedComplexity === type.event }">
                                    <div
                                        class="complexity__item bg-zinc-800 rounded-2xl cursor-pointer flex items-center h-20 px-8">
                                        <div class="complexity__icons flex ml-1">
                                            <base-rating :isMinimal="isMinimal" :event="type.event" />
                                        </div>
                                        <h2 class="complexity__title text-lg opacity-30 ml-5"
                                            :class="{ 'opacity-100': selectedComplexity === type.event }">{{ type.title }}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div v-show="isMinimal === false" class="author mt-4 px-9 opacity-50 flex">
                    <h2 class="author__name">Тренажер разработал - </h2>
                    <a href="https://t.me/DanilaRuss">
                        <h2 class="author__link text-orange-300 ml-1">Данила Барков</h2>
                    </a>
                </div>
            </div>
        </transition>
        <transition name="slide-fade">
            <div v-if="isMinimal" key="mini"
                :class="[['wrapper', 'bg-light-grey', 'text-white', 'py-9'], isMinimal ? ['w-145'] : ['w-647']]">
                <transition name="fade" mode="out-in">
                    <div v-if="isMinimal"
                        class="header flex items-center justify-center border-b pb-9 border-zinc-800 px-9">
                        <div @click="isMinimal = false"
                            class="header__wrapper flex justify-center items-center cursor-pointer">
                            <h2 class="header__text text-4xl">Т</h2>
                            <p class="header__label bg-blue-700 py-1 px-3 rounded-xl ml-2">S</p>
                        </div>
                    </div>
                    <div v-else key="full"
                        class="header flex items-center justify-between border-b pb-9 border-zinc-800 px-9">
                        <div class="header__wrapper flex items-center cursor-pointer">
                            <h2 class="header__text text-4xl">Тренажер задач</h2>
                            <p class="header__label bg-blue-700 py-2 px-3 rounded-xl ml-5">Spotlight</p>
                        </div>
                        <close-cross v-if="isMinimal === false" @click="isMinimal = true" class="close cursor-pointer" />
                    </div>
                </transition>
                <div class="main flex flex-col py-12 px-7">
                    <transition name="fade" mode="out-in">
                        <div v-if="isMinimal" class="courses flex flex-col gap-4">
                            <div class="courses__header flex items-center justify-center">
                                <h2 class="courses__title text-2xl">Курс</h2>
                            </div>
                            <div v-for="course in courses" :key="course.id" class="courses__list flex flex-col gap-4">
                                <div @click="onClickCourse(course.event)"
                                    :class="{ 'outline outline-1 outline-orange-300 rounded-2xl': selectedCourse === course.event }"
                                    class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20">
                                    <h2 class="coureses__title py-6 text-lg opacity-30 break-words"
                                        :class="{ 'opacity-100': selectedCourse === course.event }">{{ course.language }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div v-else key="full" class="courses flex flex-col gap-4">
                            <div class="courses__header flex items-center justify-between">
                                <h2 class="courses__title text-2xl">Выберите курс</h2>
                                <p @click="onClickResetCourses" class="courses__reset opacity-20 cursor-pointer">сбросить
                                    всё
                                </p>
                            </div>
                            <div v-for="course in courses" :key="course.id" class="courses__list flex flex-col">
                                <div @click="onClickCourse(course.event)"
                                    class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer h-20 flex items-center"
                                    :class="{ 'outline outline-1 outline-orange-300 rounded-2xl': selectedCourse === course.event }">
                                    <h2 class="coureses__title px-8 text-lg opacity-30"
                                        :class="{ 'opacity-100': selectedCourse === course.event }">{{ course.name }}</h2>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <transition name="fade" mode="out-in">
                        <div v-if="isMinimal" class="complexity flex flex-col mt-24">
                            <div class="complexity__header flex items-center justify-center">
                                <h2 class="complexity__title text-2xl">Слож</h2>
                            </div>
                            <div class="inner flex flex-col gap-4 mt-6">
                                <div v-for="type of complexitys" :key="type.id" @click="onCLickComplexity(type.event)"
                                    class="complexity__list">
                                    <div class="complexity__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20"
                                        :class="{ 'outline outline-1 outline-green-300 rounded-2xl': selectedComplexity === type.event }">
                                        <base-rating :isMinimal="isMinimal" :event="type.event" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else key="full" class="complexity flex flex-col mt-24">
                            <div class="complexity__header flex items-center justify-between">
                                <h2 class="complexity__title text-2xl">Выберите сложность</h2>
                                <p @click="onCLickResetComplexitys" class="complexity__reset opacity-20 cursor-pointer">
                                    сбросить всё</p>
                            </div>
                            <div class="inner flex flex-col gap-4 mt-6">
                                <div v-for="type of complexitys" :key="type.id" @click="onCLickComplexity(type.event)"
                                    class="complexity__list"
                                    :class="{ 'outline outline-1 outline-green-300 rounded-2xl': selectedComplexity === type.event }">
                                    <div
                                        class="complexity__item bg-zinc-800 rounded-2xl cursor-pointer flex items-center h-20 px-8">
                                        <div class="complexity__icons flex ml-1">
                                            <base-rating :isMinimal="isMinimal" :event="type.event" />
                                        </div>
                                        <h2 class="complexity__title text-lg opacity-30 ml-5"
                                            :class="{ 'opacity-100': selectedComplexity === type.event }">{{ type.title }}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div v-show="isMinimal === false" class="author mt-4 px-9 opacity-50 flex">
                    <h2 class="author__name">Тренажер разработал - </h2>
                    <a href="https://t.me/DanilaRuss">
                        <h2 class="author__link text-orange-300 ml-1">Данила Барков</h2>
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import CloseCross from '@/assets/img/close-cross.svg';
import BaseRating from '@/components/General/BaseRating.vue';

export default {
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
        }
    },
    components: {
        CloseCross,
        BaseRating,
    },
    data() {
        return {
            isMinimal: false,
        }
    },
    methods: {
        onClickMiniMode() {
            this.isMinimal = true
        },
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

<style lang="scss" scoped>.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active до версии 2.1.8 */
    {
    transform: translateX(-100%);
    opacity: 0;
}</style>