<template>
  <div>
    <site-head />
    <main>
      <nuxt />
    </main>
    <site-foot />
  </div>
</template>

<script>
import siteHead from '~/components/siteHead'
import siteFoot from '~/components/siteFoot'
export default {
  components: {
    siteHead,
    siteFoot
  }
}
</script>

<style>
</style>
