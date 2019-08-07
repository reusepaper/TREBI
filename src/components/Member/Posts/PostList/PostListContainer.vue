<template>
  <div class="postList__wrapper">
    <div class="postList__header">
      <div class="post__title">{{this.$store.state.nowDisplayMember}}님의 Post</div>
      <Button
        v-if="this.$store.state.userLevel != 'visitor' && this.$store.state.is_login == true"
        @click="goPostWrite"
      >글작성</Button>
    </div>
    <Button @click="goPostDetail">글 상세보기</Button>
    <div class="postList__container">
      <div v-for="post in postList">
        <PostCard v-bind:post="post"></PostCard>
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "../../../../services/FirebaseService";
import { mapState } from "vuex";
import PostCard from "./PostCard";
export default {
  mounted() {
    this.getUId(this.$store.state.nowDisplayMember);
  },
  data() {
    return {
      displayMember: "",
      postList: []
    };
  },
  components: {
    PostCard
  },
  computed: mapState(["nowDisplayMember"]),
  watch: {
    nowDisplayMember() {
      this.displayMember = this.$store.state.nowDisplayMember;
      this.getUId(this.$store.state.nowDisplayMember);
      // this.getPostsById(uid);
    },
    postList: function() {}
  },
  methods: {
    getPosts: async function() {
      await FirebaseService.getPosts();
    },
    getUId: async function(name) {
      const [uid] = await FirebaseService.getUIdByName(name);
      this.getPostsById(uid);
    },
    getPostsById: async function(uid) {
      this.postList = await FirebaseService.getPostsById(uid);
      console.log(this.postList);
    },
    goPostDetail: function() {
      this.$store.commit("setPostPopupIndex", 0);
    },
    goPostWrite: function() {
      this.$store.commit("setPostPopupIndex", 2);
    },
    showDetail: function() {
      alert("디테일");
    }
  }
};
</script>

<style>
.postList__header {
  display: flex;
  justify-content: center;
}

.postList__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 260px;
  grid-gap: 20px;
}
</style>
