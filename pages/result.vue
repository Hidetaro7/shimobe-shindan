<template>
  <div class="container px-4 pt-32">
    <div class="text-xl text-center font-bold mb-4">あなたのシンダン結果は</div>
    <h1 class="flex items-center justify-center flex-col md:flex-row font-bold text-4xl mb-8">
      <img :src="resData.badge" alt="" class="h-24 md:h-16 mr-2 mt-0 w-auto mb-4 md:mb-0">
      <span>
        {{resData.title}}
      </span>
    </h1>
    <img :src="resData.image" alt="" class=" mx-auto w-full md:max-w-xl">
    <div class="mb-16 prose mx-auto">
      {{resData.comment}}
    </div>
    <iframe class="mx-auto max-w-full" width="560" height="315" src="https://www.youtube.com/embed/zfbOjGuj8Zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p class="py-8 text-center"><nuxt-link to="/" class="button">もういっかいやる</nuxt-link></p>
  </div>
</template>gi

<script>
import results from "@/assets/json/questions.json"
export default {
  data() {
    return {
      resData: {}
    }
  },
  mounted() {
      const valueTrues = this.$store.state.answers.filter(res => res.value === "true")
      const resultsData = results.results;

      let ids = 0
      if(valueTrues.length === 12) {
        ids = 1
      } else if(valueTrues.length >= 10) {
        ids = 2
      } else if(valueTrues.length >= 5) {
        ids = 3
      } else if(valueTrues.length <= 4) {
        ids = 4
      }
      this.resData = resultsData.find(res => res.rank === ids);
      this.resData.badge = require(`@/assets/image/${this.resData.badge}`)
      console.log(this.resData.badge)
      this.resData.image = require(`@/assets/image/${this.resData.image}`)
     // console.log(resData)
      //resData.sub = `<b>${valueTrues.length}/12</b>に「はい」と答えました`

  }
}
</script>

<style>

</style>
