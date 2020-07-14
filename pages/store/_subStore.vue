<template>
  <div class="js-site-main site-main">
    <modal v-if="dialogVisible" :dialogVisible="dialogVisible" :currCouponItem="currCouponItem" @close="dialogVisible = false" @open="dialogVisible = true" />
    <section class="page-title-banner" :class="{ 'bgc-m-w': isMobile }" style="border-bottom: 1px solid #E1E1E1;" v-if="isMobile">
      <div class="container store-info-container">
        <div class="row1" style="display: flex;">
          <!-- Profle Content -->
          <div class="col-lg-2 col-md-3 col-5 d-flex align-items-center" style="padding-left: 0;">
            <!-- Store Image -->
            <div class="store-brand cover-wrap" style="height:100%;">
              <a class="cover" :href="(storeDetailData.Advertising && storeDetailData.Advertising !== null && storeDetailData.Advertising !== '') ? storeDetailData.Advertising : storeDetailData.webSiteUrl" target="_blank" rel="nofollow" style="width: 100%;height: auto;border:none;">
                <img
                  style="width: auto;"
                  class="img-fluid"
                  :src="storeDetailData.logo"
                  :alt="`${storeDetailData.name} coupons`"
                />
              </a>
            </div>
          </div>
          <div>
            <div style="position:relative;padding-bottom:7px;">
              <h1 class="store-name">{{ storeDetailData.showName }}</h1>
              <h3
                class="store-sys-f"
                :class="{ 'store-sys': !showMore }"
                style="font-size: 12px;"
                @click="seeMore"
              >{{ storeDetailData.storeDescription }}</h3>
              <!-- <span class="store-see-more" v-if="storeDetailData.storeDescription && storeDetailData.storeDescription !== null && storeDetailData.storeDescription !== ''" @click="seeMore" style="color:#999999;">SEE MORE<i class="fa fa-angle-down" :class="{ 'icon-toggle': showMore }" style="padding-left: .5rem;"></i></span> -->
              <!-- Project Progress -->
            </div>
            <div style="margin-top: .5rem;">
              <a class="visit-btn" :class="{ 'store-visit-btn-m': isMobile }" :href="storeDetailData.Advertising" target="_blank" rel="nofollow">Visit Website</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container-wrap store-detail-main-wrap" style="background-color: rgba(250,250,250,1);padding-bottom: 5%;">
      <div class="container">
        <div class="row">
          <!-- left side -->
          <div class="col-lg-3 col-12 pr-lg-0" v-if="!isMobile">
            <!-- Panel Header -->
            <div class="card text-left store-pc-wrap" style="align-items: center;padding: 0;">
              <div class="store-pc-logo-wrap" style="width: 100%;height: 200px;">
                <a
                  :href="(storeDetailData.Advertising && storeDetailData.Advertising !== null && storeDetailData.Advertising !== '') ? storeDetailData.Advertising : storeDetailData.webSiteUrl"
                  target="_blank"
                  rel="nofollow"
                  class="cover"
                  style="display: flex;height: 100%;padding: 14px 0;justify-content: center;align-items: center;">
                  <img :src="storeDetailData.logo" :alt="`${storeDetailData.name} coupons`" style="width: 40%;">
                </a>
                <!-- <a
                  :href="(storeDetailData.Advertising && storeDetailData.Advertising !== null && storeDetailData.Advertising !== '') ? storeDetailData.Advertising : storeDetailData.webSiteUrl"
                  target="_blank"
                  rel="nofollow"
                  class="cover"
                  style="display: block;width: 100%;height: 80%;text-align: center;background-repeat: no-repeat;background-position: center;"
                  :style="{ 'background-image': 'url(\'' + storeDetailData.logo + '\')' }">
                  <img :src="storeDetailData.logo" :alt="`${storeDetailData.name} coupons`" style="height: 50%;">
                </a> -->
              </div>
              <h3>{{ storeDetailData.name }}</h3>
              <p style="padding-left: 20px;padding-right:20px;">{{ storeDetailData.storeDescription }}</p>
              <div style="margin-top: .5rem;padding-bottom: 20px;">
                <a :href="storeDetailData.Advertising" style="width:144px;height:38px;" target="_blank" rel="nofollow" class="visit-btn">Visit Website</a>
              </div>
            </div>
            <div class="card top-store-card" style="padding:0;padding-bottom:20px;">
              <p
                style="font-size: 20px;color: #181818;font-weight: 400;margin-bottom: 26px;font-family:Microsoft YaHei UI;padding: 20px;border-bottom: 1px solid rgba(220,220,220,1);"
              >Stores</p>
              <!-- Panel Body -->
              <div class="row">
                <div class="col-6 p-2" v-for="item in topStoreList" :key="item.id">
                  <nuxt-link
                    class="cover-wrap store-item"
                    style="max-height: 100px"
                    :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                  >
                    <div class="cover" style="padding: 0 20px 20px 20px;height:100%">
                      <img
                        class="img-fluid"
                        style="max-height:100%;height: auto;width: auto;padding-top: 5px;"
                        :alt="`${item.name} coupons`"
                        :src="item.logoUrl"
                      />
                    </div>
                  </nuxt-link>
                  <div style="text-align: center;padding: 5px 0;font-size:12px;font-family:Microsoft YaHei UI;font-weight:400;color:rgba(24,24,24,1);">{{ item.name }}</div>
                </div>
              </div>
              <!-- End Panel Body -->
            </div>
          </div>
          <div class="col-lg-9 col-12 coupon-container">
            <div class="row">
              <div class="choice" style="width:100%;padding:0;margin:0 15px;border-bottom: 1px solid #E1E1E1;">
                <button id="type_all" style="transition:none;" class="btn btn-sm btn-all" :class="{ 'btn-active': allActive, 'font-16': !isMobile }" @click="selectCoupon('')">All Offers</button>
                <button id="type_code" class="btn btn-sm btn-code" :class="{ 'btn-active': codeActive, 'font-16': !isMobile }" @click="selectCoupon('CODE')">Coupon Codes</button>
                <button id="type_deal" class="btn btn-sm btn-deal" :class="{ 'btn-active': dealActive, 'font-16': !isMobile }" @click="selectCoupon('DEAL')">Deals</button>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <!-- User Block -->
                <div class="box d-flex my-2 my-sm-3" :class="{ 'box-pc': !isMobile, 'mt-14 min-height-126': isMobile }" v-for="(couponItem, index) in couponList" :key="index">
                  <div class="offer d-sm-block">
                    <div
                      class="offer-anchor d-flex flex-column justify-content-center align-items-center"
                    >
                      <span class="offer-anchor-text" :class="{ 'font-20': isMobile }">
                        <span v-for="(saleItem, index) in couponItem.sale.replace(' ', '').split(' ')" :key="index">{{ saleItem }}</span>
                      </span>
                      <span class="label code" :class="{'font-14': !isMobile}" v-if="couponItem.couponType === 'CODE'" style="margin-bottom: 0;padding: 0;font-size: 12px;width: 71px;height: 30px;display: flex;justify-content: center;align-items: center;">{{ couponItem.couponType }}</span>
                      <span class="label deal" :class="{'font-14': !isMobile}" v-if="couponItem.couponType === 'DEAL'" style="margin-bottom: 0;padding: 0;font-size: 12px;width: 71px;height: 30px;display: flex;justify-content: center;align-items: center;">{{ couponItem.couponType }}</span>
                    </div>
                  </div>
                  <div class="detail-info" :class="{ 'justify-content-start store-coupon-detail-info-m': isMobile, 'store-coupon-detail-info': !isMobile }">
                    <a
                      class="get_code"
                      style="display: block;width: 100%;"
                      :href="couponItem.link && couponItem.link !== '' ? couponItem.link : couponItem.storeWebSite"
                      target="_self"
                      rel="nofollow"
                      @click="getDeal(couponItem)"
                    >
                      <h3 class="paddl store-coupon-title-display" :class="{ 'txt-color-pc': !isMobile, 'txt-color-m font-16': isMobile }" style="margin-bottom: 12px;">{{ couponItem.title }}</h3>
                      <h3 class="paddl store-coupon-desc-display" :class="{ 'store-coupon-desc font-14': !isMobile, 'store-coupon-desc-m': isMobile }" style="margin-bottom:14px;">{{ couponItem.title }}</h3>
                    </a>
                    <a
                      v-if="(couponItem.couponType === 'CODE') && (showcompleteCode === false)"
                      rel="nofollow"
                      class="get_code"
                      style="width: 144px;height: 38px;position: relative;"
                      :class="{ 'store-show-code-m': isMobile }"
                      target="_self"
                      :href="(couponItem.link && (couponItem.link !== '')) ? couponItem.link : couponItem.storeWebSite"
                      @click="getDeal(couponItem)"
                    >
                      <div class="store-coupon-hop store-coupon" style="width:144px;height:38px;" :class="{ 'store-coupon-m store-show-code-m': isMobile, 'store-coupon-pc': !isMobile }">
                        <div class="partial-code" style="width: inherit;height: inherit;">{{ (couponItem.code !== null && couponItem.code !== '') ? couponItem.code.substring(couponItem.code.length - 1) : '' }}</div>
                        <div class="hide-btn d-flex align-items-center justify-content-center" style="width: inherit;height: inherit;">
                          <span>Show Code</span>
                        </div>
                      </div>
                    </a>
                    <a
                      class="coupon-code-btn get_code store-coupon"
                      style="width:144px;height:40px;"
                      :class="{ 'store-coupon-m store-coupon-btn-m line-height-33': isMobile, 'store-coupon-pc store-coupon-btn-pc': !isMobile }"
                      :url="`/store/${couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${couponItem.id}#get_code_${couponItem.id}`"
                      rel="nofollow"
                      target="_self"
                      :href="couponItem.link && couponItem.link !== '' ? couponItem.link : couponItem.storeWebSite"
                      v-if="(couponItem.couponType === 'CODE') && (showcompleteCode === true)"
                      @click="getDeal(couponItem)"
                    >{{ couponItem.code }}</a>
                    <a
                      v-if="couponItem.couponType === 'DEAL'"
                      class="btn-get-deal-store get_deal store-coupon"
                      style="width:144px;height:40px;"
                      :class="{ 'store-coupon-m store-coupon-btn-m line-height-33': isMobile, 'store-coupon-pc store-coupon-btn-pc': !isMobile }"
                      rel="nofollow"
                      target="_self"
                      :href="(couponItem.link && (couponItem.link !== '')) ? couponItem.link : couponItem.storeWebSite"
                      @click="getDeal(couponItem)"
                    >GET DEAL</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Profile Sidebar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '~/components/modal'
