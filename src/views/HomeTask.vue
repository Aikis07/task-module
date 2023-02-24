<template>
    <div>
        <h2 @click="test()">click</h2>
        <h2>click2</h2>
    </div>
</template>

<script>
    export default {
        props: ['task'],
        methods: {
            test() {
                console.log(this.task)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>