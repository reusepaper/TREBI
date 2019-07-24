<template>
  <div id="main">
    <BannerContain></BannerContain>
    <div class="contentContainer">
      <MainContentContain></MainContentContain>
      <AuthContain></AuthContain>
    </div>
  </div>
</template>
<script>
import BannerContain from "../components/Main/BannerContain";
import MainContentContain from "../components/Main/MainContentContain"
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
  .contentContainer{
    height : 40%;
    width  :100%;
    padding: 0px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    grid-gap : 10px;
  }
</style>
