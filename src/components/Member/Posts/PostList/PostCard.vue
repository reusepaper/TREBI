<template>
  <div class="post__container" @click="goPostDetail">
    <div class="post__image" v-bind:style="{ 'background-image': 'url(' + this.post.image + ')' }"></div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    goPostDetail: function() {
      this.$store.commit("setPostPopupIndex", 0);
      this.$store.commit("setNowDisplayPost", this.post);
    }
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
</style>
