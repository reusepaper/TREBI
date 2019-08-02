<template>
  <div class="tech-slideshow">
    <div class="mover" v-bind:class="{ stop: isHover, running: !isHover }">
      <div
        @mouseleave="mouseLeave"
        @mouseover="mouseover"
        class="skillItem"
        v-for="skill in skills"
      >
        <div class="image" v-bind:style="{ 'background-image': 'url(' + skill.url + ')' }"></div>
        <div class="skill-title">{{skill.title}}</div>
      </div>
      <div
        @mouseleave="mouseLeave"
        @mouseover="mouseover"
        class="skillItem"
        v-for="skill in skills"
      >
        <div class="image" v-bind:style="{ 'background-image': 'url(' + skill.url + ')' }"></div>
        <div class="skill-title">{{skill.title}}</div>
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
.image {
  height: 65px;
  width: 65px;
  background-size: cover;
  background-position: center center;
  margin: auto;
}
.skill-title {
  text-align: center;
}
.skillItem {
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  margin: 0 50px;
}
.skillItem:hover {
  /* transform: scale(1.5); */
  /* transform: perspective(500px) rotateY(360deg); */
  transform: translate3D(0px, -80px, 0px);
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
  /* animation: moveSlideshow 12s linear infinite; */
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
