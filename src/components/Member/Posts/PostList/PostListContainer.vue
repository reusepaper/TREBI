<template>
  <div class="postList__wrapper">
    <div class="postList__header">
      <div class="post__title">{{this.$store.state.nowDisplayMember}}님의 Post</div>
      <div class="writeButton" v-if="this.$store.state.userLevel != 'visitor' && this.$store.state.is_login == true">
        <label for="writebtn">글작성</label>
        <input type="button" @click="goPostWrite" id="writebtn" />
      </div>
    </div>
    <!-- <Button @click="goPostDetail">글 상세보기</Button> -->
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
    },
    postList: function() {}
  },
  methods: {
    getPosts: async function() {
      await FirebaseService.getPosts();
    },
    getUId: async function(name) {
      const [result] = await FirebaseService.getUserByName(name);
      this.$store.commit("setNowDisplayMemberInfo", result);
      this.getPostsById(result.uid);
    },
    getPostsById: async function(uid) {
      this.postList = await FirebaseService.getPostsById(uid);
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
.postList__wrapper {
  padding: 30px;
}
.postList__header {
  display: flex;
  justify-content: center;
}

.postList__container {
  margin-top: 3vh;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 260px;
  grid-gap: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.postList__wrapper {
  height: 100vh;
  grid-gap: 60px;
}

.post__title {
  width: 90%;
  color: #524F5A;
  text-align: left;
  font-size: 3vw;
  font-weight: bold;
}

.writeButton label {
  margin-top: 1vh;
  display: inline-block;
  padding: 0.5em 0.75em;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 2px solid #b8b8b8;
  border-radius: 0.25em;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}

.writeButton label:hover {
  background-color: #b8b8b8;
  color: white;
}

.writeButton label:active {
  background-color: #b8b8b8;
  color: white;
}

.writeButton input[type="button"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>