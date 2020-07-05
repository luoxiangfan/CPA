<template>
  <div class="mobile-about-tab-box about-tab-box" style="border-bottom: 1px solid #E1E1E1;">
    <ul>
      <nuxt-link tag="li" to="/about" exact-active-class="active" class="aboutUs">
        <a href="">About Us</a>
      </nuxt-link>
      <nuxt-link tag="li" to="/contact" exact-active-class="active" class="contactUs">
        <a href="">Contact Us</a>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mobileTab"
};
</script>

<style>
</style>
