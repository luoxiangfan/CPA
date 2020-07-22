<template>
  <header
    id="js-header"
    class="js-site-header u-header mb-2 mb-lg-0"
    style="margin-bottom: 0 !important;border: 1px solid #E1E1E1;border-left: none;border-right: none;"
  >
    <nav class="navbar navbar-expand-lg">
      <div class="pc-header-box container">
        <!-- Logo -->
        <nuxt-link to="/" class="navbar-brand mr-4">
          <img
            alt="cannabis coupons - cannabispromocodes.com"
            src="/img/logo.webp"
          />
        </nuxt-link>
        <!-- End Logo -->

        <!-- Navigation -->
        <div class="flex-grow-1">
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item nav-item__search" style="margin-left: 0;margin-right: 5%;width: 445px;">
              <form class="js-head-search-form">
                <!-- Search Field -->
                <div class="input-group">
                  <input
                    type="search"
                    class="js-search__input form-control pc-header-search-input"
                    placeholder="Search coupons and deals for your favourite stores"
                    data-provide="typeahead"
                    required
                    autocomplete="off"
                    aria-label="Search for stores, offers or brands"
                    name="search"
                    id="header_search_input"
                    v-model="word"
                    @input="querySearch"
                    @mouseover="reset"
                  />
                  <ul
                    class="typeahead dropdown-menu"
                    role="listbox"
                    id="header_search_ul"
                    style="top: 34px; left: 0px; display: none;"
                  >
                    <li class="" v-for="item in resData.stores" :key="item.id">
                      <a class="dropdown-item" :href="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`">
                        <div class="typeahead search-result">
                          <div class="img-text-wrap">
                            <img :src="item.logoUrl" class="pic">
                            <div><strong>{{ item.name }}</strong> -- Store</div>
                          </div>
                          <p class="count">{{ item.couponNum }} offers</p>
                        </div>
                      </a>
                    </li>
                    <li class v-for="item in resData.storeTypes" :key="item.id">
                      <a class="dropdown-item" :href="`/category/${item.name.replace(/\s/g,'')}`">
                        <div class="typeahead search-result">
                          <div>
                            <strong>{{ item.name }}</strong>
                            <span>-- Category</span>
                          </div>
                          <p class="count">more categories</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- End Search Field -->
              </form>
            </li>

            <nuxt-link
              tag="li"
              to="/store"
              class="nav-item-top-stores nav-item ml-0 d-none d-lg-inline-block"
              style="text-transform: none;display: flex !important;"
              active-class="active"
            >
              <div class="nav-link" style="display: flex;align-items: center;">
                <a href="">All Stores</a>
              </div>
            </nuxt-link>

            <nuxt-link
              tag="li"
              to="/category"
              active-class="active"
              style="text-transform: none;display: flex !important;"
              class="nav-item nav-item-category d-none d-lg-inline-block"
            >
              <div class="nav-link" style="display: flex;align-items: center;">
                <a href="">Categories</a>
              </div>
            </nuxt-link>
          </ul>
        </div>
        <!-- End Navigation -->
      </div>
      <div class="mobile-header-box">
        <!-- Logo -->
        <nuxt-link to="/" class="navbar-brand mr-4">
          <img
            alt="cannabis coupons - cannabispromocodes.com"
            src="/img/logo.webp"
          />
        </nuxt-link>
        <!-- End Logo -->

        <!-- Navigation -->
        <div class="flex-grow-1">
          <ul class="navbar-nav justify-content-end">
            <nuxt-link
              tag="li"
              to="/store"
              active-class="active"
              class="header-moible-nav-item-li nav-item-top-stores nav-item ml-0 d-lg-inline-block"
            >
              <div class="nav-link">
                <a
                  href=""
                  :class="{ 'mobile-font': isMobile }"
                  style="text-decoration: none;color: #151515;font-size: 14px;font-weight: 500;text-transform: capitalize;"
                >All Stores</a>
              </div>
            </nuxt-link>

            <nuxt-link
              tag="li"
              to="/category"
              active-class="active"
              class="header-moible-nav-item-li nav-item nav-item-category d-lg-inline-block">
              <div class="nav-link">
                <a
                  href=""
                  :class="{ 'mobile-font': isMobile }"
                  style="text-decoration: none;color: #151515;font-size: 14px;font-weight: 500;text-transform: capitalize;"
                >Categories</a>
              </div>
            </nuxt-link>
          </ul>
        </div>
        <!-- End Navigation -->
      </div>
    </nav>
    <ul class="d-block d-lg-none" style="list-style: none;margin: 0;padding: 1rem;">
      <li class="nav-item nav-item__search" id="header_search_ul_mobile_li">
        <form class="js-head-search-form">
          <!-- Search Field -->
          <div class="input-group">
            <input
              type="search"
              class="js-search__input form-control mobile-search-input"
              placeholder="Search coupons and deals for your favourite stores"
              data-provide="typeahead"
              required
              autocomplete="off"
              aria-label="Search for stores, offers or brands"
              name="search"
              id="header_search_input_mobile"
              v-model="word"
              @input="querySearch"
              @mouseover="reset"
            />
            <ul
              class="typeahead dropdown-menu"
              role="listbox"
              id="header_search_ul_mobile"
              style="top: 34px; left: 0px; display: none;"
            >
              <li class="" v-for="item in resData.stores" :key="item.id">
                <a class="dropdown-item" :href="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`">
                  <div class="typeahead search-result">
                    <div class="img-text-wrap">
                      <img :src="item.logoUrl" class="pic">
                      <div><strong>{{ item.name }}</strong> -- Store</div>
                    </div>
                    <p class="count">{{ item.couponNum }} offers</p>
                  </div>
                </a>
              </li>
              <li class v-for="item in resData.storeTypes" :key="item.id">
                <a class="dropdown-item" :href="`/category/${item.name.replace(/\s/g,'')}`">
                  <div class="typeahead search-result">
                    <div>
                      <strong>{{ item.name }}</strong>
                      <span>-- Category</span>
                    </div>
                    <p class="count">more categories</p>
                  </div>
                </a>
              </li>
            </ul>
            <!-- <button class="btn" type="button" style="background-image: url(/img/search.webp);background-repeat: no-repeat;background-position: center;"></button> -->
          </div>
          <!-- End Search Field -->
        </form>
      </li>
    </ul>
    <!-- <mobile-tab /> -->
  </header>
