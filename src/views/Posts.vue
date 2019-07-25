<template>
  <div class="posts">
    <PostsTitleContain class="posts-title"></PostsTitleContain>
    <div class="contents">
      <WriterListsContain class="posts-list-contain"></WriterListsContain>
      <PostsViewContain class="posts-contents-contain"></PostsViewContain>
    </div>
  </div>
</template>
<script>
import PostsTitleContain from "../components/Posts/PostsTitleContain";
import WriterListsContain from "../components/Posts/WriterListsContain";
import PostsViewContain from "../components/Posts/PostsViewContain";

export default {
  components: {
    PostsTitleContain,
    WriterListsContain,
    PostsViewContain
  }
};
</script>
<style scoped>
.posts {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 150px 8fr;
}
.posts-title {
  float: left;
  width: 10%;
  height: 100vh;
}
.contents {
  float: left;
  width: 80%;
  height: 100vh;
}
.posts-list-contain {
  height: 20%;
  margin: 20px;
  margin-top: 7%;
}
.posts-contents-contain {
  background-color: white;
  margin: 20px;
  height: 46%;
  border-radius: 1%;
  margin-top: 8%;
}
</style>
