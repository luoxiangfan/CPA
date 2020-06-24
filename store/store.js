
export const state = () => ({
  topStoreList: []
})

export const mutations = {
  updateTopStores (state, data) {
    state.topStoreList = data;
  }
}
export const actions = {
  async getTopStores (store) {
    const { data } = await this.$axios.post('CPA/getTopStores')
    store.commit('updateTopStores', data.data)
    return data
  }
}
