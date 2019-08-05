<template>
  <div class="Wrapper">
    <PostPopup></PostPopup>

    <div v-on:click="pre" v-bind:class="{hidden : selected == 1}">
      <i class="fas fa-chevron-circle-left fa-2x left"></i>
    </div>
    <div
      class="imageContainer"
      v-bind:style="{'transform': 'translate(-' + (selected)*imgWidth + 'vw, 0px)'}"
    >
      <div class="memberInfo" v-for="member in members">
        <!-- <div class="image" v-bind:style="{ 'background-image': 'url(' + i + ')' }"></div> -->

        <div class="infoHeader">
          <div
            class="profileImgContanier"
            v-bind:style="{ 'background-image': 'url(https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png )' }"
          ></div>
          <div class="introContainer">
            <span class="name">{{member.name}}</span>
            <div class="intro">{{member.intro}}</div>
            <ul class="socialList">
              <li class="socialItem" v-for="social in member.socials">
                <a target="_blank" v-bind:href="social.url">{{social.title}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="infoContent">
          <a class="open-popup">
            <div
              class="page__container"
              @click="togglePopUp"
              v-bind:class="{modalShow : ismodalShow}"
            >
              <a>More</a>
            </div>
          </a>
          <SkillSlider v-bind:skills="member.skills"></SkillSlider>
        </div>
      </div>
    </div>
    <div v-on:click="next" v-bind:class="{hidden : selected == length-2}">
      <i class="fas fa-chevron-circle-right fa-2x right"></i>
    </div>
  </div>
</template>

<script>
import SkillSlider from "./SkillSlider";
import PostPopup from "./Posts/PostPopup";
export default {
  components: {
    SkillSlider,
    PostPopup
  },
  props: ["members"],
  data() {
    return {
      length: this.members.length,
      selected: 1,
      imgWidth: 88.3,
      ismodalShow: this.$store.state.isPostShow
    };
  },
  mounted() {},
  methods: {
    next() {
      if (this.selected == this.length) {
        this.selected = 1;
      } else {
        this.selected = this.selected + 1;
      }
    },
    pre() {
      if (this.selected == 1) {
        this.selected = this.length;
      } else {
        this.selected = this.selected - 1;
      }
    },
    togglePopUp() {
      // this.ismodalShow = !this.ismodalShow;
      this.$store.commit("toggleIsPostShow");
    }
  }
};
</script>

<style>
.Wrapper {
  user-select: none;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  /* overflow: hidden; */
}
.imageContainer {
  padding-top: 50px;
  height: 100%;
  width: 100%;
  display: flex;
  transition: 0.6s;
}
.infoHeader {
  /* background-color: gray; */
  display: grid;
  grid-template-columns: 3fr 7fr;
}
.infoContent {
  position: relative;
  background-color: #f6f6f6;
}
.introContainer {
  padding: 0 20px;
  margin: 50px 0;
  border-left: 3px solid orange;
}
.introContainer .name {
  font-size: 25px;
}
.introContainer .intro {
  margin-top: 8px;
  font-weight: 100;
}
.profileImgContanier {
  background-position: center;
  background-size: cover;
}
.socialList {
  margin-top: 20px;
  list-style: none;
  display: flex;
}

.socialItem {
  margin-right: 20px;
}
.socialItem a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
}

.page__container {
  border: 1px solid rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 45%;
  background-color: #f6f6f6;
  top: -23px;
  font-size: 30px;
  padding: 0 10px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 3;
}
.page__container a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
}

.post-column {
  height: 578px;
}

.memberInfo {
  height: 80%;
  width: 82vw;
  /* background-color: yellowgreen; */
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 0 3vw;

  display: grid;
  grid-template-rows: 4fr 6fr;
}
.memberInfo:first-child {
  /* margin-left: calc(6vw+41px); */
  margin-left: 9vw;
}

.left {
  position: absolute;
  left: 9vw;
  top: 43.5%;
  cursor: pointer;
}

.right {
  position: absolute;
  right: 8.5vw;
  top: 43 0.5%;
  cursor: pointer;
}
svg {
  z-index: 2;
  color: rgba(0, 0, 0, 0.2);
}
.hidden {
  display: none;
}
</style>
