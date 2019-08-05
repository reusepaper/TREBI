<template>
  <div>
    <h1>PostList</h1>
    <Button @click="goPostDetail">글 상세보기</Button>
    <Button @click="goPostWrite">글작성</Button>
  </div>
</template>

<script>
import FirebaseService from "../../../../services/FirebaseService";
import { async } from "q";

export default {
  mounted() {
    console.log(this.$store.state.user);
    // this.getPosts();
  },
  methods: {
    getPosts: async function() {
      await FirebaseService.getPosts();
    },
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
