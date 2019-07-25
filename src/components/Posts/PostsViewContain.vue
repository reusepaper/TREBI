<template>
  <div class="postsContents">
    <div class="tail"></div>
    <ul class="post-list">
      <li v-for="post in posts">
        <span @click="showModal = true" v-bind:id="post.id" class="post-title">{{post.title}}</span>
      </li>
    </ul>
    <PostDetailModal v-if="showModal" @close="showModal = false">
      <template v-slot:image-slider>
        <ImageSlider v-bind:images="images"></ImageSlider>
      </template>
      <template v-slot:post-header>heaer</template>
      <template v-slot:post-content>content</template>
      <template v-slot:post-commentList>commentList</template>
      <template v-slot:post-meta>meta</template>
      <template v-slot:post-Input>input</template>
    </PostDetailModal>
  </div>
</template>

<script>
import PostDetailModal from "./PostDetailModal";
import ImageSlider from "./PostDetailModalComponents/ImageSlider";
export default {
  components: {
    PostDetailModal,
    ImageSlider
  },
  data() {
    return {
      posts: [
        { id: 1, title: "첫글입니당" },
        { id: 2, title: "두번째글입니당" },
        { id: 3, title: "네번째글입니당" },
        { id: 4, title: "다섯번째글입니당" },
        { id: 5, title: "여섯째글입니당" },
        { id: 6, title: "일곱번째글입니당" }
      ],
      showModal: false,
      images: [
        "http://img.danawa.com/prod_img/500000/004/326/img/7326004_1.jpg?shrink=500:500&_v=20190225170224",
        "https://pbs.twimg.com/profile_images/963703299298934784/x08DxCyG_400x400.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOe7EqJM_SaiWVp_Kauif-tslGyQJy43_lSdZaIYibrtAlQfF",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_1bNYKvV-3eMx0rB83A0wjhAgCR0J_MDjbXxAaNi9cVnVT3AZA"
      ]
    };
  }
};
</script>

<style>
.postsContents {
  margin-top: 20px;
  box-shadow: 10px 10px 5px grey;
  background-color: white;
  border-radius: 1%;
  transition: 0.1s linear;
}
.postsContents:hover {
  box-shadow: 5px 5px 0 grey;
}
.postsContents .tail {
  width: 0px;
  height: 0px;
  border-top: 50px solid none;
  border-bottom: 50px solid white;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
  position: relative;
  bottom: 24px;
  left: 65px;
}
.post-list {
  border-top: 2px solid rgba(0, 0, 0, 0.6);
  border-bottom: 2px solid rgba(0, 0, 0, 0.6);
  list-style: none;
  margin: 0px 20px;
}
.post-list li {
  padding: 10px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.post-list li:last-child {
  border-bottom: none;
}
.post-list .post-title {
  cursor: pointer;
  transition: 0.1s linear;
  font-weight: lighter;
}
.post-list .post-title:hover {
  color: rgba(0, 0, 0, 0.3);
}
</style>
