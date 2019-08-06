<template>
  <div>
    <h1>PostList</h1>
    <Button @click="goPostDetail">글 상세보기</Button>
    {{this.$store.state.nowDisplayMember}}
    <Button
      v-if="this.$store.state.userLevel != 'visitor' && this.$store.state.is_login == true"
      @click="goPostWrite"
    >글작성</Button>
  </div>
</template>

<script>
import FirebaseService from "../../../../services/FirebaseService";
import { async } from "q";

export default {
  mounted() {
    // this.getPosts();
    console.log(displayMember);
  },
  data() {
    return {
      displayMember: this.$store.state.nowDisplayMember
    };
  },
  watch: {
    displayMember() {
      console.log("바뀜");
    }
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
