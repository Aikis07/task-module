<template>
    <div class="left">
        <div class="wrapper bg-light-grey text-white py-9 w-647 w-" :class="{ 'w-36': isMinimal }">
            <div v-if="isMinimal" class="header flex items-center justify-center border-b pb-9 border-zinc-800 px-9">
                <div @click="isMinimal = false" class="header__wrapper flex justify-center items-center cursor-pointer">
                    <h2 class="header__text text-4xl">Т</h2>
                    <p class="header__label bg-blue-700 py-1 px-3 rounded-xl ml-2">S</p>
                </div>
            </div>
            <div v-else class="header flex items-center justify-between border-b pb-9 border-zinc-800 px-9">
                <div class="header__wrapper flex items-center cursor-pointer">
                    <h2 class="header__text text-4xl">Тренажер задач</h2>
                    <p class="header__label bg-blue-700 py-2 px-3 rounded-xl ml-5">Spotlight</p>
                </div>
                <close-cross v-if="isMinimal === false" @click="onClickMiniMode()" class="close cursor-pointer" />
            </div>
            <div class="main flex flex-col py-12 px-9">
                <div v-if="isMinimal" class="courses">
                    <div class="courses__header flex items-center justify-center">
                        <h2 class="courses__title text-2xl">Курс</h2>
                    </div>
                    <div class="courses__list mt-6 flex flex-col gap-4">
                        <div
                            class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20">
                            <h2 class="coureses__title py-6 text-lg opacity-30">A</h2>
                        </div>
                        <div
                            class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20">
                            <h2 class="coureses__title py-6 px-8 text-lg opacity-30">C++</h2>
                        </div>
                        <div
                            class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20">
                            <h2 class="coureses__title py-6 px-8 text-lg opacity-30">React</h2>
                        </div>
                        <div
                            class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20">
                            <h2 class="coureses__title py-6 px-8 text-lg opacity-30">JS</h2>
                        </div>
                    </div>
                </div>
                <div v-else class="courses">
                    <div class="courses__header flex items-center justify-between">
                        <h2 class="courses__title text-2xl">Выберите курс</h2>
                        <p class="courses__reset opacity-20 cursor-pointer">сбросить всё</p>
                    </div>
                    <div class="courses__list mt-6 flex flex-col gap-4">
                        <div class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer h-20 flex items-center">
                            <h2 class="coureses__title px-8 text-lg opacity-30">Самый быстрый курс по Angular</h2>
                        </div>
                        <div class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer h-20 flex items-center">
                            <h2 class="coureses__title  px-8 text-lg opacity-30">Основы C++ ч.1. Фундамент и основы</h2>
                        </div>
                        <div class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer h-20 flex items-center">
                            <h2 class="coureses__title  px-8 text-lg opacity-30">Самый быстрый курс по React</h2>
                        </div>
                        <div class="coureses__item bg-zinc-800 rounded-2xl cursor-pointer h-20 flex items-center">
                            <h2 class="coureses__title px-8 text-lg opacity-30">Основы JavaScript</h2>
                        </div>
                    </div>
                </div>
                <div v-if="isMinimal" class="complexity flex flex-col mt-24">
                    <div class="complexity__header flex items-center justify-center">
                        <h2 class="complexity__title text-2xl">Слож</h2>
                    </div>
                    <div class="inner flex flex-col gap-4 mt-6">
                        <div v-for="type of complexitys" :key="type.id" @click="activeComplexityBlock = type.id"
                            class="complexity__list">
                            <div class="complexity__item bg-zinc-800 rounded-2xl cursor-pointer flex justify-center items-center h-20 w-20"
                                :class="{ 'outline outline-1 outline-green-300 rounded-2xl': activeComplexityBlock === type.id }">
                                <base-rating :isMinimal="isMinimal" :stars="type.starsCount" :event="type.event" />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="complexity flex flex-col mt-24">
                    <div class="complexity__header flex items-center justify-between">
                        <h2 class="complexity__title text-2xl">Выберите сложность</h2>
                        <p class="complexity__reset opacity-20 cursor-pointer">сбросить всё</p>
                    </div>
                    <div class="inner flex flex-col gap-4 mt-6">
                        <div v-for="type of complexitys" :key="type.id" @click="activeComplexityBlock = type.id"
                            class="complexity__list"
                            :class="{ 'outline outline-1 outline-green-300 rounded-2xl': activeComplexityBlock === type.id }">
                            <div
                                class="complexity__item bg-zinc-800 rounded-2xl cursor-pointer flex items-center h-20 px-8">
                                <div class="complexity__icons flex ml-1">
                                    <base-rating :isMinimal="isMinimal" :stars="type.starsCount" :event="type.event" />
                                </div>
                                <h2 class="complexity__title text-lg opacity-30 ml-5">{{ type.title }}</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CloseCross from '@/assets/img/close-cross.svg';
import BaseRating from '@/components/General/BaseRating.vue';

export default {
    components: {
        CloseCross,
        BaseRating,
    },
    data() {
        return {
            isMinimal: false,
            activeComplexityBlock: null,
            activeCourseBlock: null,
            complexitys: [
                {
                    id: 1,
                    title: 'Базовые',
                    starsCount: 1,
                    event: 'basic',
                },
                {
                    id: 2,
                    title: 'Легкие',
                    starsCount: 2,
                    event: 'easy',
                },
                {
                    id: 3,
                    title: 'Средние',
                    starsCount: 3,
                    event: 'middle',
                },
                {
                    id: 4,
                    title: 'Повышенная сложность',
                    starsCount: 4,
                    event: 'advanced',
                },
                {
                    id: 5,
                    title: 'Задания для экспертов',
                    starsCount: 5,
                    event: 'expert',
                },
            ]
        }
    },
    methods: {
        onClickMiniMode() {
            this.isMinimal = true
        }
    },
}
</script>

<style lang="scss" scoped></style>