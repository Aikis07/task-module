<template>
    <div class="main bg-bg-main h-screen p-9 text-white relative flex justify-center flex-col">
        <div class="header flex items-center">
            <arrow-left @click="$router.push({ name: 'home' })" class="header__btn cursor-pointer" />
            <h2 class="header__title ml-5 text-2xl">{{ getTask.name }}</h2>
        </div>
        <div class="textarea mt-6 flex gap-6">
            <textarea class="textarea__input h-542 bg-light-grey p-5 outline-none resize-none w-full"
                placeholder="Кодинг"></textarea>
            <div class="textarea__result bg-light-grey p-5 w-647">Тест</div>
        </div>
        <div class="description mt-9">
            <h2 class="description__title text-3xl">Задача</h2>
            <p class="description__subtitle text-lg max-w-3xl mt-4">Мы вынуждены отталкиваться от того, что
                высококачественный прототип будущего
                проекта в значительной степени обусловливает важность кластеризации усилий. Картельные сговоры не допускают
                ситуации, при которой акционеры крупнейших компаний набирают популярность среди определенных слоев населения
            </p>
        </div>
        <div class="actions flex justify-between mt-20">
            <div class="actions__left flex gap-3">
                <base-button size="md" rounded="lg" theme="success">Завершить задачу</base-button>
                <base-button @click="isShowModal = true" size="md" rounded="lg" theme="primary">Посмотреть решение</base-button>
            </div>
            <base-button size="md" rounded="lg" theme="primary">Сохранить и выйти</base-button>
        </div>
        <div v-show="isShowModal === true" class="solution absolute bg-zinc-800 p-8 rounded-3xl w-96 self-center">
            <div class="solution__title flex items-center justify-between">
                <div class="solution__inner flex items-center gap-4">
                    <info-icon />
                    <h2 class="solution__name">Решение задачи</h2>
                </div>
                <close-cross @click="isShowModal = false" class="solution__close cursor-pointer"/>
            </div>
            <h2 class="solution__info opacity-50 mt-7">Равным образом, перспективное планирование однозначно определяет
                каждого участника как способного принимать
                собственные решения касаемо как самодостаточных, так и внешне зависимых концептуальных решений.
                Разнообразный и богатый опыт говорит нам, что сложившаяся структура организации способствует повышению
                качества системы.</h2>
            <div class="solution__actions flex flex-col mt-7 gap-5 items-center">
                <base-button @click="isShowModal = false" size="full" rounded="lg" theme="primary" outline>Ок, ясно</base-button>
                <p class="solution__error cursor-pointer opacity-30">Нашли ошибку?</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import arrowLeft from '@/assets/img/arrow-left.svg'
import BaseButton from '@/components/UI/BaseButton.vue'
import infoIcon from '@/assets/img/info-icon.svg'
import CloseCross from '@/assets/img/close-cross.svg';

export default {
    components: {
        arrowLeft,
        BaseButton,
        infoIcon,
        CloseCross,
    },
    data() {
        return {
            isShowModal: false,
        }
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