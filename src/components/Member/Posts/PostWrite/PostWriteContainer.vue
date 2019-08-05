<template>
  <div class="postWriteContainer">
    <h1>PostWrite</h1>
    <PostEditor></PostEditor>
    <Button @click="goPostList">리스트 보기</Button>
  </div>
</template>

<script>
import PostEditor from "./PostEditor";
export default {
  methods: {
    goPostList: function() {
      this.$store.commit("setPostPopupIndex", 1);
    }
  },
  components: {
    PostEditor
  }
};
</script>

<style>
</style>
