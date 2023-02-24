<template>
    <div class="main flex flex-col">
        <!-- header import -->
        <div class="inner flex">
            <base-drawler />
            <home-wrapper />
        </div>
    </div>
</template>

<script>
import BaseDrawler from '@/components/Home/BaseDrawler.vue';
import HomeWrapper from '@/components/Home/HomeWrapper.vue';

    export default {
        components: {
            BaseDrawler,
            HomeWrapper,
        },
    }
</script>

<style lang="scss" scoped>

</style>