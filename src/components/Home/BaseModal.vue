<template>
    <div class="main flex self-center">
        <div class="solution bg-zinc-800 p-8 rounded-3xl w-96 self-center">
            <div class="solution__title flex items-center justify-between">
                <div class="solution__inner flex items-center gap-4">
                    <info-icon />
                    <h2 class="solution__name">Решение задачи</h2>
                </div>
                <close-cross @click="onClickClose()" class="solution__close cursor-pointer" />
            </div>
            <h2 class="solution__info opacity-50 mt-7">Равным образом, перспективное планирование однозначно определяет
                каждого участника как способного принимать
                собственные решения касаемо как самодостаточных, так и внешне зависимых концептуальных решений.
                Разнообразный и богатый опыт говорит нам, что сложившаяся структура организации способствует повышению
                качества системы.</h2>
            <div class="solution__actions flex flex-col mt-7 gap-5 items-center">
                <base-button @click="onClickSuccess()" size="lg" rounded="lg" theme="primary" outline>Ок,
                    ясно</base-button>
                <p class="solution__error cursor-pointer opacity-30">Нашли ошибку?</p>
            </div>
        </div>
    </div>
</template>

<script>
import infoIcon from '@/assets/img/info-icon.svg'
import CloseCross from '@/assets/img/close-cross.svg'
import BaseButton from '@/components/UI/BaseButton.vue'

    export default {
        components: {
            infoIcon,
            CloseCross,
            BaseButton,
        },
        methods: {
            onClickClose() {
                this.$emit('closeModal', false)
            },
            onClickSuccess() {
                this.$emit('success', false)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>