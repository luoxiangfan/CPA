<template>
  <div class="js-site-main site-main" style="min-height: 342px;">
    <section class="page-title-banner category-banner" style="background: none;">
      <div class="container text-center">
        <h1 class style="text-align: center;">Browse Top Categories</h1>
      </div>
    </section>
    <section class="container-wrap category-container-wrap mb-2 mb-lg-0">
      <div class="container category-container">
        <div class="row">
          <div class="p-3 p-sm-2" :class="{ 'col-4': isMobile, 'col-2 mb-3 mt-3': !isMobile }" v-for="item in topCategoryList" :key="item.id">
            <div class="category-item">
              <nuxt-link :to="`/category/${item.name}`" style="height: 100px;position: relative;" :class="{ 'category-m': isMobile }">
                <img :src="item.logo" :alt="item.name" :title="item.name" style="width: auto;height: auto;position: absolute;top: 0;" />
                <p style="margin:0;position: absolute;bottom: 0;">{{item.name}}</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "category",
  computed: {
    topCategoryList () {
      return this.$store.state.category.topCategoryList
    },
    isMobile () {
      return this.$store.state.global.isMobile
    },
    categoryPageHeadInfo () {
      return this.$store.state.category.categoryPageHeadInfo
    }
  },
  head () {
    return {
      title: this.categoryPageHeadInfo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.categoryPageHeadInfo.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.categoryPageHeadInfo.keyWords
        }
      ]
    };
  }
};
</script>

<style>
</style>
