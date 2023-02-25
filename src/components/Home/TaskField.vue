<template>
    <div class="fields">
        <div class="textarea mt-6 flex gap-6">
            <CodeEditor width="100%" height="542px" border_radius="12px" v-model="code" />
            <div class="textarea__result bg-light-grey p-5 w-647 rounded-lg">Тест</div>
        </div>
    </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';

export default {
    components: {
        CodeEditor,
    },
    props: {
        getTask: {
            type: Object,
        },
    },
    data() {
        return {
            code: ''
        }
    },
    mounted() {
        this.code = `// ${this.getTask.description}`
    },
}
</script>

<style lang="scss" scoped></style>