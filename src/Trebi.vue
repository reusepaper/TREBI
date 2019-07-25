<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
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
      <Posts></Posts>
    </div>
    <div class="section">
      <PostWrite></PostWrite>
    </div>
    <div class="section">
      <div class="GraphPageContain">
        <GitGraph></GitGraph>
      </div>
    </div>
    <div class="section">
      <Footer></Footer>
    </div>
    <div class="section">
      <Sidebar></Sidebar>
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
import Team from "./views/Team";
import Member from "./views/Member";
import Posts from "./views/Posts";
import PostWrite from "./views/PostsWrite";
import GitGraph from "./views/GitGraph";
import Footer from "./views/Footer";
import Sidebar from "./views/Sidebar";

export default {
  name: "Trebi",
  components: {
    Main,
    Team,
    Member,
    Posts,
    PostWrite,
    GitGraph,
    Footer,
    Sidebar
  },
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: [
          "page1",
          "page2",
          "page3",
          "page4",
          "page5",
          "page6",
          "page7",
          "page8"
        ],
        sectionsColor: [
          "#517A53",
          "#ffff82",
          "#e4f1e6",
          "#ffffdf",
          "#F8FDF6",
          "#F7F7F7",
          "#232323",
          "#FFFFFF"
        ]
      }
    };
  }
};
</script>
<style>
.teampageContain {
  height: 94%;
  width: 97%;
  background-color: white;
  transform: translate(1.5%, 3%);
}

.GraphPageContain {
  height: 94%;
  width: 97%;
  background-color: #aed34e;
  transform: translate(1.5%, 3%);
}
</style>