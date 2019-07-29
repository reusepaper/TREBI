<template>
  <div id="app">
    <Header></Header>
    <!-- <Trebi></Trebi> -->
    <router-view/>
  </div>
</template>

<script>
import Header from "./views/Header.vue"
// import Trebi from "./Trebi.vue";

export default {
  name: "app",
  components: {
    Header
    // Trebi
  }
};
</script>

