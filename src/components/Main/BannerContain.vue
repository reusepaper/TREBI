<template>
  <div id="main-title">
    <BannerHeader></BannerHeader>
    <BannerImg></BannerImg>
  </div>
</template>

<script>
import BannerHeader from "./BannerComponents/BannerHeader";
import BannerImg from "./BannerComponents/BannerImg";
export default {
  components: {
    BannerHeader,
    BannerImg
  }
};
</script>

<style>
#main-title {
  height: 64%;
  background: #edffa4;
  overflow: hidden;
}
</style>
