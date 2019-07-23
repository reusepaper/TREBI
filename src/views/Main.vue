<template>
  <div id="main">
    <BannerContain></BannerContain>
    <AuthContain></AuthContain>
  </div>
</template>
<script>
import BannerContain from "../components/Main/BannerContain";
import AuthContain from "../components/Main/AuthContain";

export default {
  components: {
    BannerContain,
    AuthContain
  }
};
</script>

<style>
  #main {
    height: inherit;
  }
</style>
