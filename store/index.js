
export const actions = {
  async nuxtServerInit (store, { req }) {
    console.log(req.headers.host)
    store.commit('global/updateHostUrl', req.headers.host)
    const ua = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    const userAgent = (process && process.server) ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = ua.test(userAgent)
    if (isMobile) {
      store.commit('global/updateMobileState', true)
    } else {
      await store.dispatch('store/getTopStores')
    }
    await store.dispatch('global/getHomePageData')
    await store.dispatch('category/getPageHeadInfo')
  }
}
