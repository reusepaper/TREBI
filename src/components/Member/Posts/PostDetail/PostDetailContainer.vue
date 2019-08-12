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
          <div>{{isLike}}</div>
          <div class="icon heart" v-if="isLike" @click="deleteLikePost">
            <FullHeart></FullHeart>
          </div>
          <div class="icon heart" v-else @click="createLikePost">
            <EmptyHeart ></EmptyHeart>
          </div>
          <div class="icon">
            <Bubble></Bubble>
          </div>
          <div class="icon">
            <Share></Share>
          </div>
        </div>
        <div class="comment__input">
          <input class="input" type="text" v-model="comment" @keyup.enter="createComment" placeholder="...comment" />
          <button class="postButton" @click="createComment">입력</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import EmptyHeart from "../Icons/EmptyHeart";
import Bubble from "../Icons/Bubble";
import Share from "../Icons/Share";
import FullHeart from "../Icons/FullHeart";
export default {
  data:{
    comment: "",
    isLike:{
      length: 0
    },
    displayPost: "",
  },
  components: {
    EmptyHeart,
    FullHeart,
    Share,
    Bubble
  },
  methods: {
    goPostList: function() {
      this.$store.commit("setPostPopupIndex", 1);
      this.isLike = null;
    },
    async createComment(){
      if(this.$store.state.user == null){
        await alert("로그인을 해주세요");
        return;
      }
      else if(this.comment == "" || this.comment == undefined) {
        await alert("댓글을 작성해주세요");
        return;
      }
      else{
        // console.log(this.$store.state.nowDisplayPost);
        await FirebaseService.createPostComment(
          this.$store.state.nowDisplayPost.id,
          this.$store.state.user,
          this.comment
        );
      }
      this.comment = await ""
      await alert("등록이 완료되었습니다");
    },
    createLikePost(){
      this.isLike.length = 1;
      FirebaseService.createLikePost(
        this.$store.state.nowDisplayPost.id,
        this.$store.state.user.uid)
    },
    deleteLikePost(){
      this.isLike.length = 0;
      FirebaseService.deleteLikePost(
        this.$store.state.nowDisplayPost.id,
        this.$store.state.user.uid
      )
    },
    async getLikePost(){
      this.isLike = await FirebaseService.getLikePost(
        this.$store.state.nowDisplayPost.id,
        this.$store.state.user.uid
      );
      await console.log(this.isLike);
      // await console.log(this.isLike.length);
    }
  },
  mounted() {
    // this.getLikePost();
    // console.log(this.$store.state.user);
    this.$store.watch(() => this.$store.getters.getNowDisplayPost, n=>{
      console.log(n);
      this.getLikePost();
    })
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
  height: 550px;
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
  cursor: pointer;
}
.post__content {
  background-color: rgb(250, 250, 250);
  height: 552px;
  display: grid;
  grid-template-rows: 1.5fr 1fr 5fr 1fr 0.8fr;
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
.heart{
  cursor: pointer;
}
.comment__input {
  border: none;
  /* width: 100%; */
  /* height: 100%; */
  /* background-color: rgba(0, 0, 0, 0); */
  /* background-color: white; */
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
.input {
  width:85%;
  margin:0px;
  padding: 0px;
  border: none;
  font-size: 16px;
  float:left;
  background-color: #fafafa;
}
.postButton {
  width:10%;
  margin:0px;
  padding: 0px;
  background-color: white;
  border: none;
  border: 1px solid salmon;
  border-radius: 3px;
  padding: 3px 0px;
  color: salmon;
  margin-left: 10px;
  cursor: pointer;
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
  .postlistbtn input[type="button"] {
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
