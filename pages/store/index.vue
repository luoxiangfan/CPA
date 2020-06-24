<template>
  <div class="js-site-main site-main">
    <section class="page-title-banner category-banner d-none d-md-block" style="background: none">
      <div class="container text-center">
        <h1 class>
          Stores in
          <nuxt-link to="/">Couponpa.com</nuxt-link>
        </h1>
      </div>
    </section>

    <!-- Blog Background Overlay Blocks -->
    <section class="paginate-list-container-wrap mb-2 mb-md-2" style="background: none">
      <div class="container">
        <div class="row justify-content-center">
          <ul class="paginate-list col-12 d-flex flex-wrap justify-content-lg-center">
            <li v-for="item in storeTypeList" :key="item.id">
              <nuxt-link exact-active-class="active" :class="`word-${item.value}`" :to="`/store?word=${item.value}`" @click="storeTypeSearch">{{ item.value }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container-wrap mb-2">
      <div
        class="container store-grid-container"
        v-if="$route.fullPath === '/store' || $route.query.word === 'TOP'"
      >
        <div class="row" style="justify-content: space-between;margin: 0;">
          <div
            class="p-md-2 p-0"
            :class="{ 'col-4-o m-m-7': isMobile, 'col-2': !isMobile }"
            v-for="item in resData"
            :key="item.id"
          >
            <nuxt-link
              class="cover-wrap"
              style="height: 176px;border: 1px solid #ececec;border-radius: 5px;"
              :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`"
            >
              <div class="cover" style="border:none;width:100%;height: 100%;">
                <div
                  style="width: 100%;height: 70%;text-align: center;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center;"
                >
                  <img
                    style="width:auto;max-height: 100%;display: inline-block;"
                    :src="item.logoUrl"
                    :alt="`${item.name} coupons`"
                    :title="item.name"
                  />
                </div>
                <span style="font-size:14px;">{{ item.name }}</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div style="background-color: #fff" v-else>
        <div class="container store-list-container p-3">
          <div class="row text-left">
            <div class="col-md-3 col-6" v-for="item in resData" :key="item.id">
              <nuxt-link style="color:#282828;" :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`">{{ item.name }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "store",
  watchQuery: ['word'],
  async asyncData (context) {
    const params = {
      word: ""
    };
    if (context.route.fullPath === "/store") {
      params.word = "";
    }
    if (context.query) {
      if (context.query.word === "TOP") {
        params.word = "";
      } else {
        params.word = context.query.word;
      }
    }
    const { data } = await context.$axios.post(`CPA/storeList`, params);
    return {
      resData: data.data.storePageData.pageData,
      sitePageInfo: data.data.sitePageInfo
    };
  },
  computed: {
    isMobile () {
      return this.$store.state.global.isMobile
    }
  },
  data () {
    return {
      resData: {},
      sitePageInfo: {},
      storeTypeList: [
        {
          id: 50,
          value: "TOP"
        },
        {
          id: 1,
          value: "A"
        },
        {
          id: 2,
          value: "B"
        },
        {
          id: 3,
          value: "C"
        },
        {
          id: 4,
          value: "D"
        },
        {
          id: 5,
          value: "E"
        },
        {
          id: 6,
          value: "F"
        },
        {
          id: 7,
          value: "G"
        },
        {
          id: 8,
          value: "H"
        },
        {
          id: 9,
          value: "I"
        },
        {
          id: 10,
          value: "J"
        },
        {
          id: 11,
          value: "K"
        },
        {
          id: 12,
          value: "L"
        },
        {
          id: 13,
          value: "M"
        },
        {
          id: 14,
          value: "N"
        },
        {
          id: 15,
          value: "O"
        },
        {
          id: 16,
          value: "P"
        },
        {
          id: 17,
          value: "Q"
        },
        {
          id: 18,
          value: "R"
        },
        {
          id: 19,
          value: "S"
        },
        {
          id: 20,
          value: "T"
        },
        {
          id: 21,
          value: "U"
        },
        {
          id: 22,
          value: "V"
        },
        {
          id: 23,
          value: "W"
        },
        {
          id: 24,
          value: "X"
        },
        {
          id: 25,
          value: "Y"
        },
        {
          id: 26,
          value: "Z"
        },
        {
          id: 27,
          value: "0-9"
        }
      ]
    };
  },
  head () {
    return {
      title: this.sitePageInfo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.sitePageInfo.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.sitePageInfo.keyWords
        }
      ]
    };
  },
  methods: {
    async storeTypeSearch () {
      const params = {
        word: this.$route.query.word && this.$route.query.word === 'TOP' ? '' : this.$route.query.word
      }
      const { data } = await this.$axios.post(`CPA/storeList`, params)
      return { resData: data.data.storePageData.pageData }
    }
  }
};
</script>

<style>
</style>
