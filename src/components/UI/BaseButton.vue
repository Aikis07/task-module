<template>
  <button @click="$emit('click')" :disabled="disabled" :class="['btn', getPropsFactory]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "primary", // Тема кнопки: primary, success, danger, warning
    },

    size: {
      type: String,
      default: "sm", // Размеры кнопки: sm, md, lg
    },

    rounded: {
      type: String,
      default: "sm",
    }, // Скругления: sm,md,lg,full

    outline: {
      type: Boolean,
      default: false,
    }, // обводка кнопки: True/false

    disabled: {
      type: Boolean,
      default: false,
    }, // состояние кнопки
  },
  computed: {
    getPropsFactory() {
      return [
        this.getWrappedTheme,
        this.getWrappedSizes,
        this.getWrappedRounded,
        this.outline ? "btn-outline" : null,
      ].join(" ");
    },
    getWrappedSizes() {
      switch (this.size) {
        case "sm":
          return "py-2 px-4 font-semibold text-sm";
        case "md":
          return "py-3 px-6 text-md font-semibold text-base";
        case "lg":
          return "py-4 px-5 text-md font-semibold font-bold";
        case "full":
          return "w-full py-3 text-md font-semibold text-base";
        default:
          return "py-2 px-4 font-semibold text-sm";
      }
    },
    getWrappedRounded() {
      switch (this.rounded) {
        case "sm":
          return "rounded-sm";
        case "md":
          return "rounded-md";
        case "lg":
          return "rounded-lg";
        case "full":
          return "rounded-full";
        default:
          return "rounded-sm";
      }
    },
    getWrappedTheme() {
      switch (this.theme) {
        case "primary":
          return "btn-primary";
        case "success":
          return "btn-success";
        case "secondary":
          return "btn-secondary";
        case "warning":
          return "btn-warning";
        case "error":
          return "btn-error";
        default:
          return "btn-danger";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border: 1px solid transparent;
  width: fit-content;
  outline: none;

  &-outline {
    background: transparent !important;
    @apply border-current text-current;
  }

  &-primary {
    @apply bg-primary text-zinc-500;
  }

  &-success {
    @apply bg-success text-black;
  }
}
</style>
