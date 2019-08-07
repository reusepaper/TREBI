<template>
  <!-- <full-page ref="fullpage" :options="options" id="fullpage">
    <Header></Header>
    <div class="section">
      <Main_copy></Main_copy>
    </div>
    <div class="section">
      <Main></Main>
    </div>
    <div class="section">
      <div class="teampageContain">
        <Team></Team>
      </div>
    </div>
    <div class="section">
      <Member></Member>
    </div>
    <div class="section">
      <div class="GraphPageContain">
        <GitGraph></GitGraph>
      </div>
    </div>
    <div class="section">
      <Footer></Footer>
  </div>-->
  <!-- </full-page> -->
  <div>
    <Header class="page-header"></Header>
    <!-- <Main_copy class="page"></Main_copy> -->
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
      }
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