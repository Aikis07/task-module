<template>
    <div class="task-card bg-zinc-900 p-6 mt-11 rounded-3xl flex items-center justify-between">
        <div class="task-card__info">
            <div class="task-card__inner flex task-cards-center gap-4">
                <div class="task-card__icons flex gap-1">
                    <green-star />
                    <empty-star />
                    <empty-star />
                    <empty-star />
                    <empty-star />
                </div>
                <div class="task-card__type flex task-cards-center">
                    <yellow-lightning />
                    <p class="task-card__text text-yellow-300 ml-2">Топ</p>
                </div>
                <div class="task-card__views flex task-cards-center">
                    <eye />
                    <p class="task-card__count ml-2 opacity-20">32,381</p>
                </div>
                <div class="task-card__favorites flex task-cards-center">
                    <favorites class="task-card__icon opacity-20" />
                    <p class="task-card__counter opacity-20 ml-2">382</p>
                </div>
                <div class="task-card__layers flex task-cards-center">
                    <layers />
                    <p class="task-card__counter ml-2 opacity-20">8</p>
                </div>
            </div>
            <div class="task-card__name flex task-cards-center mt-4">
                <green-arrow />
                <h2 class="task-card__text text-2xl ml-4">Grasshopper - Debug sayHello</h2>
            </div>
        </div>
        <div class="task-card__arrow bg-zinc-800 w-16 h-16 flex task-cards-center justify-center rounded-xl cursor-pointer">
            <arrow-right />
        </div>
    </div>
</template>

<script>
import GreenStar from '@/assets/img/green-star.svg';
import EmptyStar from '@/assets/img/empty-star.svg';
import YellowLightning from '@/assets/img/yellow-lightning.svg';
import Eye from '@/assets/img/eye.svg';
import Favorites from '@/assets/img/favorites.svg';
import Layers from '@/assets/img/layers.svg';
import GreenArrow from '@/assets/img/green-arrow.svg';
import ArrowRight from '@/assets/img/arrow-right.svg';

    export default {
        components: {
            GreenStar,
            EmptyStar,
            YellowLightning,
            Eye,
            Favorites,
            Layers,
            GreenArrow,
            ArrowRight,
        },
    }
</script>

<style lang="scss" scoped>

</style>