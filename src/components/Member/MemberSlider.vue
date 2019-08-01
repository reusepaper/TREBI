<template>
  <div class="Wrapper">
    <div id="popup-article" class="popup">
      <div class="popup__block">
        <h1 class="popup__title">The my adventure in the France and photography with Tour De France</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque optio vitae in explicabo recusandae sit id sapiente excepturi tempore, nemo, nulla odio deleniti rerum nisi perferendis aut molestias! Incidunt nesciunt iusto praesentium! In at maiores quibusdam enim quis, quam!</p>
        <p>Architecto magni dolores cumque tenetur nemo id aperiam, ratione temporibus at, consectetur totam, fuga et illo rerum earum dicta. Vitae ullam harum enim aliquid hic commodi voluptas cumque iste ex accusantium architecto doloremque reprehenderit, asperiores vero dolor, esse inventore dolorem.</p>
        <p>Excepturi eaque, reprehenderit dolores, cum molestias repellendus in expedita. Placeat totam, quos pariatur quidem explicabo id harum ab voluptatum. Necessitatibus, aliquam! Dolorum voluptatem ut laudantium excepturi cumque, hic iure impedit ullam accusantium error natus recusandae, quia fuga quo voluptates officiis?</p>
        <p>Dignissimos debitis eos necessitatibus accusantium natus voluptates illo blanditiis corporis minus. Repudiandae libero quae, illo error expedita consectetur possimus voluptate eum esse quam molestiae tempore dignissimos ipsam similique ab quod. Ea earum adipisci rem voluptatem aliquid voluptatum deleniti necessitatibus provident.</p>
        <p>Dicta eum amet impedit maiores accusamus numquam saepe necessitatibus temporibus ut! Velit ducimus repellendus fuga repudiandae culpa voluptatibus delectus praesentium totam odit ratione, tenetur assumenda, labore esse et nostrum a, aut veritatis. Nihil, voluptas, impedit? Magnam dolorum, iure repellendus vitae.</p>
        <p>Temporibus voluptatum voluptatibus iste, nam atque dignissimos quam labore sequi adipisci tempore exercitationem quos, libero, reprehenderit facere quasi soluta, itaque at eum cum possimus! Facilis, tempora soluta at quis. Nemo expedita voluptate esse nam ex odit, sequi eveniet quibusdam, dolores?</p>
        <p>Praesentium laboriosam iste dolore cumque voluptatibus deleniti quia, delectus provident, illum aperiam, atque molestiae. Cum delectus, doloribus expedita eius veritatis assumenda deleniti veniam reprehenderit animi ut, eaque asperiores, dicta incidunt omnis repellendus dolorum enim inventore rerum voluptatem saepe error id.</p>
        <a href="/" class="popup__close">close</a>
      </div>
    </div>

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
          <div class="page__container">
            <a href="#popup-article" class="open-popup">More</a>
          </div>
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
export default {
  components: {
    SkillSlider
  },
  props: ["members"],
  data() {
    return {
      length: this.members.length,
      selected: 1,
      imgWidth: 88.3
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
      console.log(this.selected);
    },
    pre() {
      if (this.selected == 1) {
        this.selected = this.length;
      } else {
        this.selected = this.selected - 1;
      }
      console.log(this.selected);
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
  left: 5px;
  top: 50%;
  cursor: pointer;
}

.right {
  position: absolute;
  right: 5px;
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

/* button modal popup style */

/*
P.S: if you like my content maybe you will become a donator and donate some money? That helps me to create new awesome materials. https://www.paypal.me/melnik909
*/

/* popup */

.popup {
  width: 100%;
  height: 100vh;
  display: none;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
}

#popup-article:target {
  display: flex;
}

.popup:before {
  content: "";
  box-sizing: border-box;
  width: 100%;
  background-color: white;

  position: fixed;
  left: 0;
  top: 50%;
  will-change: height, top;
  animation: open-animation 0.6s cubic-bezier(0.83, 0.04, 0, 1.16) 0.65s both;
}

.popup:after {
  content: "";
  width: 0;
  height: 2px;
  background-color: white;

  will-change: width, opacity;
  animation: line-animation 0.6s cubic-bezier(0.83, 0.04, 0, 1.16) both;

  position: absolute;
  top: 52%;
  left: 0;
  margin-top: -1px;
}

@keyframes line-animation {
  0% {
    width: 0;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }

  99% {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }

  100% {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
  }
}

@keyframes dot-animation {
  0% {
    width: 100%;
    opacity: 0;
  }
  1% {
    width: 100%;
    opacity: 1;
  }

  100% {
    width: 0;
    opacity: 1;
  }
}
@keyframes open-animation {
  0% {
    height: 0;
    top: 50%;
  }

  100% {
    height: 100vh;
    top: 0;
  }
}

.popup__block {
  height: calc(100vh - 40px);
  padding: 5% 15%;
  box-sizing: border-box;
  position: relative;

  margin: auto;
  overflow: auto;
  animation: fade 0.5s ease-out 1.3s both;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.popup__title {
  font-size: 2.5rem;
  margin: 0 0 1em;
}

.popup__close {
  width: 3.2rem;
  height: 3.2rem;
  text-indent: -9999px;
  position: fixed;
  top: 20px;
  right: 20px;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);
}
</style>
