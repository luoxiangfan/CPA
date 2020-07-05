<template>
  <div class="js-site-main site-main">
    <div class="about-container-wrap py-0 py-md-5 mb-2" style="background-color: rgba(250,250,250,1);">
      <div class="container about-container">
        <div class="row">
          <!-- Profile Sidebar -->
          <div class="pc-about-layout-box row" v-if="!isMobile">
            <div class="col-3">
              <div class="pc-about-tab-box about-tab-box">
                <ul>
                  <nuxt-link tag="li" to="/about" exact-active-class="active" class="aboutUs">
                    <a href="">About Us</a>
                  </nuxt-link>
                  <nuxt-link tag="li" to="/contact" exact-active-class="active" class="contactUs">
                    <a href="">Contact Us</a>
                  </nuxt-link>
                </ul>
              </div>
            </div>
            <div class="col-9">
              <div class="about-main-content-box">
                <div class="about-main-title-box">About us</div>
                <div class="about-main-box" v-exchangeHtml:foo='about.AboutUs'></div>
              </div>
            </div>
          </div>
          <div class="mobile-about-layout-box" v-if="isMobile">
            <mobile-tab />
            <div class="about-main-content-box" style="margin-top: 20px;">
              <div class="about-main-title-box">About us</div>
              <div class="about-main-box" v-exchangeHtml:foo='about.AboutUs'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mobileTab from '~/components/mobileTab'
export default {
  name: "About",
  components: {
    mobileTab
  },
  directives: {
    exchangeHtml: {
      // 指令的定义
      bind: function (el, foo) {
        el.innerHTML += foo.value
      }
    }
  },
  async asyncData (context) {
    const { data } = await context.$axios.post(`CPA/aboutUs`)
    return { about: data.data }
  },
  data () {
    return {
      about: {}
    }
  },
  computed: {
    isMobile () {
      return this.$store.state.global.isMobile
    }
  },
  head () {
    return {
      title: this.about.sitePageInfo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.about.sitePageInfo.description },
        { hid: 'keywords', name: 'keywords', content: this.about.sitePageInfo.keyWords }
      ]
    }
  }
};
</script>

<style>
</style>