</template>

<script>
import $ from 'jquery';
import { mapState } from "vuex";
// import mobileTab from '~/components/mobileTab'
export default {
  name: "siteHead",
  // components: {
  //   mobileTab
  // },
  data () {
    return {
      word: "",
      num: 10,
      resData: {
        storeTypes: [],
        stores: []
      }
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.global.isMobile
    })
  },
  mounted () {
    // console.log($);
    $('#header_search_input').blur(function () {
      setTimeout(function () {
        $('#header_search_ul').hide()
      }, 700)
    })
    $('#header_search_input-mobile').blur(function () {
      setTimeout(function () {
        $('#header_search_ul_mobile').hide()
      }, 700)
    })
  },
  methods: {
    // querySearch () {
    //   const params = {
    //     keys: this.word
    //   };
    //   if (params.keys && params.keys !== "") {
    //     this.$axios
    //       .post(
    //         "CPA/getSearch",
    //         params
    //       )
    //       .then(resp => {
    //         if (
    //           resp &&
    //           resp.data.data &&
    //           (resp.data.data.storeTypes.length !== 0 ||
    //           resp.data.data.stores.length !== 0)
    //         ) {
    //           this.resData = {
    //             storeTypes: resp.data.data.storeTypes,
    //             stores: resp.data.data.stores
    //           };
    //           if (this.isMobile) {
    //             $('#header_search_ul_mobile').show()
    //           } else {
    //             $('#header_search_ul').show()
    //           }
    //         } else {
    //           // $('#header_search_ul').hide()
    //           if (this.isMobile) {
    //             $('#header_search_ul_mobile').hide()
    //           } else {
    //             $('#header_search_ul').hide()
    //           }
    //           this.resData = {
    //             storeTypes: [],
    //             stores: []
    //           };
    //         }
    //       });
    //   } else {
    //     // $('#header_search_ul').hide()
    //     if (this.isMobile) {
    //       $('#header_search_ul_mobile').hide()
    //     } else {
    //       $('#header_search_ul').hide()
    //     }
    //     this.resData = {
    //       storeTypes: [],
    //       stores: []
    //     };
    //   }
    // },
    async querySearch () {
      this.num++;
      const a = this.num;
      const params = {
        keys: this.word
      };
      if (this.word !== '') {
        const result = await this.$axios.post("CPA/getSearch", params)
        if (!result) {
          return;
        }
        if (a === this.num) {
          this.resData = {
            storeTypes: result.data.data.storeTypes,
            stores: result.data.data.stores
          }
          if ((result.data.data.storeTypes.length !== 0) || (result.data.data.stores.length !== 0)) {
            if (this.isMobile) {
              $("#header_search_ul_mobile").show();
            } else {
              $("#header_search_ul").show();
            }
          } else if (this.isMobile) {
            $("#header_search_ul_mobile").hide();
          } else {
            $("#header_search_ul").hide();
          }
        }
      } else {
        this.resData = {
          storeTypes: [],
          stores: []
        }
        if (this.isMobile) {
          $("#header_search_ul_mobile").hide();
        } else {
          $("#header_search_ul").hide();
        }
      }
    },
    reset (e) {
      window.event ? window.event.cancelBubble = true : e.stopPropagation();
      if (this.word === '') {
        this.resData = {
          storeTypes: [],
          stores: []
        }
      }
    }
  }
};
</script>

<style>
</style>
