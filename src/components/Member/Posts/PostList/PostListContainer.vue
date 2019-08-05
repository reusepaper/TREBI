<template>
  <div>
    <h1>PostList</h1>
    <Button @click="goPostDetail">글 상세보기</Button>
    <Button @click="goPostWrite">글작성</Button>
  </div>
</template>

<script>
export default {
  methods: {
    goPostDetail: function() {
      this.$store.commit("setPostPopupIndex", 0);
    },
    goPostWrite: function() {
      this.$store.commit("setPostPopupIndex", 2);
    }
  }
};
</script>

<style>
</style>