export default {
  name: "store-subStore",
  components: {
    modal
  },
  async asyncData (context) {
    const params = {
      storeWebSite: context.params.subStore
    }
    const couponParams = {
      storeWebSite: context.params.subStore,
      couponType: (context.query.coupon_type && context.query.coupon_type !== null) ? context.query.coupon_type : ''
    }
    try {
      const [res1, res2] = await Promise.all([
        context.$axios.post(`CPA/StoreDetail`, params).then(res => {
          if (res.data.code === 0) {
            return res
          }
          if (res.data.code === -1) {
            context.error({ statusCode: 404, message: 'This page could not be found' })
          }
        }),
        context.$axios.post(`CPA/getStoreCouponList`, couponParams).then(res => {
          if (res.data.code === 0) {
            return res
          }
          if (res.data.code === -1) {
            context.error({ statusCode: 404, message: 'This page could not be found' })
          }
        })
      ])
      return {
        storeDetailData: res1.data.data,
        couponList: res2.data.data
      }
    } catch (error) {
      context.error({ statusCode: 404, message: 'This page could not be found' })
    }
  },
  computed: {
    topStoreList () {
      return this.$store.state.store.topStoreList
    },
    isMobile () {
      return this.$store.state.global.isMobile
    },
    hostUrl () {
      return this.$store.state.global.hostUrl
    },
    currCouponData () {
      return this.$store.state.global.currCouponData
    }
  },
  data () {
    return {
      dialogVisible: false,
      storeDetailData: {},
      couponList: [],
      couponSelectList: {},
      allActive: false,
      dealActive: false,
      codeActive: false,
      currCouponItem: {},
      showMore: false,
      showcompleteCode: false
    }
  },
  head () {
    return {
      title: this.storeDetailData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.storeDetailData.description },
        { hid: 'keywords', name: 'keywords', content: this.storeDetailData.keyWords }
      ],
      link: [
        { rel: 'canonical', href: `https://www.couponpa.com${this.$route.path}` }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: { '@context': 'http://schema.org', '@type': 'Organization', name: this.storeDetailData.name, description: this.storeDetailData.description, url: this.storeDetailData.webSiteUrl, logo: this.storeDetailData.logo }
        }
      ]
    }
  },
  created () {
    if (this.$route.query.c && this.$route.query.c !== null && this.$route.query.c !== '') {
      this.showcompleteCode = true
    }
    if (this.$route.query.coupon_type) {
      this.highlightCouponBtn(this.$route.query.coupon_type)
    } else {
      this.allActive = true
    }
  },
  mounted () {
    this.loadModal()
  },
  methods: {
    highlightCouponBtn (type) {
      if (!(this.$route.query.coupon_type) && ((this.codeActive === false) && (this.dealActive === false))) {
        this.allActive = true
      }
      if (type === '') {
        this.allActive = true
        this.codeActive = false
        this.dealActive = false
      }
      if (type === 'CODE') {
        this.codeActive = true
        this.dealActive = false
        this.allActive = false
      }
      if (type === 'DEAL') {
        this.dealActive = true
        this.allActive = false
        this.codeActive = false
      }
    },
    selectCoupon (type) {
      this.highlightCouponBtn(type)
      const params = {
        storeWebSite: this.$route.params.subStore,
        couponType: type
      }
      this.$router.push(`/store/${this.$route.params.subStore}?coupon_type=${type}`)
      this.$axios.post(`CPA/getStoreCouponList`, params).then(res => {
        this.couponList = res.data.data
      })
    },
    getDeal (item) {
      if (localStorage.getItem('couponItem') && JSON.parse(localStorage.getItem('couponItem')) && JSON.parse(localStorage.getItem('couponItem')) !== {}) {
        localStorage.removeItem('couponItem')
      }
      this.currCouponItem = item
      const url = `/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.id}`
      window.open(url)
      if (this.$route.query.c && (item.id === Number(this.$route.query.c))) {
        this.dialogVisible = true
      }
    },
    showCode (item) {
      this.currCouponItem = item
      this.dialogVisible = true
    },
    loadModal () {
      if (this.$route.query.c && this.$route.query.c !== null && this.$route.query.c !== '') {
        const currCouponId = Number(this.$route.query.c);
        const currCouponList = this.couponList.filter(item => item.id === currCouponId)
        this.currCouponItem = currCouponList[0]
        this.dialogVisible = true
      }
    },
    seeMore () {
      this.showMore = !this.showMore
    }
  }
};
</script>

<style>
</style>
