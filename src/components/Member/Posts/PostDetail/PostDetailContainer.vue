<template>
  <div class="Wrapper">
    <div class="post__header">
      <Button class="go__list" @click="goPostList">글 목록보기</Button>
      <div class="title">PostDetail</div>
    </div>
    <div class="post__contaniner">
      <div
        class="image"
        v-bind:style="{ 'background-image': 'url(' + this.$store.state.nowDisplayPost.image + ')' }"
      ></div>
      <div class="post__content">
        <div class="content__header">
          <div
            v-if="this.$store.state.nowDisplayMemberInfo.photoURL !== null"
            class="avatar"
            v-bind:style="{ 'background-image': 'url(' + this.$store.state.nowDisplayMemberInfo.photoURL + ')' }"
          ></div>
          <div class="writer">{{this.$store.state.nowDisplayPost.postWriter}}</div>
        </div>
        <div class="title">{{this.$store.state.nowDisplayPost.title}}</div>
        <div class="content">{{this.$store.state.nowDisplayPost.content}}</div>
        <!-- <div class="comment__container"></div> -->
        <div class="meta">
          <div class="icon">
            <Heart></Heart>
          </div>
          <div class="icon">
            <Bubble></Bubble>
          </div>
          <div class="icon">
            <Share></Share>
          </div>
        </div>
        <div class="comment__input">
          <input class="input" type="text" placeholder="...comment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyHeart from "../Icons/EmptyHeart";
import Bubble from "../Icons/Bubble";
import Share from "../Icons/Share";
import FullHeart from "../Icons/FullHeart";
export default {
  components: {
    EmptyHeart,
    FullHeart,
    Share,
    Bubble
  },
  methods: {
    goPostList: function() {
      this.$store.commit("setPostPopupIndex", 1);
    }
  },
  mounted() {
    console.log(this.$store.state.user);
  }
};
</script>

<style scoped>
.Wrapper {
  margin: 0;
  width: 100%;
  /* background-color: aquamarine; */
}

.image {
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
}

.post__header {
  display: flex;
  justify-content: center;
}
.post__header .title {
  font-size: 22px;
}
.go__list {
  position: absolute;
  align-self: center;
  left: 50px;
  background-color: rgb(250, 250, 250);
  padding: 4px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
.post__content {
  background-color: rgb(250, 250, 250);
  display: grid;
  grid-template-rows: 2fr 1fr 5fr 1fr 1fr;
}

.post_title {
  width: 50vw;
  text-align: left;
}
.postlist__show {
  width: 50vw;
  text-align: right;
}

.content__header {
  display: flex;
  align-items: center;
  /* border: 1px solid rgba(0, 0, 0, 0.6); */
  padding: 10px;
}

.content__header .avatar {
  margin-right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}

.content__header .writer {
  font-weight: 400;
  font-size: 24px;
}
.post__contaniner {
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-auto-rows: minmax(550px, 1fr);
}
.title,
.content {
  padding: 10px;
}
.title {
  font-size: 22px;
}
.content {
  font-weight: lighter;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.comment__container {
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.meta {
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
}
.meta .icon {
  margin-right: 10px;
}
.comment__input {
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
.comment__input .input {
  border: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}
.input:focus {
  outline: none;
}

@media (max-width: 768px) {
  .Wrapper {
    margin: 0;
  }
  .post__contaniner {
    grid-template-columns: none;
    grid-template-rows: 4fr 6fr;
  }
  .post__content {
    grid-template-rows: 0.5fr 0.5fr 3fr 0.5fr 0.5fr;
  }
  .content__header {
    padding: 5px;
  }
  .content__header .writer {
    font-size: 18px;
  }
  .title {
    font-size: 18px;
  }
  .content__header .avatar {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .go__list {
    left: 20px;
  }
}
</style>
