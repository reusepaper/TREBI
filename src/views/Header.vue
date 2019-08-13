<template>
  <div>
    <Navbar class="nav"></Navbar>
  </div>
</template>

<script>
import Navbar from "../components/Header/HeaderContain.vue"
export default {
  name: "Header",
  components: {
    Navbar
  }
};
</script>
<style>
  .nav {
    width:100%;
  }
</style>
