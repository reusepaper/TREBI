<template>
  <div>
    <h1>PostDetail</h1>
    {{this.$store.state.nowDisplayPost.title}}
    <Button @click="goPostList">글 목록보기</Button>
  </div>
</template>

<script>
export default {
  methods: {
    goPostList: function() {
      this.$store.commit("setPostPopupIndex", 1);
    }
  }
};
</script>

<style>
</style>
