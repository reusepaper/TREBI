<template>
  <div>
    <PostsTitleContain></PostsTitleContain>
    <WriterListsContain></WriterListsContain>
    <PostsViewContain></PostsViewContain>
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
