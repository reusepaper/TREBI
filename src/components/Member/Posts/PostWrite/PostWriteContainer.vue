<template>
  <div class="postWriteContainer">
    <div class="postwrite-title">
      PostWrite
    </div>
    <PostEditor></PostEditor>
    <!-- <Button @click="goPostList">리스트 보기</Button> -->
  </div>
</template>

<script>
import PostEditor from "./PostEditor";
export default {
  methods: {
    // goPostList: function() {
    //   this.$store.commit("setPostPopupIndex", 1);
    // }
  },
  components: {
    PostEditor
  }
};
</script>

<style>
  .postWriteContainer {
    height: 100%;
  }
  .postwrite-title {
    color: #524F5A;
    text-align: center;
    /* padding-top: 10vh; */
    font-size: 3vw;
    font-weight: bold;
    font-family: Ubuntu, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
</style>
