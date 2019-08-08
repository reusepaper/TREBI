<template>
  <div class="Wrapper">
    <div class="post__header">
      <div class="post__title">
        PostDetail
      </div>
      <div class="postlist__show">
        <div class="postlistbtn">
          <label for="showlist">목록보기</label>
          <input type="button" @click="goPostList" id="showlist" />
        </div>
      </div>
      <!-- <Button @click="goPostList">글 목록보기</Button> -->
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
        <div class="meta"></div>
      </div>
    </div>
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
  width: 100%;
}
.post__content {
  background-color: white;
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


.postlistbtn label {
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

.postlistbtn label:hover {
  background-color: #b8b8b8;
  color: white;
}

.postlistbtn label:active {
  background-color: #b8b8b8;
  color: white;
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
