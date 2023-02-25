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
                <base-button @click="isShowModal = true" size="md" rounded="lg" theme="primary">Посмотреть
                    решение</base-button>
            </div>
            <base-button size="md" rounded="lg" theme="primary">Сохранить и выйти</base-button>
        </div>
        
        <base-modal v-show="isShowModal === true" class="modal absolute" @closeModal="isShowModal = $event" @success="isShowModal = $event">

        </base-modal>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import arrowLeft from '@/assets/img/arrow-left.svg'
import BaseModal from '@/components/Home/BaseModal.vue'
import BaseButton from '@/components/UI/BaseButton.vue'

export default {
    components: {
        arrowLeft,
        BaseModal,
        BaseButton,
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