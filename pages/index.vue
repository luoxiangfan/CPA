<template>
  <div class="js-site-main site-main">
    <!-- Search Banner -->
    <section
    v-if="!isMobile"
      class="container-fluid search-banner"
      style="background-image: url(/img/orange_pc_banner.jpg)"
    >
      <div class="section-item-box">
        <div class="section-item">
          <div class="img-box">
            <img src="~assets/img/templatemonster_logo.png" alt="icon" style="max-width: 50%;" />
          </div>
          <div class="title-box">Template Monster</div>
          <div
            class="detail-box"
          >TemplateMonster.com is a supermarket of templates and ready-made sites. Service has more</div>
          <div class="btn-box">
            <button>Get Deal</button>
          </div>
        </div>
        <div class="section-item">
          <div class="img-box">
            <img src="~assets/img/romwe_logo.png" alt="icon" style="max-width: 50%;" />
          </div>
          <div class="title-box">Romwe</div>
          <div
            class="detail-box"
          >Romwe is an online store that offers the hottest and latest street fashion clothing and accessories.</div>
          <div class="btn-box">
            <button>Get Deal</button>
          </div>
        </div>
        <div class="section-item">
          <div class="img-box">
            <img src="~assets/img/foreo_logo.jpg" alt="icon" style="max-width: 50%;" />
          </div>
          <div class="title-box">FOREO</div>
          <div
            class="detail-box"
          >FOREO is a passionate, fun-loving team that lives to put an extra dash in your step as you walk out</div>
          <div class="btn-box">
            <button>Get Deal</button>
          </div>
        </div>
      </div>
    </section>
    <!-- End Search Banner -->
    <section class="mobile-banner" style="background-image: url(/img/orange_pc_banner.jpg)" v-else>
      <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="img-box">
              <img src="~assets/img/templatemonster_logo.png" alt="icon" style="max-width: 50%;" />
            </div>
            <div class="title-box">Template Monster</div>
            <div
              class="detail-box"
            >TemplateMonster.com is a supermarket of templates and ready-made sites. Service has more</div>
            <div class="btn-box">
              <button>Get Deal</button>
              <!-- <button :class="{ 'mobile-banner-btn': isMobile }">Get Deal</button> -->
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="~assets/img/romwe_logo.png" alt="icon" style="max-width: 50%;" />
            </div>
            <div class="title-box">Romwe</div>
            <div
              class="detail-box"
            >Romwe is an online store that offers the hottest and latest street fashion clothing and accessories.</div>
            <div class="btn-box">
              <button>Get Deal</button>
              <!-- <button :class="{ 'mobile-banner-btn': isMobile }">Get Deal</button> -->
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="~assets/img/foreo_logo.jpg" alt="icon" style="max-width: 50%;" />
            </div>
            <div class="title-box">FOREO</div>
            <div
              class="detail-box"
            >FOREO is a passionate, fun-loving team that lives to put an extra dash in your step as you walk out</div>
            <div class="btn-box">
              <button>Get Deal</button>
              <!-- <button :class="{ 'mobile-banner-btn': isMobile }">Get Deal</button> -->
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <!-- Top Stores -->
    <div class="top-store-container-wrap" style="padding-top: 20px">
      <section class="container">
        <h2 class="section-title" style="display: none">Top Stores</h2>
        <div class="row">
          <div class="top-store-item-box col-4 col-md-4 col-lg-5-1 p-2" v-for="item in homePageData.RMstore" :key="item.id">
            <nuxt-link
              class="store-grid-item cover-wrap"
              :class="{ 'store-coupon-btn-pc': !isMobile, 'index-store-coupon-btn-m': isMobile }"
              :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`">
              <div class="cover" :class="{ 'store-img-wrap-m width-100': isMobile }" style="border: 1px solid rgb(220, 220, 220,1);">
                <img
                  :src="item.logoUrl"
                  class="align-self-center"
                  :alt="`${item.name} coupons`"
                  :title="item.name"
                />
              </div>
              <h3>{{ item.name }}</h3>
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
    <!-- End Top Stores -->

    <!-- Promo Codes -->
    <div class="container-wrap" style="background-color: rgba(250,250,250,1);">
      <section class="container top-coupon-section">
        <h2 class="section-title" :class="{ 'font-color': isMobile }">Promo Codes</h2>
        <div class="row">
          <!-- <div class="p-2" :class="{ 'col-6': !isMobile, 'col-12': isMobile }" v-for="item in homePageData.RMcoupon" :key="item.id">
            <div class="coupon-item row no-gutters" :class="{ 'border-radius-2': !isMobile, 'border-radius-3': isMobile }" style="display: flex;align-items: center;border: 1px solid rgba(225,225,225,1);border-radius: 5px;justify-content: space-around;">
              <div style="width: 20%;">
                <nuxt-link
                  class="cover-wrap position-relative"
                  :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                  style="background-position: center center;background-size: contain;background-repeat: no-repeat;display:block;"
                  :style="{ 'background-image': 'url(\'' + item.storeLogeUrl + '\')' }"
                  >
                </nuxt-link>
              </div>

              <div style="width: 70%;" class="coupon-img">
                <nuxt-link
                  rel="nofollow"
                  class="get_deal coupon-title text-left"
                  :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.outSiteCouponId}`">
                  <h3 style=" color: #181818;font-family: Microsoft YaHei UI;font-weight: bold;margin-left: 0;">{{ item.name }}</h3>
                </nuxt-link>

                <div class="extra-info" style="padding-left: 0;">
                  <nuxt-link class="code-a-box" :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.outSiteCouponId}`">
                    <span class="coupon-label coupon-label--deal" v-if="item.couponType === 'DEAL'" style="font-size:12px;padding:2px 12px;">{{ item.couponType }}</span>
                    <span class="coupon-label coupon-label--code" v-if="item.couponType === 'CODE'" style="font-size:12px;padding:2px 12px;">{{ item.couponType }}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div> -->

          <div class="py-1 py-sm-2 px-2" :class="{ 'col-6': !isMobile, 'col-12': isMobile }" v-for="(item, index) in homePageData.RMcoupon" :key="index">
                <div class="coupon-item row no-gutters" :class="{ 'border-radius-2': !isMobile, 'height-96 border-radius-3 box-size': isMobile }" style="align-items: center;border: 1px solid #E1E1E1;border-radius: 2px;justify-content: space-around;">
                  <div class="pic-box" :class="{ 'width-20': !isMobile, 'index-coupon-img d-flex flex-column justify-content-center align-items-center position-relative': isMobile }" style="width: 26%;text-align: center;">
                    <nuxt-link
                      class="cover-wrap position-relative"
                      :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                      style="background-position: center center;background-size: contain;background-repeat: no-repeat;display:block;"
                      :class="{ 'height-50': isMobile }"
                      :style="{ 'background-image': 'url(\'' + item.storeLogeUrl + '\')' }"
                    >
                    </nuxt-link>
                    <span :class="{ 'coupon-label': !isMobile, 'index-coupon-label': isMobile }" v-if="isMobile && item.couponType.toUpperCase() === 'CODE'" class="coupon-label--code" style="border-radius:5px;">{{ item.couponType.toUpperCase() }}</span>
                    <span :class="{ 'coupon-label': !isMobile, 'index-coupon-label': isMobile }" v-if="isMobile && item.couponType.toUpperCase() === 'DEAL'" class="coupon-label--deal" style="border-radius:5px;">{{ item.couponType.toUpperCase() }}</span>
                  </div>
                  <div class="info-box" :class="{ 'width-70 coupon-img': !isMobile }" style="width: 65%;">
                    <a
                      rel="nofollow"
                      class="coupon-title text-left"
                      target="_self"
                      :href="`http://${item.storeWebSite}`"
                      @click="saveCurrCouponItem(item)"
                      style="cursor:pointer;"
                    >
                      <h3 class="category-coupon-title" :class="{ 'coupon-font-style': isMobile }" style="margin:0;">{{ item.title }}</h3>
                      <span class="coupon-label-pc coupon-label-size d-none d-lg-inline-block" v-if="!isMobile" :class="`coupon-label--${item.couponType.toLowerCase()}`" style="font-size: 12px;border-radius:3px;margin-left:0;">{{ item.couponType.toUpperCase() }}</span>
                    </a>
                    <a
                      v-if="isMobile && item.couponType.toUpperCase() === 'CODE'"
                      rel="nofollow"
                      class="get_code d-block d-lg-none"
                      :class="{ 'index-coupon-btn-m': isMobile }"
                      target="_self"
                      @click="saveCurrCouponItem(item)"
                      :href="`http://${item.storeWebSite}`"
                    >
                      <div :class="{ 'coupon-hop': !isMobile, 'coupon-hop-index': isMobile }">
                        <div class="partial-code">{{ (item.code !== null && item.code !== '') ? item.code.substring(item.code.length - 1) : '' }}</div>
                        <div class="hide-btn d-flex align-items-center justify-content-center">
                          <span>Show Code</span>
                        </div>
                      </div>
                    </a>
                    <div
                      v-if="isMobile && item.couponType.toUpperCase() === 'DEAL'"
                      rel="nofollow"
                      class="get_deal d-block d-lg-none"
                      :class="{ 'index-deal-btn-m': isMobile }"
                      target="_self"
                      @click="saveCurrCouponItem(item)"
                      :href="`http://${item.storeWebSite}`"
                    >GET DEAL</div>
                  </div>
                </div>
              </div>

          <div class="more-btn-box">
            <nuxt-link to="/store">
              VIEW MORES
              <img src="/img/down-icon.png" alt="down" />
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
    <!-- End Promo Codes -->

    <!--  Popular Stores You May Like -->
    <div class="container-wrap expand-container-wrap" style="background-color: rgba(250,250,250,1);">
      <section class="container top-categories-section">
        <h2 class="section-title" :class="{ 'font-color': isMobile }">
          Popular Stores You May Like
          <a
            href="#top-categories-content"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            class="collapsed"
            aria-controls="top-categories-content"
          ></a>
        </h2>

        <div class="show visible-md">
          <div class="row">
            <div class="top-store-item-box p-2" :class="{ 'col-4': isMobile, 'col-2': !isMobile }" v-for="item in homePageData.TJstore" :key="item.id">
              <nuxt-link
                class="store-grid-item cover-wrap"
                 :class="{ 'border-radius-2': !isMobile, 'border-radius-3': isMobile }"
                :to="`/store/${item.webSite.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                style="border: 1px solid rgb(225, 225, 225, 1);">
                <div class="cover">
                  <img
                    :src="item.logoUrl"
                    class="align-self-center"
                    :alt="`${item.storeName} coupons`"
                    :title="item.storeName"
                  />
                </div>
                <h3 :class="{ 'font-12': isMobile }">{{ item.storeName }}</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- End  Popular Stores You May Like -->

    <!-- Browse Top Categories -->
    <div class="container-wrap expand-container-wrap" style="background-color: rgba(250,250,250,1);padding-bottom: 5%;">
      <section class="container top-categories-section">
        <h2 class="section-title" :class="{ 'font-color': isMobile }">
          Browse Top Categories
          <a
            href="#top-categories-content"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            class="collapsed"
            aria-controls="top-categories-content"
          ></a>
        </h2>

        <div class="show visible-md">
          <div class="row">
            <div class="top-store-item-box col-4 col-md-4 col-lg-2 p-2" v-for="item in topCategoryList" :key="item.id">
              <nuxt-link class="store-grid-item cover-wrap" style="background-color: rgba(250,250,250,1);" :to="`/category/${item.name}`">
                <div class="cover">
                  <img :src="item.logo" class="align-self-center" :alt="`${item.name} coupons`" :title="item.name" style="width: auto;height: auto;" />
                </div>
                <h3 style="color: #282828;font-weight:400;">{{item.name}}</h3>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div id="top-categories-content" class="collapse">
          <div class="row"></div>
        </div>
      </section>
    </div>
    <!-- End Browse Top Categories -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  computed: {
    topCategoryList () {
      return this.$store.state.category.topCategoryList
    },
    homePageData () {
      return this.$store.state.global.homePageData
    },
    isMobile () {
      return this.$store.state.global.isMobile
    }
  },
  data () {
    return {
      couponList: [
        {
          id: 1,
          title: '15% Off with Entire Order Site-wide @2Rise Naturals',
          couponType: 'CODE',
          storeWebSite: '2risenaturals.com',
          storeName: '2Rise Naturals',
          storeLogo: 'https://cannabispromocodes.com/media/spider/good_search/2Rise Naturals.png'
        }
      ]
    };
  },
  head () {
    return {
      title: this.homePageData.sitePageInfo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.homePageData.sitePageInfo.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.homePageData.sitePageInfo.keyWords
        }
      ]
    };
  },
  created () {
    this.$nextTick().then(() => {
      this.initSwiper();
    });
  },
  methods: {
    initSwiper () {
      this.$homeSwiper = new Swiper(this.$refs.swiperContainer, {
        effect: "coverflow",
        slidesPerView: 1.5,
        loop: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 10,
          stretch: -50,
          depth: 400,
          modifier: 1,
          slideShadows: false
        }
      });
    },
    saveCurrCouponItem (item) {
      // localStorage.setItem('couponItem', JSON.stringify(item))
      // window.location.href = item.storeWebSite
      // this.$router.push(`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.couponId}`)
      const url = `/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.outSiteCouponId}`
      window.open(url)
    }
  }
};
</script>

<style scoped>
.cover-wrap .cover img {
  width: auto;
}
.cover-wrap .cover {
  border: none;
}
</style>
