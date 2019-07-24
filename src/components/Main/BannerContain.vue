<template>
  <div id="main-title">
    <BannerHeader></BannerHeader>
  </div>
</template>

<script>
import BannerHeader from './BannerComponents/BannerHeader'
export default {
  components: {
    BannerHeader
  }
}
</script>

<style>
  #main-title {
    height: 60%;
    background: #F7F7F7;
    overflow: hidden;
  }
</style>
