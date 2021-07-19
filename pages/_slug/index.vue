<template>
  <main class="container main h-screen flex flex-col justify-center items-center">
    <div class="flex justify-center items-center flex-grow">
      <div class="text-xl">
        <div class="text-4xl text-center mb-4 font-bold">Q. {{qData.q}}</div>
        <div class="text-3xl font-bold leading-relaxed">
          {{qData.title}}
        </div>
        <div class="my-4 flex justify-center items-center">
          <label class="radio-check">
            <input type="radio" v-model="answer" value="true" >
            <span>はい</span>
          </label>
          <label class="radio-check">
            <input type="radio" v-model="answer" value="false" >
            <span>いいえ</span>
          </label>
        </div>
      </div>
    </div>
    <nav v-if="answer!==null" class="fixed bottom-0 w-screen left-0 z-10 border-t border-gray-900 flex justify-center items-center flex-shrink-0 py-4">
      <nuxt-link :to="nextPageURL" class="button">
        <span v-if="checkLastPage">診断結果へ！</span>
        <span v-else>次のページへ</span>
      </nuxt-link>
    </nav>
  </main>
</template>

<script>
import axios from 'axios'
import questions from "@/assets/json/questions.json"

export default {
  async asyncData({ params }) {
    const pageId = parseInt(params.slug.replace("q", ""))
    const qData = questions.questions.find(res => res.q === pageId)
    console.log(qData)
    return {qData, qTotal: questions.questions.length, pageId: pageId}
  },
  computed: {
    nextPageURL() {
      return this.pageId !== this.qTotal ? "q"+(this.pageId + 1) : "/result"
    },
    checkLastPage() {
      return this.nextPageURL === "/result"
    }
  },
   data() {
     return {
       answer: null
     }
   },
   watch: {
     answer(_new, _old) {
       this.$store.commit("setAnswer", {id: this.pageId, value: _new})
     }
   }
}
</script>

<style lang="scss" scoped>
.radio-check {
  @apply mx-4 font-bold text-3xl;
}
</style>
