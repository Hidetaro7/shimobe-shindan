<template>
  <div class="container px-4 pt-32">
    <!-- <h1>診断結果</h1>
    <p class="mb-2">おつかれさまでした！</p>
    <div class="text-xl">あなたのSHIMOBE度は</div> -->
    <!-- <div class="text-5xl font-bold my-8 p-4 bg-gray-100">{{result.title}}</div> -->
    <!-- <div class="text-xl mb-8" v-html="result.sub"></div> -->
    <h1 class="flex items-center justify-center font-bold text-4xl mb-8">
      <img :src="resData.badge" alt="" class="h-16 mr-2 my-0 w-auto">
      <span>
        {{resData.title}}
      </span>
    </h1>
    <img :src="resData.image" alt="" class=" mx-auto w-auto max-w-xl">
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
