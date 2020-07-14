<template>
  <div class="js-site-main site-main">
    <div class="container-wrap category-detail-container" style="background-color: rgba(250,250,250,1);">
      <div class="container">
        <div class="row py-3">
          <!-- left side -->
          <div class="col-lg-3 pr-lg-0" v-if="!isMobile">
            <!-- Panel Header -->
            <div class="card category-list-card mb-3" style="border:1px solid rgba(225,225,225,1);">
              <p class="card-title" style="font-size: 20px">Categories</p>
              <div class="card-body">
                <div class="ml-4">
                  <p class="category-p-font" style="font-size:16px;" v-if="resData.CategoryName.replace(/\s/g,'') === $route.params.subCategory">{{ resData.CategoryName }}</p>
                  <nuxt-link :to="`/category/${resData.CategoryName.replace(/\s/g,'')}`" class="font-weight-bold text-dark mb-3 d-block" style="font-size:16px;" v-else>{{ resData.CategoryName }}</nuxt-link>
                  <ul class="list-group list-group-flush">
                    <nuxt-link
                      tag="li"
                      class="list-group-item"
                      v-for="item in resData.lowerTypes"
                      :key="item.id"
                      :to="`/category/${item.name.replace(/\s/g,'')}`"
                      active-class="active"
                    >
                      <a href="">{{ item.name }}</a>
                    </nuxt-link>
                  </ul>
                  <p class=" mt-3 category-p-font">
                    <nuxt-link
                      style="color:inherit;font-size:16px;"
                      to="/category"
                    >All Categories</nuxt-link>
                  </p>
                </div>
              </div>
            </div>
            <!-- Panel Header -->
            <div class="card store-list-card" style="border:1px solid rgba(225,225,225,1);">
              <p class="card-title" style="font-size: 20px">Stores</p>
              <div class="card-body js-store-list">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" style="padding: 13px 1.25rem;" v-for="item in resData.storeList" :key="item.id">
                    <nuxt-link :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`">{{ item.name }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-lg-9-category coupon-container">
            <div class="category-name" style="text-align: center;padding-bottom: .7rem;" v-if="isMobile && (resData.CategoryName.replace(/\s/g,'') === $route.params.subCategory)">{{ resData.CategoryName }}</div>
            <nuxt-link tag="div" class="category-name" :to="`/category/${resData.CategoryName.replace(/\s/g,'')}`" style="text-align: center;padding-bottom: .7rem;" v-if="isMobile && (resData.CategoryName.replace(/\s/g,'') !== $route.params.subCategory)">{{ resData.CategoryName }}</nuxt-link>
            <nav style="background-color: #fff;box-sizing: content-box;padding: 0 15px;border-top: 1px solid #dcdcdc;border-bottom: 1px solid #dcdcdc;" v-if="isMobile">
              <ul style="margin:0;padding:0;display: flex;flex-wrap: wrap;" class="lower-type-ul">
                <nuxt-link
                  tag="li"
                  style="padding: 10px 0;margin-right: 1rem;"
                  v-for="item in resData.lowerTypes"
                  :key="item.id"
                  :to="`/category/${item.name.replace(/\s/g,'')}`"
                  active-class="active">
                    <a href="">{{ item.name }}</a>
                  </nuxt-link>
              </ul>
            </nav>
            <div class="row p-l-r-15" style="margin:0;">
              <div class="col-12 choice" style="padding: 0;border-bottom:1px solid #E1E1E1;display: flex;align-items: center;position: relative;">
                <button id="type_all" class="btn btn-sm btn-all" :class="{'btn-active': allActive, 'font-16': !isMobile}" @click="selectCoupon('')">All Offers</button>
                <button id="type_code" class="btn btn-sm btn-code" :class="{'btn-active': codeActive, 'font-16': !isMobile}" @click="selectCoupon('CODE')">Coupon Codes</button>
                <button id="type_deal" class="btn btn-sm btn-deal" :class="{'btn-active': dealActive, 'font-16': !isMobile}" @click="selectCoupon('DEAL')">Deals</button>
                <span class="mb-0 category-offer-num" :class="{ 'font-12': isMobile }">{{ couponCount }} Offers</span>
              </div>
            </div>
            <div class="row p-l-r-15" style="margin: 1rem -.5rem">
              <!-- User Block -->
              <div class="col-sm-6 col-12 py-1 py-sm-2 px-2" v-for="(item, index) in couponPage.pageData" :key="index">
                <div class="coupon-item row no-gutters" :class="{ 'p-t-b-10': isMobile }" style="align-items: center;border: 1px solid #E1E1E1;border-radius: 2px;justify-content: space-around;">
                  <div class="pic-box" :class="{ ' category-coupon-img width-26 d-flex flex-column justify-content-center align-items-center position-relative': isMobile }" style="width: 32%;text-align: center;">
                    <nuxt-link
                      class="cover-wrap position-relative"
                      :class="{ 'coupon-height': !isMobile, 'height-50': isMobile }"
                      :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                      style="background-position: center center;background-size: contain;background-repeat: no-repeat;display:block;"
                      :style="{ 'background-image': 'url(\'' + item.storeLogo + '\')' }"
                    >
                    </nuxt-link>
                    <span class="coupon-label" v-if="isMobile" :class="`coupon-label--${item.couponType.toLowerCase()}`" style="margin-top:5px;justify-content: center;align-items: center;display: flex;width:47px;height: 20px;border-radius:5px;">{{ item.couponType }}</span>
                  </div>
                  <div class="info-box" :class="{ 'coupon-img': !isMobile }" style="width: 60%;">
                    <a
                      rel="nofollow"
                      target="_self"
                      class="coupon-title text-left"
                      @click="saveCurrCouponItem(item)"
                      style="cursor:pointer;"
                      :href="`${item.link}` || `http://${item.storeWebSite}`"
                    >
                      <h3 class="category-coupon-title" :class="{ 'category-coupon-title-m': isMobile }" style="margin:0;">{{ item.title }}</h3>
                      <span class="coupon-label-pc coupon-label-size d-none d-lg-inline-block" v-if="!isMobile" :class="`coupon-label--${item.couponType.toLowerCase()}`" style="font-size: 12px;border-radius:3px;">{{ item.couponType }}</span>
                    </a>
                    <a
                      v-if="isMobile && item.couponType === 'CODE'"
                      rel="nofollow"
                      class="get_code d-block d-lg-none"
                      :class="{ 'index-coupon-btn-m': isMobile }"
                      target="_self"
                      @click="saveCurrCouponItem(item)"
                      :href="`${item.link}` || `http://${item.storeWebSite}`"
                    >
                      <div :class="{ 'coupon-hop': !isMobile, 'coupon-hop-index': isMobile }">
                        <div class="partial-code">{{ (item.code !== null && item.code !== '') ? item.code.substring(item.code.length - 1) : '' }}</div>
                        <div class="hide-btn d-flex align-items-center justify-content-center">
                          <span>Show Code</span>
                        </div>
                      </div>
                    </a>
                    <a
                      v-if="isMobile && item.couponType === 'DEAL'"
                      rel="nofollow"
                      class="get_deal btn-get-deal-category d-block d-lg-none"
                      style="margin-top: 10px;font-size:12px;"
                      target="_self"
                      @click="saveCurrCouponItem(item)"
                      :href="`${item.link}` || `http://${item.storeWebSite}`"
                    >GET DEAL</a>
                  </div>
                </div>
              </div>
              <!-- pages.paginated -->
              <div class="col-12" v-if="couponPage.count !== 0">
                <p class="ui-pagination">
                  <!-- disable为禁用 active为激活 -->
                  <span id="pre-page" class="disable" @click="couponOperation('pre')">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </span>
                  <span>{{ Number($route.query.page) ? Number($route.query.page) : currPageNumber }} / {{ couponPage.pageCount }}</span>
                  <span
                    id="next-page"
                    class="active"
                    @click="couponOperation('next')"
                  >
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
            </div>
            <div class="row" style="margin: 1rem -.5rem" v-if="couponPage.pageData.length === 0">No data</div>
          </div>
          <!-- End Profile Sidebar -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-subCategory",
  async asyncData (context) {
    const params = {
      couponType: (context.query.coupon_type && context.query.coupon_type !== null) ? context.query.coupon_type : '',
      typeName: context.params.subCategory,
      pageNumber: (context.query.page && context.query.page !== '') ? context.query.page : 1,
      pageSize: 30
    }
    const { data } = await context.$axios.post(`CPA/categorys`, params)
    return {
      resData: data.data,
      currPageNumber: data.data.couponPage.pageNumber,
      couponPage: data.data.couponPage,
      couponCount: data.data.couponPage.count
    }
  },
  computed: {
    isMobile () {
      return this.$store.state.global.isMobile
    }
  },
  data () {
    return {
      resData: {},
      couponPage: {},
      currPageNumber: 1,
      allActive: false,
      dealActive: false,
      codeActive: false,
      couponType: '',
      typeActive: false,
      couponCount: 0,
      currPage: 1
    }
  },
  head () {
    return {
      title: this.resData.sitePageInfo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.resData.sitePageInfo.description },
        { hid: 'keywords', name: 'keywords', content: this.resData.sitePageInfo.keyWords }
      ]
    }
  },
  created () {
    if (this.$route.query.coupon_type) {
      this.highlightCouponBtn(this.$route.query.coupon_type)
      this.couponType = this.$route.query.coupon_type
    } else {
      this.allActive = true
    }
  },
  methods: {
    async categoryChange (item) {
      const params = {
        couponType: '',
        typeName: this.$route.params.subCategory,
        pageNumber: 1,
        pageSize: 30
      }
      const { data } = await this.$axios.post(`CPA/categorys`, params)
      return {
        resData: data.data,
        couponCount: data.data.couponPage.count
      }
    },
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
        couponType: type,
        typeName: this.$route.params.subCategory,
        pageNumber: 1,
        pageSize: 30
      }
      this.couponType = type
      this.$router.push(`/category/${this.$route.params.subCategory}?coupon_type=${type}&page=${params.pageNumber}`)
      this.$axios.post('CPA/getCouponPageForType', params).then(res => {
        if (res && res.data.code === 0) {
          this.couponPage = res.data.data.couponPage
          this.currPageNumber = res.data.data.couponPage.pageNumber
          this.couponCount = res.data.data.couponPage.count
        }
      })
    },
    couponOperation (paginationType) {
      if (paginationType === '') {
        this.currPageNumber = 1;
      }
      if (paginationType === 'pre') {
        if (this.currPageNumber > 1) {
          this.currPageNumber = this.currPageNumber - 1;
        } else {
          this.currPageNumber = 1;
        }
      }
      if (paginationType === 'next') {
        if ((this.currPageNumber < this.couponPage.pageCount) && (this.couponPage.pageCount !== 0)) {
          this.currPageNumber = this.currPageNumber + 1;
        } else {
          this.currPageNumber = this.couponPage.pageCount;
        }
      }
      this.highlightCouponBtn(this.couponType)
      this.$router.push(`/category/${this.$route.params.subCategory}?coupon_type=${this.couponType}&page=${this.currPageNumber}`)
      const params = {
        couponType: this.couponType,
        typeName: this.$route.params.subCategory,
        pageNumber: this.currPageNumber,
        pageSize: 30
      }
      this.$axios.post('CPA/getCouponPageForType', params).then(res => {
        if (res && res.data.code === 0) {
          this.couponPage = res.data.data.couponPage
          this.currPageNumber = res.data.data.couponPage.pageNumber
          this.couponCount = res.data.data.couponPage.count
        }
      })
    },
    saveCurrCouponItem (item) {
      localStorage.setItem('couponItem', JSON.stringify(item))
      // this.$router.push(`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.couponId}`)
      const url = `/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.couponId}`
      window.open(url)
      if (this.$route.query.c && (item.id === Number(this.$route.query.c))) {
        this.dialogVisible = true
      }
    }
  }
};
</script>

<style>
</style>
