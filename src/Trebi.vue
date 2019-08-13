<template>
  <div>
    <Header class="page-header"></Header>
    <div
      v-show="(((this.$store.getters.getNavbarState === true) && (window.width <= 991))) === false"
    >
      <Main class="page"></Main>
      <Team class="page"></Team>
      <Member class="page"></Member>
      <GitGraph class="page"></GitGraph>
      <Footer class="page"></Footer>
    </div>
    <chat></chat>
  </div>
</template>
<script>
import Header from "./views/Header.vue";
import Main from "./views/Main";
// import Main_copy from "./views/Main_copy";
import Team from "./views/Team";
import Member from "./views/Member";
import GitGraph from "./views/GitGraph";
import Footer from "./views/Footer";
import chat from "./components/Footer/ChatbotComponents/slackChatWebhook";
import $ from "jquery";

export default {
  name: "Trebi",
  components: {
    Main,
    // Main_copy,
    Team,
    Member,
    GitGraph,
    Footer,
    Header,
    chat
  },
  data() {
    return {
      window: {
        width: 0
      },
      x: null,
      y: null,
      nowX: null,
      nowY: null,
      subX: null,
      subY: null,
      bStartEvent: false,
      bMoveEvent: false,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  mounted: function() {
    this.$store.commit("setNowDisplayMember", "이주호");
    this.$store.commit("setNowDisplayMemberIndex", 1);

    $(".page").each(function() {
      $(this).on("mousewheel DOMMouseScroll", function(event) {
        event.preventDefault();

        var delta = 0;
        var moveTop = $(window).scrollTop();
        var pageMax = $(".page").length - 1;
        var winEvent = "";
        if (!winEvent) {
          winEvent = window.event;
        }
        if (winEvent.wheelDelta) {
          delta = winEvent.wheelDelta / 120;
          if (window.opera) {
            delta = -delta;
          }
        } else if (winEvent.detail) {
          delta = -winEvent.detail / 3;
        }
        if (delta < 0) {
          if ($(this).index() <= pageMax) {
            if ($(this).next() != undefined) {
              moveTop = $(this)
                .next()
                .offset().top;
            }
          }
        } else {
          if ($(this).index() > 0) {
            if ($(this).prev() != undefined) {
              moveTop = $(this)
                .prev()
                .offset().top;
            }
          }
        }

        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: moveTop + "px"
            },
            {
              duration: 800,
              complete: function() {}
            }
          );
      });
      $(this).on("touchstart", function(event){
        this.x = event.touches[0].clientX;
        this.y = event.touches[0].clientY;
        this.bStartEvent = true;
      })
      $(this).on("touchmove", function(event){
        if(!this.bStartEvent){
          this.x = null;
          this.y = null;
          return;
        }
        this.nowX = event.touches[0].clientX;
        this.nowY = event.touches[0].clientY;
        this.bMoveEvent = true;
      })
      
      $(this).on("touchend", function(event){
        if(this.bStartEvent && !this.bMoveEvent){

        }
        else{
          this.subX = this.x - this.nowX;
          this.subY = this.y - this.nowY;
          // console.log("end:", this.subX, this.subY);
          if(Math.abs(this.subY) > Math.abs(this.subX)){
            event.preventDefault();

            var delta = 0;
            var moveTop = $(window).scrollTop();
            var pageMax = $(".page").length - 1;
            var winEvent = "";
            if (!winEvent) {
              winEvent = window.event;
            }
            if (winEvent.wheelDelta) {
              delta = winEvent.wheelDelta / 120;
              if (window.opera) {
                delta = -delta;
              }
            } else if (winEvent.detail) {
              delta = -winEvent.detail / 3;
            }
            if (this.subY > 0) {
              if ($(this).index() <= pageMax) {
                if ($(this).next() != undefined) {
                  moveTop = $(this)
                    .next()
                    .offset().top;
                }
              }
            } else {
              if ($(this).index() > 0) {
                if ($(this).prev() != undefined) {
                  moveTop = $(this)
                    .prev()
                    .offset().top;
                }
              }
            }

            $("html, body")
              .stop()
              .animate(
                {
                  scrollTop: moveTop + "px"
                },
                {
                  duration: 800,
                  complete: function() {}
                }
              );
          }
        }
        this.x = null;
        this.y = null;
        this.nowX = null;
        this.nowY = null;
        this.subX = null;
        this.subY = null;
        this.bStartEvent = false;
        this.bMoveEvent = false;

      })
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  },
  watch: {}
};
</script>
<style scoped>
div {
  width: 100%;
  overflow: hidden;
}

div .page {
  width: 100%;
  height: 100vh;
  position: relative;
}

div .page-header {
  width: 100%;
  position: relative;
}
</style>