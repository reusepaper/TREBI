<template>
  <div id="popup-article" class="popup" v-bind:class="{modalShow :this.$store.state.isPostShow}">
    <div
      class="popup__container"
      v-bind:style="{'transform': 'translate(-' + (this.$store.state.PostPopupIndex)*wd + 'vw, 0px)'}"
    >
      <div class="popup__block__postdetail" style="background-color : #EDEDEE;">
        <PostDetailContainer></PostDetailContainer>
      </div>
      <div class="popup__block__postlist" style="background-color : #EDEDEE;">
        <PostListContainer id="postListContainer"></PostListContainer>
      </div>
      <div class="popup__block__postwrite" style="background-color : #EDEDEE;">
        <PostWriteContainer></PostWriteContainer>
      </div>
    </div>
    <div @click="togglePopUp" class="close-container">
      <div class="leftright"></div>
      <div class="rightleft"></div>
      <label class="close">close</label>
    </div>
    <!-- <div @click="togglePopUp" class="popup__close">close</div> -->
  </div>
</template>

<script>
import PostDetailContainer from "../Posts/PostDetail/PostDetailContainer";
import PostListContainer from "../Posts/PostList/PostListContainer";
import PostWriteContainer from "../Posts/PostWrite/PostWriteContainer";
import $ from "jquery";
export default {
  components: {
    PostWriteContainer,
    PostDetailContainer,
    PostListContainer
  },
  data() {
    return {
      wd: 100,
      // posY: null
    };
  },
  mounted: function(){
    this.$store.watch(() => this.$store.getters.getPostShow, ismodalShow => {
      // console.log('watched:', ismodalShow);
      // this.posY = $(window).scrollTop();
      if(ismodalShow) {
        // console.log(this.posY);
        var height = $(window).height();
        height *= 2;
        height += 2;
        window.scrollTo({
          top: height,
          behavior: 'smooth'
        });
        // $("html, body").addClass("not_scroll");
        $("body").css("overflow", "hidden");
        $("#postListContainer").on("mousewheel", function (event) {
          event.stopPropagation();
        });
        $("#popup-article").on("mousewheel", function (event) {
          event.stopPropagation();
        });
      } else{
        // $("html, body").removeClass("not_scroll");
        // posY = $(window).scrollTop(posY);
        var height = $(window).height();
        height *= 2;
        height += 2;
        window.scrollTo({
          top: height
          // behavior: 'smooth'
        });
        $("body").css("overflow", "visible");
        // $("html, body").removeClass("not_scroll");
        // this.posY = $(window).scrollTop(this.posY);
      }
    })
  },
  methods: {
    togglePopUp() {
      // $(".not_scroll").css("top", 'height + "px"');
      this.$store.commit("toggleIsPostShow");
      this.$store.commit("setPostPopupIndex", 1);
      // var height = $(window).height();
      // height *= 2;
      // height += 2;
      // window.scrollTo({
      //   top: height
      //   // behavior: 'smooth'
      // });
      // $("html, body").removeClass("not_scroll");
      // // this.posY = $(window).scrollTop(this.posY);
    }
  }
};
</script>

<style scoped>
.popup {
  width: 100%;
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
  /* background-color: #EDEDEE; */
}

/* .popup__block {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  padding: 50px;
  margin: auto;
  overflow: auto;
  animation: fade 0.5s ease-out 1.3s both;
} */

.popup__block__postdetail {
  height: 100vh !important;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  padding: 50px;
  margin: auto;
  /* overflow: auto; */
  animation: fade 0.5s ease-out 1.3s both;
}

.popup__block__postlist {
  height: 100vh !important;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  padding: 50px;
  margin: auto;
  /* overflow: auto; */
  animation: fade 0.5s ease-out 1.3s both;
}

.popup__block__postwrite {
  height: 100vh !important;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  padding: 50px;
  margin: auto;
  /* overflow: auto; */
  animation: fade 0.5s ease-out 1.3s both;
}

.modalShow {
  display: flex;
}
.popup:before {
  content: "";
  box-sizing: border-box;
  width: 100%;
  background-color: rgb(255, 255, 255);
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
  background-color: rgb(255, 255, 255);

  will-change: width, opacity;
  animation: line-animation 0.6s cubic-bezier(0.83, 0.04, 0, 1.16) both;

  position: absolute;
  top: 45%;
  left: 0;
  margin-top: -1px;
}

.not_scroll{
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.not_scroll .cont {
    position: relative;
    top: 0;
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

/* .popup__close {
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
} */

  .close-container {
    /* position: relative;
    margin: auto; */
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .leftright {
    height: 4px;
    width: 50px;
    position: absolute;
    margin-top: 24px;
    background-color: rgb(107, 107, 107);
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all .3s ease-in;
  }

  .rightleft {
    height: 4px;
    width: 50px;
    position: absolute;
    margin-top: 24px;
    background-color: rgb(107, 107, 107);
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all .3s ease-in;
  }

  label {
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    font-size: .6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all .3s ease-in;
    opacity: 0;
  }

  .close {
    margin: 72px 14px 0 0;
    position: absolute;
  }

  .close-container:hover .leftright {
    transform: rotate(-45deg);
    background-color: rgb(107, 107, 107);
  }

  .close-container:hover .rightleft {
    transform: rotate(45deg);
    background-color: rgb(107, 107, 107);
  }

  .close-container:hover label {
    opacity: 1;
  }

@media (max-width: 769px) {
  .popup__block__postdetail {
    padding: 30px 20px;
  }
  .popup__block__postlist {
    padding: 30px 20px;
  }
  .popup__block__postwrite {
    padding: 30px 20px;
  }
}

</style>
