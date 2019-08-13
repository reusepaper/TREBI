<template>
  <div class="postList__wrapper">
    <div class="postList__header">
      <Button
        class="go__write"
        v-if="this.$store.state.userLevel != 'visitor' && this.$store.state.is_login == true"
        @click="goPostWrite"
      >글작성</Button>
      <div class="post__title">{{this.$store.state.nowDisplayMember}}님의 Post</div>
    </div>
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
import { setInterval } from "timers";

// $("#ModalPopup").on("mousewheel", function (event) {
//   event.stopPropagation();
// });

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
    // getPosts: async function() {
    //   await FirebaseService.getPosts();
    // },
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
  /* padding: 30px; */
}
.postList__header {
  display: flex;
  justify-content: center;
}
.post__title {
  padding: 10px;
  font-size: 1.5em;
}
.go__write {
  position: absolute;
  left: 50px;
  align-self: center;
  background-color: rgb(250, 250, 250);
  padding: 4px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  cursor: pointer;
}
.postList__container {
  margin-top: 3vh;
  height: 70vh;
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

@media (max-width: 768px) {
  .go__write {
    left: 20px;
  }
  .post__title {
    font-size: 22px;
  }
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background-color: #919191;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
