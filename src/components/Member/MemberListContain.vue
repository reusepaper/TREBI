<template>
  <div class="member-list">
    <div class="member-contents-contain">
      <div v-on:click="pre">
        <i class="fas fa-chevron-circle-left fa-2x left"></i>
      </div>
      <!-- v-bind:style="{'transform': 'translate(-' + (selected-1)*100 + 'vw, 0)'}" -->
      <transition name="fade" mode="out-in">
        <div class="member-contents-wrapper" v-for="number in [currentNumber]" :key="number">
          <div class="member-contents">
            <img :src="members[Math.abs(currentNumber)%members.length].member_image_src" class="cliped">
            {{ members[Math.abs(currentNumber)%members.length].member_contents }}
            <!-- <input type="image" v-for="(member, index) in members"
              :key="index"
              :src="member.member_image_src"
              class="cliped"> -->
          </div>
        </div>
      </transition>
      <div v-on:click="next">
        <i class="fas fa-chevron-circle-right fa-2x right"></i>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      currentNumber: 0,
      selected: 1,
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
  },
  methods: {
    pre(){
      this.currentNumber -= 1;
    },
    next() {
      this.currentNumber += 1;
    }
  }
};
</script>

<style scoped>
  .cliped {
    clip-path: circle();
    width: 10vw;
  }
    
  .member-contents-contain {
    margin-top: 3vh;
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
    overflow: hidden;
  }

  .member-contents-wrapper{    
    display: flex;
    transition: 0.6s;
  }

  .left {
    position: absolute;
    left: 3vw;
    top: 50%;
    cursor: pointer;
  }

  .right {
    position: absolute;
    right: 3vw;
    top: 50%;
    cursor: pointer;
  }

  svg {
    z-index: 2;
    color: rgba(0, 0, 0, 0.2);
  }
  .hidden {
    display: none;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
