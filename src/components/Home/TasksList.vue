<template>
    <div class="tasks-list mt-11">
        <transition-group name="slide-fade" class="flex flex-col gap-6" mode="out-in">
            <tasks-card class="tasks-list__item" v-for="task in tasksList" :key="task.id" :task="task" />
        </transition-group>
    </div>
</template>

<script>
import TasksCard from '@/components/Home/TasksCard.vue';

export default {
    props: {
        tasksList: {
            type: Array,
            required: true,
        },
    },
    components: {
        TasksCard,
    },
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(50px);
    opacity: 0;
  }
</style>