<template>
    <div class="main bg-bg-main h-screen p-9 text-white relative flex justify-center flex-col">
        <div class="header flex items-center">
            <arrow-left @click="$router.push({ name: 'home' })" class="header__btn cursor-pointer" />
            <h2 class="header__title ml-5 text-2xl">{{ getTask.name }}</h2>
        </div>
        <task-field :getTask="getTask" />
        <div class="description mt-9">
            <h2 class="description__title text-3xl">Задача</h2>
            <p class="description__subtitle text-lg max-w-3xl mt-4">Мы вынуждены отталкиваться от того, что
                {{ getTask.description }}
            </p>
        </div>
        <div class="actions flex justify-between mt-20">
            <div class="actions__left flex gap-3">
                <base-button size="md" rounded="lg" theme="success">Проверить</base-button>
                <base-button @click="showModal(modalData)" size="md" rounded="lg" theme="primary">Посмотреть
                    решение</base-button>
            </div>
            <base-button size="md" rounded="lg" theme="primary">Сохранить и выйти</base-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import arrowLeft from '@/assets/img/arrow-left.svg'
import BaseButton from '@/components/UI/BaseButton.vue'
import TaskField from '@/components/Home/TaskField.vue'

export default {
    components: {
        arrowLeft,
        BaseButton,
        TaskField,
    },
    data() {
        return {
            modalData: {
                name: 'BaseModal',
                data: 'Равным образом, перспективное планирование однозначно определяет каждого участника как способного принимать собственные решения касаемо как самодостаточных, так и внешне зависимых концептуальных решений. Разнообразный и богатый опыт говорит нам, что сложившаяся структура организации способствует повышению качества системы.',
            }
        }
    },
    methods: {
        ...mapMutations({ showModal: 'modals/setModal' }),
    },
    mounted() {
        this.code = `// ${this.getTask.description}`
    },
    computed: {
        ...mapState(['tasks']),
        getTask() {
            return this.tasks.find(f => f.id === +this.$route.params.task)
        }
    },
}
</script>

<style lang="scss" scoped></style>