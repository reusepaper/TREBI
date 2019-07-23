<template>
  <div>
    <Main></Main>
    <Team></Team>
    <Member></Member>
    <Posts></Posts>
    <PostWrite></PostWrite>
    <GitGraph></GitGraph>
    <Footer></Footer>
    <Sidebar></Sidebar>
  </div>
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
  }
};
</script>
