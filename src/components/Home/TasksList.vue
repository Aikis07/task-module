<template>
    <div class="tasks-list mt-11 flex flex-col gap-6">
        <tasks-card class="tasks-list__item" v-for="task in tasksList" :key="task.id" :task="task" />
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

</style>