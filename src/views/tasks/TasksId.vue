<template>
    <div class="main bg-bg-main h-screen p-9 text-white relative flex justify-center flex-col">
        <div class="header flex items-center">
            <arrow-left @click="$router.push({ name: 'home' })" class="header__btn cursor-pointer" />
            <h2 class="header__title ml-5 text-2xl">{{ getTask.name }}</h2>
        </div>
        <div class="textarea mt-6 flex gap-6">
            <CodeEditor width="100%" height="542px" v-model="code" border_radius="12px" />
            <div class="textarea-result bg-light-grey p-5 w-647 rounded-lg">
                Тест
                <div class="textarea-result__body py-11">
                    {{ result }}
                </div>
            </div>
        </div>
        <div class="description mt-9">
            <h2 class="description__title text-3xl">Задача</h2>
            <p class="description__subtitle text-lg max-w-3xl mt-4">Мы вынуждены отталкиваться от того, что
                {{ getTask.description }}
            </p>
        </div>
        <div class="actions flex justify-between mt-20">
            <div class="actions__left flex gap-3">
                <base-button @click="testCode" size="md" rounded="lg" theme="success">Проверить</base-button>
                <base-button @click="setHintModal" size="md" rounded="lg" theme="primary">Посмотреть
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
import CodeEditor from 'simple-code-editor';

import {useConvertBuffer} from "@/utils/convertArrayBuffer";

export default {
    components: {
        arrowLeft,
        BaseButton,
        CodeEditor
    },
    data() {
        return {
            code: '',
            result: ''
        }
    },
    methods: {
        ...mapMutations({ setModal: 'modals/setModal' }),
        async testCode() {

            const req = await fetch('http://localhost:7000/training/compile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: this.code }),
            });

            const res = await req.json();
            this.result = useConvertBuffer(res.data)
        },
        setHintModal() {
            this.setModal({name: "HintModal", data: 'Посмотреть решение, может каждый, а вот решить...'})
        }
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