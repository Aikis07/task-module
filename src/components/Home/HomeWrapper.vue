<template>
    <div class="wrapper flex w-full">
        <base-drawler @selectedLang="course = $event" @selectedComplexity="complexity = $event"
            @resetCourses="course = $event" @resetComplexitys="complexity = $event" />
        <div class="home right bg-bg-main w-full text-white">
            <div class="home__wrapper mx-16 my-11 flex flex-col">
                <div class="home-header flex items-center gap-4">
                    <h2 class="home-header__title text-2xl">Задания для выполнения</h2>
                    <base-button size="sm" rounded="full" theme="primary">Решенные задачи</base-button>
                </div>
                <tasks-list :tasksList="getCourseList" />
            </div>
        </div>
    </div>
</template>

<script>
import TasksList from '@/components/Home/TasksList.vue';
import BaseDrawler from '@/components/Home/BaseDrawler.vue'
import { mapGetters, mapState } from 'vuex';
import BaseButton from '@/components/UI/BaseButton.vue'

export default {
    components: {
        TasksList,
        BaseDrawler,
        BaseButton,
    },
    data() {
        return {
            course: null,
            complexity: null,
        }
    },
    computed: {
        ...mapGetters(['getCoursesByLang', 'getCoursesByExp']),
        ...mapState(['tasks']),
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

<style lang="scss" scoped></style>