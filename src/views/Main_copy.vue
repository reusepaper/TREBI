<template>
  <div id="main">
    <BannerContain></BannerContain>
    <div class="contentContainer">
      <MainContentContain></MainContentContain>
      <AuthContain></AuthContain>
    </div>
    <div class="bottomColor"></div>
  </div>
</template>
<script>
import BannerContain from "../components/Main/BannerContain";
import MainContentContain from "../components/Main/MainContentContain";
import AuthContain from "../components/Main/AuthContain";

export default {
  components: {
    BannerContain,
    MainContentContain,
    AuthContain
  }
};
</script>

<style>
#main {
  height: inherit;
}
.contentContainer {
  height: 30%;
  width: 100%;
  padding: 0px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  grid-gap: 10px;
}
.bottomColor {
  margin-top: 20px;
  background-color: #edffa4;
  width: 100%;
  height: 10%;
}
</style>

