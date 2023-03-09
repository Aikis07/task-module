<template>
    <div class="main flex self-center">
        <div class="solution bg-zinc-800 p-6 rounded-3xl w-80 lg:w-96 self-center">
            <div class="solution__title flex items-center justify-between">
                <div class="solution__inner flex items-center gap-4">
                    <info-icon />
                    <h2 class="solution__name">Решение задачи</h2>
                </div>
                <close-cross @click="closeModal" class="solution__close cursor-pointer" />
            </div>
            <h2 class="solution__info opacity-50 mt-7">{{getData.modal.data}}</h2>
            <div class="solution__actions flex flex-col mt-7 gap-5 w-full">
                <base-button @click="closeModal" :size="$mq === 'lg' ? 'lg' : 'fu'" rounded="lg" theme="primary" outline>Ок,
                    ясно</base-button>
                <p class="solution__error cursor-pointer opacity-30 text-center">Нашли ошибку?</p>
            </div>
        </div>
    </div>
</template>

<script>
import infoIcon from '@/assets/img/info-icon.svg'
import CloseCross from '@/assets/img/close-cross.svg'
import BaseButton from '@/components/UI/BaseButton.vue'
import { mapMutations, mapState } from 'vuex';

export default {
    components: {
        infoIcon,
        CloseCross,
        BaseButton,
    },
    methods: {
        ...mapMutations({closeModal: 'modals/removeModal'})
    },
    computed: {
        ...mapState({getData: 'modals'}),
    },
}
</script>

<style lang="scss" scoped></style>