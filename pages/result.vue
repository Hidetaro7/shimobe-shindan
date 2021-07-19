<template>
  <div class="prose mx-auto h-screen flex justify-center items-center flex-col">
    <h1>診断結果</h1>
    <p class="mb-2">おつかれさまでした！</p>
    <div class="text-xl">あなたのSHIMOBE度は</div>
    <div class="text-5xl font-bold my-8 p-4 bg-gray-100">{{result.title}}</div>
    <div class="text-xl" v-html="result.sub"></div>

    <p><nuxt-link to="/">もういっかいやる</nuxt-link></p>
  </div>
</template>

<script>
export default {
  computed: {
    result() {
      const valueTrues = this.$store.state.answers.filter(res => res.value)
      const resData = {}
      if(valueTrues.length === 12) {
        resData.title = "極上のしもべ"
      } else if(valueTrues.length >= 10) {
        resData.title = "立派なしもべ"
      } else if(valueTrues.length >= 5) {
        resData.title = "そこそこのしもべ"
      } else if(valueTrues.length <= 4) {
        resData.title = "しもべビギナー"
      }
      resData.sub = `<b>${valueTrues.length}/12</b>に「はい」と答えました`
      return resData;
    }
  }
}
</script>

<style>

</style>
