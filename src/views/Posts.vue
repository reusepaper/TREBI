<template>
  <div class="posts-container">
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
.posts-container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 150px 8fr;
}
.posts-title {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}
.contents {
  display: grid;
  grid-template-rows: 3fr 7fr;
  padding: 20px;
}
.posts-list-contain {
}
.posts-contents-contain {
}
</style>
