<template>
  <div class="">
    <transition name="layout">
    <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  }
}
</script>

<style lang="scss" >
.button {
  @apply rounded-xl bg-white font-bold inline-flex appearance-none border-4 border-gray-900 text-lg text-gray-900;
  padding: .8em 1.6em;
}
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s, transform .8s;
}
.layout-enter{
  opacity: 0;
  transform: translateX(100px);
}
.layout-leave-active {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
