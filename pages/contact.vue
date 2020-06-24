<template>
  <div class="js-site-main site-main" style="min-height: 436px;">
    <div class="contact-container-wrap py-0 py-md-5 mb-2" style="background: none">
      <div class="container contact-container">
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
                <div class="about-main-title-box">Contact us</div>
                <div class="about-main-box" v-exchangeHtml:foo='contact.ContactUs'></div>
              </div>
            </div>
          </div>
          <div class="mobile-about-layout-box" v-if="isMobile">
            <mobile-tab />
            <div class="about-main-content-box">
              <div class="about-main-title-box">Contact us</div>
              <div class="about-main-box" v-exchangeHtml:foo='contact.ContactUs'></div>
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
  name: "Contact",
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
    const { data } = await context.$axios.post(`CPA/contactUS`)
    return { contact: data.data }
  },
  data () {
    return {
      contact: {}
    }
  },
  computed: {
    isMobile () {
      return this.$store.state.global.isMobile
    }
  },
  head () {
    return {
      title: this.contact.sitePageInfo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.contact.sitePageInfo.description },
        { hid: 'keywords', name: 'keywords', content: this.contact.sitePageInfo.keyWords }
      ]
    }
  }
};
</script>

<style>
</style>
