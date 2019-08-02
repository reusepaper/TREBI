<template>
  <div class="tech-slideshow">
    <div class="mover" v-bind:class="{ stop: isHover, running: !isHover }">
      <div
        @mouseleave="mouseLeave"
        @mouseover="mouseover"
        class="skillItem"
        v-for="skill in skills"
      >
        <div class="image-container">
          <div class="image" v-bind:style="{ 'background-image': 'url(' + skill.url + ')' }"></div>
          <div class="skill-title">{{skill.title}}</div>
        </div>

        <div class="skill-desc">{{skill.desc}}</div>
      </div>
      <div
        @mouseleave="mouseLeave"
        @mouseover="mouseover"
        class="skillItem"
        v-for="skill in skills"
      >
        <div class="image-container">
          <div class="image" v-bind:style="{ 'background-image': 'url(' + skill.url + ')' }"></div>
          <div class="skill-title">{{skill.title}}</div>
        </div>
        <div class="skill-desc">{{skill.desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
import { async } from "q";
export default {
  props: ["skills"],
  data() {
    return {
      isHover: false
    };
  },
  methods: {
    mouseover: async function() {
      await setTimeout(() => {}, 500);
      this.isHover = true;
    },
    mouseLeave: function() {
      this.isHover = false;
    }
  }
};
</script>

<style>
.skill-desc {
  /* position: absolute; */
  height: 30px;
  width: 100%;
  top: 0;
  font-size: 18px;
  font-weight: 100;
  z-index: -3;
  transition: 0.5s ease-in-out;
  opacity: 0;
  /* transform: translateY(-20px); */
}
.image-container {
  transition: 0.5s ease-in-out;
  /* transform: translateY(30px); */
  z-index: 2;
}
.skillItem:hover .image-container {
  /* transform: translateY(-30px); */
}
.skillItem:hover .skill-desc {
  transform: translateY(20px);
  opacity: 1;
}
.image {
  height: 65px;
  width: 65px;
  background-size: cover;
  background-position: center center;
  margin: auto;
  padding: 60 50px;
}
.skill-title {
  text-align: center;
}
.skillItem {
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  position: relative;
}
.tech-slideshow {
  height: 100%;

  max-width: 76vw;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.tech-slideshow > div {
  width: 2526px;
  /* position: absolute; */
  top: 0;
  left: 0;
  height: 100%;
  transform: translate3d(0, 0, 0);
}
.mover {
  animation: moveSlideshow 12s linear infinite;
}

.mover {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@keyframes moveSlideshow {
  100% {
    transform: translateX(-50%);
  }
}
@keyframes showSkillDetail {
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.stop {
  animation-play-state: paused;
}
.running {
  animation-play-state: running;
}
</style>
