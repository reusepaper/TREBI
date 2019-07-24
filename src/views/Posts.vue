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
.posts-title {
}
.contents {
}
.posts-list-contain {
}
.posts-contents-contain {
}
</style>
