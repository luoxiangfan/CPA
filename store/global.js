export const state = () => ({
  isMobile: false,
  hostUrl: '',
  homePageData: {}
})

export const mutations = {
  updateMobileState (state, action) {
    state.isMobile = action
  },
  updateHostUrl (state, action) {
    state.hostUrl = action
  },
  updateHomePageData (state, action) {
    state.homePageData = action
  }
}

export const actions = {
  async getHomePageData (store) {
    const { data } = await this.$axios.post('CPA/index')
    store.commit('updateHomePageData', data.data)
    return data
  }
}
