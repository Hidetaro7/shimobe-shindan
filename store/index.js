export const state = () => ({
  answers: []
})

export const mutations = {
  setAnswer(state, payload) {
    const targetAnswer = state.answers.find(res => res.id === payload.id)
    if(!targetAnswer) {
      state.answers.push(payload)
    }else{
      targetAnswer.value = payload.value
    }
  }
}
