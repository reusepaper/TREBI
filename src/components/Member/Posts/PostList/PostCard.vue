<template>
  <div class="post__container" @click="goPostDetail">
    <div class="post__image" v-bind:style="{ 'background-image': 'url(' + this.post.image + ')' }"></div>
    <div class="overlay"></div>
    <div class="icon__container">
      <div class="like__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path
            d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
          />
        </svg>
        <div class="like__count">{{likeCount}}</div>
      </div>
      <div class="comment__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path
            d="M12 1c-6.627 0-12 4.364-12 9.749 0 3.131 1.817 5.917 4.64 7.7.868 2.167-1.083 4.008-3.142 4.503 2.271.195 6.311-.121 9.374-2.498 7.095.538 13.128-3.997 13.128-9.705 0-5.385-5.373-9.749-12-9.749z"
          />
        </svg>
        <div class="comment__count">{{commentCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "../../../../services/FirebaseService";
import EmptyHeart from "../Icons/EmptyHeart";
import Bubble from "../Icons/Bubble";
import { async } from "q";
export default {
  props: ["post"],
  data() {
    return {
      commentCount: 0,
      likeCount: 0
    };
  },
  methods: {
    goPostDetail: function() {
      this.$store.commit("setPostPopupIndex", 0);
      this.$store.commit("setNowDisplayPost", this.post);
    },
    getCounts: async function() {
      const comments = await FirebaseService.getCommentPost(this.post.id);
      this.commentCount = comments.length;
      const likes = await FirebaseService.getLikePost(this.post.id);
      this.likeCount = likes.length;
    }
  },
  mounted() {
    this.getCounts();
  },
  beforeUpdate() {
    this.getCounts();
  },
  components: {
    Bubble,
    EmptyHeart
  }
};
</script>

<style>
.post__container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.post__image {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: 0.2s ease-in-out;
}
.post__container:hover .post__image {
  transform: perspective(100px) translate3d(0px, 0px, 5px);
}
.post__container:hover .overlay {
  opacity: 0.4;
}
.icon__container {
  display: flex;
  width: 100%;
}
.like__container,
.comment__container {
  margin-right: 15px;
  display: flex;
  align-items: center;
}
.like__count,
.comment__count {
  margin-left: 5px;
  color: white;
  font-size: 20px;
}
.post__container:hover .icon__container {
  opacity: 1;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  transition: 0.2s ease-in;
  cursor: pointer;
}
.icon__container {
  position: absolute;
  top: 50%;
  left: 40%;
  opacity: 0;
  transition: 0.2s ease-in;
}
</style>
