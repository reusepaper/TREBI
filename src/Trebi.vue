<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <Header></Header>
    <div class="section">
      <Main_copy></Main_copy>
    </div>
    <div class="section">
      <Main></Main>
    </div>
    <div class="section">
      <div class="teampageContain">
        <Team></Team>
      </div>
    </div>
    <div class="section">
      <Member></Member>
    </div>
    <div class="section">
      <div class="GraphPageContain">
        <GitGraph></GitGraph>
      </div>
    </div>
    <div class="section">
      <Footer></Footer>
    </div>
    <!-- <Main></Main>
      <Team></Team>
      <Member></Member>
      <Posts></Posts>
      <PostWrite></PostWrite>
      <GitGraph></GitGraph>
      <Footer></Footer>
    <Sidebar></Sidebar>-->
  </full-page>
</template>
<script>
import Main from "./views/Main";
import Main_copy from "./views/Main_copy";
import Team from "./views/Team";
import Member from "./views/Member";
import GitGraph from "./views/GitGraph";
import Footer from "./views/Footer";
import Header from "./views/Header";

export default {
  name: "Trebi",
  components: {
    Main,
    Main_copy,
    Team,
    Member,
    GitGraph,
    Footer,
    Header
  },
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: ["page1", "page2", "page3", "page4", "page5"]
      }
    };
  }
};
</script>
<style>
</style>