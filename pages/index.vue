<template>
  <div class="container h-screen flex justify-center items-center flex-col">
    <h1 class="text-center">
      <img class="w-1/4 mb-4 mx-auto" src="~assets/image/neurona_logo_black.svg" alt="neurona.jp">
      <Logo class="w-1/2 mb-24 mx-auto" />
    </h1>
    <p class="w-full">
      <nuxt-link to="/q1" class="block">
        <img class="w-3/12 mx-auto" src="~assets/image/label-start.svg" alt="スタート">
      </nuxt-link>
    </p>
  </div>

</template>

<script>
export default {

  layout: "opening"
}
</script>
