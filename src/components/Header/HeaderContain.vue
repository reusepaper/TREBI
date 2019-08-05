<template>
  <div id="fullscreen">
    <div class="navbar">
      <a href="#" v-on:click="moveTREBI()" class="brand">TREBI</a>
      <!-- show pc screen -->
      <div id='pc-menu'>
        <ul>
          <li><a href="#" v-on:click="moveTeam()" class="nav-menu">Team</a></li>
          <li><a href="#" v-on:click="moveMember()" class="nav-menu">Member</a></li>
          <li><a href="#" v-on:click="movePost()" class="nav-menu">Post</a></li>
          <li><a href="#" v-on:click="moveGitGraph()" class="nav-menu">GitGraph</a></li>
          <li><a href="#" v-on:click="moveContact()" class="nav-menu">Contact</a></li>
          <li><a href="#" v-on:click="moveLogin()" class="nav-menu">Login</a></li>
        </ul>
      </div>
      <!-- show mobile&tablet screen -->
      <div id='mobile-menu'>
        <input type="checkbox" id="overlay-input" v-model="sidebar"/>
        <label for="overlay-input" id="overlay-button">
          <span></span>
        </label>
        <!-- <div id="overlay">
          <ul>
            <li><a href="#">Team</a></li>
            <li><a href="#">Member</a></li>
            <li><a href="#">Post</a></li>
            <li><a href="#">GitGraph</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div> -->
      </div>
    </div>
    
    <div id="overlay" v-show="this.$store.getters.getNavbarState === true">
      <ul>
        <li><a href="#" v-on:click="moveTeam()" class="mobile-nav-menu">Team</a></li>
        <li><a href="#" v-on:click="moveMember()" class="mobile-nav-menu">Member</a></li>
        <li><a href="#" v-on:click="movePost()" class="mobile-nav-menu">Post</a></li>
        <li><a href="#" v-on:click="moveGitGraph()" class="mobile-nav-menu">GitGraph</a></li>
        <li><a href="#" v-on:click="moveContact()" class="mobile-nav-menu">Contact</a></li>
        <li><a href="#" v-on:click="moveLogin()" class="mobile-nav-menu">Login</a></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import $ from 'jquery';
import { setTimeout } from 'timers';
import { async } from 'q';

export default {
  name: "HeaderContain",
  mounted: function() {
    $('.nav-menu').click(function(e){
      e.preventDefault();
    }),
    $('.mobile-nav-menu').click(function(e){
      e.preventDefault();
    })
  },
  computed: {
    sidebar: {
      set(value) {
        this.$store.commit('setNavbarState', value)
        // console.log(this.$store.state.navbarstate);
      }
    }
  },
  methods: {
    moveTREBI: async function(){
      await this.$store.commit('setNavbarState', false);
      $("#overlay-input").prop("checked", false);
      // var scrollPosition = $().offset().top;
      // $("body").animate({
      //   scrollTop: scrollPosition
      // }, 500);
      // $(window).screenTop(0);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    moveTeam: async function(){
      // this.$store.commit('setNavbarState', false);
      // $("#overlay-input").prop("checked", false);
      await this.$store.commit('setNavbarState', false);
      $("#overlay-input").prop("checked", false);
      var height = $(window).height();
      height += 1;
      // $(window).screenTop(height);
      window.scrollTo({
        top: height,
        behavior: 'smooth'
      });
    },
    moveMember: async function(){
      await this.$store.commit('setNavbarState', false);
      $("#overlay-input").prop("checked", false);
      var height = $(window).height();
      height *= 2;
      height += 2;
      window.scrollTo({
        top: height,
        behavior: 'smooth'
      });
    },
    movePost: function(){

    },
    moveGitGraph: async function(){
      await this.$store.commit('setNavbarState', false);
      $("#overlay-input").prop("checked", false);
      // var scrollPosition = $('.${this.page4}').offset().top;
      // $("body").animate({
      //   scrollTop: scrollPosition
      // }, 500);
      var height = $(window).height();
      height *= 3;
      height += 3;
      window.scrollTo({
        top: height,
        behavior: 'smooth'
      });
    },
    moveContact: async function(){
      await this.$store.commit('setNavbarState', false);
      $("#overlay-input").prop("checked", false);
      // var scrollPosition = $('.${this.page5}').offset().top;
      // $("body").animate({
      //   scrollTop: scrollPosition
      // }, 500);
      var height = $(window).height();
      height *= 4;
      height += 4;
      window.scrollTo({
        top: height,
        behavior: 'smooth'
      });
    },
    moveLogin: function(){

    }
  }
}
</script>

