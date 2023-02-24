<template>
    <div class="home right bg-bg-main w-full text-white">
        <div class="home__wrapper mx-16 my-11 flex flex-col">
            <div class="home-header flex items-center">
                <h2 class="home-header__title text-2xl">Задания для выполнения</h2>
                <p class="home-header__subtitle opacity-30 bg-zinc-700 rounded-3xl px-3 py-1 ml-5">Решенные задачи</p>
            </div>
            <tasks-list />
        </div>
    </div>
</template>

<script>
import TasksList from '@/components/Home/TasksList.vue';


export default {
    components: {
        TasksList,
    },
}
</script>

<style lang="scss" scoped></style>