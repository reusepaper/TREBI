<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <Main></Main>
    </div>
    <div class="section">
      <Team></Team>
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
      <GitGraph></GitGraph>
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
          "#FFFFFF",
          "#B0D6B3",
          "#B0D6B3",
          "#ff8181fc",
          "#F7F7F7",
          "#517A53",
          "#FFFFFF"
        ]
      }
    };
  }
};
</script>
