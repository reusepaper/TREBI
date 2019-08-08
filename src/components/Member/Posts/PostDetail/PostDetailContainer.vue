<template>
  <div class="Wrapper">
    <div class="post__header">
      <h1>PostDetail</h1>
      <Button @click="goPostList">글 목록보기</Button>
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
  height: 100%;
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
  justify-content: space-between;
}
.post__content {
  background-color: white;
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
</style>
