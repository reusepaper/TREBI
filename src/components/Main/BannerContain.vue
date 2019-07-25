<template>
  <div id="main-title">
    <BannerHeader></BannerHeader>
    <img width="530vw" src="../../assets/main_img.png" />
  </div>
</template>

<script>
import BannerHeader from "./BannerComponents/BannerHeader";
export default {
  components: {
    BannerHeader
  }
};
</script>

<style>
#main-title {
  height: 64%;
  background: #f7f7f7;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  grid-gap: 50px;
}
</style>
