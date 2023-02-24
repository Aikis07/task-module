<template>
  <div>
    <base-button @click="onClickButton" size="lg" rounded="lg" outline>Передаем текст</base-button>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
    components: {
        BaseButton
    },
};

// rounded = скругление
// size = размеры (paddings text-size)
// outline - border-кнопка
// click - событие при клике на кнопку
// theme - тема кнопки (primary, success). ДОБАВЛЯЕШЬ САМ ОТ НУЖДЫ!
</script>

<style lang="scss" scoped></style>
