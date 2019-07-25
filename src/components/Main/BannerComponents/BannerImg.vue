<template>
  <div id="bannerImgs">
    <leftImg></leftImg>
    <rightImg></rightImg>
  </div>
</template>
<script>
import leftImg from "./BannerImgComponents/leftImg";
import rightImg from "./BannerImgComponents/rightImg";
export default {
  components: {
    leftImg,
    rightImg
  }
};
</script>
<style>
#bannerImgs {
  height: 64%;
  background: #edffa4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  grid-gap: 50px;
}
</style>