<style scoped>
  .navbar{
    position: fixed;
    /* top:0; */
    width: 100%;
    height: 10vh;
    padding: 0 10vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;
    z-index: 2;
  }
  .navbar ul {
    margin:0;
    padding:0;
    display:flex;
  }
  .navbar ul li{
    list-style: none;
  }
  .navbar ul li a, .navbar a{
    color: #fff;
    padding: 0 20px;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: bold;
    font-family: Ubuntu;
    transition: 1s ease;
  }
  /* .navbar ul li:hover{
    border: 0.5px solid #fff;
    transform: rotateY(360deg);
  } */
  .navbar ul li:hover a{
    color:salmon;
  }

  a.brand {
    font-family: Ubuntu;
    font-size:1.8em;
    color:#fff;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 
      1px 1px 1px #222222, 
      -1px 1px 1px #222222, 
      1px -1px 1px #222222, 
      -1px -1px 1px #222222,
      1px  1px 1px #555555;
  }

  a.brand, a.nav-menu {
    text-shadow: 
      1px 1px 1px #222222, 
      -1px 1px 1px #222222, 
      1px -1px 1px #222222, 
      -1px -1px 1px #222222,
      1px  1px 1px #555555;
  }

  /* mobile css */

  #overlay-button {
    /* position: absolute;
    right: 2em; */
    z-index: 9999;
    cursor: pointer;
    user-select: none;
  }
  #overlay-button span {
    height: 4px;
    width: 35px;
    border-radius: 2px;
    background-color: white;
    position: relative;
    display: block;
    transition: all .2s ease-in-out;
    z-index: 9999;
  }
  #overlay-button span:before {
    top: -10px;
    visibility: visible;
  }
  #overlay-button span:after {
    top: 10px;
  }
  #overlay-button span:before, #overlay-button span:after {
    height: 4px;
    width: 35px;
    border-radius: 2px;
    background-color: white;
    position: absolute;
    content: "";
    transition: all .2s ease-in-out;
  }
  #overlay-button:hover span, #overlay-button:hover span:before, #overlay-button:hover span:after {
    background: salmon;
  }

  input[type=checkbox] {
    display: none;
  }

  /* input[type=checkbox]:checked ~ #overlay {
    visibility: visible;
  } */

  input[type=checkbox]:checked ~ #overlay-button:hover span, input[type=checkbox]:checked ~ #overlay-button span {
    background: transparent;
  }
  input[type=checkbox]:checked ~ #overlay-button span:before {
    transform: rotate(45deg) translate(7px, 7px);
    opacity: 1;
  }
  input[type=checkbox]:checked ~ #overlay-button span:after {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  #overlay {
    height: 100vh;
    width: 100%;
    background: #524F5A;
    z-index: 1;
  }

  #overlay ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    padding-left: 0;
    list-style-type: none;
  }
  #overlay ul li {
    padding: 1em;
  }
  #overlay ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
  }
  #overlay ul li a:hover {
    color: salmon;
  }

  /* pc screen */
  @media screen and (min-width: 992px) {
    #pc-menu {
      display: flex;
    }
    #mobile-menu {
      display: none;
    }
    #overlay {
      display: none;
    }
  }

  @media screen and (max-width: 991px) {
    #pc-menu {
      display: none;
    }
    #mobile-menu {
      display: inline-block;
    }
  }
</style>
