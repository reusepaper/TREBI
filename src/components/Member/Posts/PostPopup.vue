<template>
  <div id="popup-article" class="popup" v-bind:class="{modalShow :this.$store.state.isPostShow}">
    <div
      class="popup__container"
      v-bind:style="{'transform': 'translate(-' + (this.$store.state.PostPopupIndex)*100   + 'vw, 0px)'}"
    >
      <div class="popup__block" style="background-color : #EDEDEE;">
        <PostDetailContainer></PostDetailContainer>
      </div>
      <div class="popup__block" style="background-color : #EDEDEE;">
        <PostListContainer></PostListContainer>
      </div>
      <div class="popup__block" style="background-color : #EDEDEE;">
        <PostWriteContainer></PostWriteContainer>
      </div>
    </div>
    <div @click="togglePopUp" class="popup__close">close</div>
  </div>
</template>

<script>
import PostDetailContainer from "../Posts/PostDetail/PostDetailContainer";
import PostListContainer from "../Posts/PostList/PostListContainer";
import PostWriteContainer from "../Posts/PostWrite/PostWriteContainer";

export default {
  components: {
    PostWriteContainer,
    PostDetailContainer,
    PostListContainer
  },
  data() {
    return {
      width: 100
    };
  },
  methods: {
    togglePopUp() {
      this.$store.commit("toggleIsPostShow");
      this.$store.commit("setPostPopupIndex", 1);
    }
  }
};
</script>

<style>
.popup {
  width: 100%;
  height: 100vh;
  display: none;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
}
.popup__container {
  display: flex;
  /* transform: translate3d(-100vw, 0px, 0px); */
  transition: 0.3s ease-in-out;
}

.popup__block {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  padding: 50px;
  margin: auto;
  overflow: auto;
  animation: fade 0.5s ease-out 1.3s both;
}
.modalShow {
  display: flex;
}
.popup:before {
  content: "";
  box-sizing: border-box;
  width: 100%;
  background-color: white;

  position: fixed;
  left: 0;
  top: 45%;
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
  top: 45%;
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
