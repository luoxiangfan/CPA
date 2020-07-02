<template>
  <div
    class="modal fade store-detail-modal js-modal show modal-bgc"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    @click="$emit('close')"
  >
    <div class="modal-dialog modal-dialog-centered" :class="{ 'modal-pc': !isMobile }" role="document">
      <div class="modal-content" :class="{ 'height-100': !isMobile }" @click="openModal">
        <div class="modal-body" :class="{ 'd-flex justify-content-center height-100': !isMobile }" style="padding: 30px;">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
            <span aria-hidden="true">×</span>
          </button>
          <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center">
              <a :class="{ 'modal-img-wrap-pc': !isMobile }" class="cover" v-if="currCouponItem && currCouponItem !== {}" :href="`/store/${currCouponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`">
                <img :class="{ 'modal-img-pc': !isMobile }" :alt="currCouponItem.name" :src="currCouponItem.storeLogo" />
              </a>
              <a :class="{ 'modal-img-wrap-pc': !isMobile }" class="cover" v-if="couponItem && currCouponItem === undefined && couponItem !== {}" :href="`/store/${couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`">
                <img :class="{ 'modal-img-pc': !isMobile }" :alt="couponItem.storeName" :src="couponItem.storeLogo" />
              </a>
            </div>
            <div class="text-content col-12" :class="{ 'd-flex justify-content-center flex-column': !isMobile }" v-if="currCouponItem && currCouponItem !== undefined && currCouponItem !== {}">
              <p
                class="coupon-title"
                style="text-align:center;"
              >{{ currCouponItem.title }}</p>
              <!-- <p class="coupon-source">
                <span style="color: #7D7D7D;" class="mr-1">{{ currCouponItem.storeName }}</span>
                <a
                  style="color: #269AC8;font-size: 12px;"
                  rel="nofollow"
                  :href="currCouponItem.link && currCouponItem.link !== '' ? currCouponItem.link : currCouponItem.storeWebSite"
                >{{ currCouponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '') }}</a>
              </p> -->

              <div class="code-box" v-if="currCouponItem.couponType === 'CODE'">
                <p id="foo">{{ currCouponItem.code }}</p>
                <button ref="copy" @click="copyLink" data-clipboard-target="#foo" class="btn copy_code" :class="{ 'copy_code_success': copySuccess }" id="copy_code">COPY</button>
              </div>
              <div class="link-box" v-if="currCouponItem.couponType === 'DEAL'" style="text-align: center;">
                <a :href="currCouponItem.link && currCouponItem.link !== '' ? currCouponItem.link : currCouponItem.storeWebSite" class="btn" style="width: 60%;">GO TO STORE</a>
              </div>
            </div>
            <div class="text-content col-12" v-if="couponItem && currCouponItem === undefined && couponItem !== {}">
              <p
                class="coupon-title"
                style="text-align:center;"
              >{{ couponItem.title }}</p>
              <!-- <p class="coupon-source">
                <span style="color: #7D7D7D;" class="mr-1">{{ couponItem.storeName }}</span>
                <a
                  style="color: #269AC8;font-size: 12px;"
                  rel="nofollow"
                  :href="couponItem.link && couponItem.link !== '' ? couponItem.link : couponItem.storeWebSite"
                >{{ couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '') }}</a>
              </p> -->

              <div class="code-box" v-if="couponItem.couponType === 'CODE'">
                <p id="foo">{{ couponItem.code }}</p>
                <button ref="copy" @click="copyLink" data-clipboard-target="#foo" class="btn copy_code" :class="{ 'copy_code_success': copySuccess }" id="copy_code">COPY</button>
              </div>
              <div class="link-box" v-if="couponItem.couponType === 'DEAL'" style="text-align: center;">
                <a :href="couponItem.link && couponItem.link !== '' ? couponItem.link : couponItem.storeWebSite" class="btn" style="width: 60%;">GO TO STORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";
export default {
  name: "modal",
  props: ["dialogVisible", "currCouponItem"],
  computed: {
    isMobile () {
      return this.$store.state.global.isMobile
    }
  },
  data () {
    return {
      copyBtn: null,
      copySuccess: false,
      couponItem: (localStorage.getItem('couponItem') && JSON.parse(localStorage.getItem('couponItem')) && JSON.parse(localStorage.getItem('couponItem')) !== {}) ? JSON.parse(localStorage.getItem('couponItem')) : {}
    };
  },
  mounted () {
    if (this.couponItem && this.currCouponItem === undefined && this.couponItem.couponType) {
      if (this.couponItem.couponType === 'CODE') {
        this.copyBtn = new ClipboardJS(this.$refs.copy);
      }
    }
    if (this.currCouponItem && this.currCouponItem !== undefined && this.currCouponItem.couponType) {
      if (this.currCouponItem.couponType === 'CODE') {
        this.copyBtn = new ClipboardJS(this.$refs.copy);
      }
    }
  },
  methods: {
    copyLink (e) {
      const _this = this;
      window.event ? window.event.cancelBubble = true : e.stopPropagation();
      _this.$emit('open')
      const clipboard = this.copyBtn;
      clipboard.on("success", function (e) {
        _this.$refs.copy.textContent = 'SUCCESS'
        _this.copySuccess = true
        e.clearSelection();
      });
    },
    openModal (e) {
      window.event ? window.event.cancelBubble = true : e.stopPropagation();
    }
  }
};
</script>

<style>
</style>
