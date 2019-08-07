<template>
  <div>
    <h1>PostDetail</h1>
    {{this.$store.state.nowDisplayPost.title}}
    <div
      class="post__image"
      v-bind:style="{ 'background-image': 'url(' + this.$store.state.nowDisplayPost.image + ')' }"
    ></div>
    <Button @click="goPostList">글 목록보기</Button>
  </div>
</template>

<script>
export default {
  methods: {
    goPostList: function() {
      this.$store.commit("setPostPopupIndex", 1);
    }
  },
  mounted() {
    // console.log(this.$store.state.nowDisplayPost);
  }
};
</script>

<style>
.post__image {
  width: 100px;
  height: 100px;
}
</style>
