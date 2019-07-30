<template>
  <div class="member-list">
    <div class="member-contents-contain">
      <div class="member-contents">
        <input type="image" v-for="(member, index) in members"
          :key="index"
          :src="member.member_image_src"
          class="cliped">
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      members: [
        { 'member_image_src' : require('../../assets/goubook1.png'), 'member_contents' : '꼬부기1'},
        { 'member_image_src' : require('../../assets/hesee.jpg'), 'member_contents' : '이상해씨1'},
        { 'member_image_src' : require('../../assets/pikachu.jpg'), 'member_contents' : '피카츄1'},
        { 'member_image_src' : require('../../assets/togepi.jpg'), 'member_contents' : '토게피1'},
        { 'member_image_src' : require('../../assets/jammanbo.jpg'), 'member_contents' : '잠만보1'},
        { 'member_image_src' : require('../../assets/goubook1.png'), 'member_contents' : '꼬부기2'},
        { 'member_image_src' : require('../../assets/hesee.jpg'), 'member_contents' : '이상해씨2'},
        { 'member_image_src' : require('../../assets/pikachu.jpg'), 'member_contents' : '피카츄2'},
        { 'member_image_src' : require('../../assets/togepi.jpg'), 'member_contents' : '토게피2'},
        { 'member_image_src' : require('../../assets/jammanbo.jpg'), 'member_contents' : '잠만보2'},
        { 'member_image_src' : require('../../assets/goubook1.png'), 'member_contents' : '꼬부기3'},
        { 'member_image_src' : require('../../assets/hesee.jpg'), 'member_contents' : '이상해씨3'},
        { 'member_image_src' : require('../../assets/pikachu.jpg'), 'member_contents' : '피카츄3'},
        { 'member_image_src' : require('../../assets/togepi.jpg'), 'member_contents' : '토게피3'},
        { 'member_image_src' : require('../../assets/jammanbo.jpg'), 'member_contents' : '잠만보3'}
      ]
    }
  }
};
</script>

<style scoped>
  .cliped {
    clip-path: circle();
    width: 10vw;
  }

  .member-contents {
    border: 2px solid #AAAAAA;
    border-radius: 10px;
    padding: 1vw;
    margin: auto;
    background: #FFFFFF;
    height: 70vh;
    width: 80vw;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  .member-contents-contain {
    margin-top: 3vh;
  }
</style>
