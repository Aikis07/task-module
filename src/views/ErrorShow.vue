<template>
  <div class="error bg-gray-800 text-white w-screen h-screen flex flex-col justify-center items-center gap-3">
    <p class="error__title text-xl">Возникла ошибка, попробуйте перезагрузить страницу</p>
    <h2 class="error__massage">{{ errorMessage }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: String
  }
}
</script>

<style lang="scss" scoped></style>