<template>
  <div class="">
    <transition name="fade">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" >/*
.button {
  @apply rounded-xl bg-white font-bold inline-flex appearance-none border-4 border-gray-900 text-lg text-gray-900;
  padding: .8em 1.6em;
} */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter{
  opacity: 0;
}
.fade-leave-active {
  opacity: 0;
}
</style>
