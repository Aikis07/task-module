<template>
    <div class="main flex flex-col">
        <!-- header import -->
        <div class="inner flex">
            <home-wrapper />
        </div>
    </div>
</template>

<script>
import HomeWrapper from '@/components/Home/HomeWrapper.vue';

    export default {
        components: {
            HomeWrapper,
        },
    }
</script>

<style lang="scss" scoped>

</style>