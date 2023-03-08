<template>
    <div class="wrapper flex w-full relative">
        <base-drawler v-if="$mq === 'lg'" :selectedComplexity="complexity" :selectedCourse="course"
            @selectedLang="course = $event" @selectedComplexity="complexity = $event" @resetCourses="course = $event"
            @resetComplexitys="complexity = $event" :courses="courses" :complexitys="complexitys" />
        <mobile-drawler v-show="isShowDrawler" v-else :selectedComplexity="complexity" :selectedCourse="course"
            @selectedLang="course = $event" @selectedComplexity="complexity = $event" @resetCourses="course = $event"
            @resetComplexitys="complexity = $event" @closeDrawler="isShowDrawler = $event" :courses="courses"
            :complexitys="complexitys"
            class="mobile absolute top-0 left-0 w-screen h-screen z-10 text-white bg-light-grey" />
        <div class="home h-screen right bg-bg-main w-full text-white">
            <div class="home__wrapper mx-6 lg:mx-16 my-11 flex flex-col">
                <div class="home-header flex items-center justify-between">
                    <div class="inner flex items-center gap-4">
                        <h2 class="home-header__title text-base lg:text-2xl">Задания для выполнения</h2>
                        <base-button size="sm" rounded="full" theme="primary">Решенные задачи</base-button>
                    </div>
                    <burger v-show="$mq !== 'lg'" @click="isShowDrawler = true"
                        class="burger w-12 fill-white cursor-pointer ml-4" />
                </div>
                <tasks-list :tasksList="getCourseList" />
            </div>
        </div>
    </div>
</template>

<script>
import TasksList from '@/components/Home/TasksList.vue';
import BaseDrawler from '@/components/Home/Drawlers/BaseDrawler.vue'
import { mapGetters, mapState } from 'vuex';
import BaseButton from '@/components/UI/BaseButton.vue'
import MobileDrawler from '@/components/Home/Drawlers/MobileDrawler.vue';
import Burger from '@/assets/img/burger.svg'

export default {
    components: {
        TasksList,
        BaseDrawler,
        BaseButton,
        MobileDrawler,
        Burger
    },
    data() {
        return {
            course: null,
            complexity: null,
            isShowDrawler: false,
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
                    event: 'basic+',
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
    computed: {
        ...mapGetters(['getCoursesByLang', 'getCoursesByExp']),
        ...mapState(['tasks', 'courses']),
        getCourseList() {
            if (this.course === null && this.complexity === null) {
                return this.tasks
            } else if (this.course !== null && this.complexity === null) {
                return this.getCoursesByLang(this.course)
            } else if (this.course == null && this.complexity !== null) {
                return this.getCoursesByExp(this.complexity)
            } else {
                const courseFilter = this.getCoursesByLang(this.course)
                const complexityFilter = this.getCoursesByExp(this.complexity)
                return complexityFilter.filter(f => courseFilter.find(i => i.experience === f.experience))
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@keyframes move-left {
    from {
        transform: translateX(100%);
        opacity: 1;
    }

    to {
        transform: translateX(0%);
        opacity: 0;

    }
}

@keyframes move-right {
    from {
        transform: translateX(0%);
        opacity: 0;

    }

    to {
        transform: translateX(100%);
        opacity: 1;
    }
}

.move-enter-active {
    animation: move-left .7s ease-in-out;
}

.move-leave-active {
    animation: move-right .7s ease-in-out;
}
</style>