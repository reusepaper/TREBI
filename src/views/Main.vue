<template>
  <div class="main">
    <ul>
      <li>T</li>
      <li>R</li>
      <li>E</li>
      <li>B</li>
      <li>I</li>
      <div style="clear: both;"></div>
    </ul>
    <!-- <a href="#">
      TREBI
    </a> -->
    <ScrollDown></ScrollDown>
  </div>
</template>

<script>
import ScrollDown from "../components/Navigation/Scroll_down_indicator";
// import Navbar from "../components/Navigation/Navbar";

export default {
  components:{
    ScrollDown
    // Navbar
  }
}
</script>

<style scoped>
    .main{
        text-align: center;
        background: #524F5a;
        /* margin:0 auto;
        padding: 0; */
        /* height:100vh; */
    }
    .main ul{
        padding:5px 25px 5px 25px;
        border: 10px solid #fff;
        /* text-align: center; */
        display: inline-block;
        position: absolute;
        top:50%;
        left:50%;
        transform: translateY(-50%) translateX(-50%);
    }
    .main ul li{
        list-style: none;
        color: #fff;
        float: left;
        /* display: inline-block;
        text-align: center; */
        font-size: 10vw;
        font-family: Ubuntu, Arial, Helvetica, sans-serif;
        transition: 2s;
    }
    ul:hover li{
        transform: rotateY(360deg);
    }
    ul:hover li:nth-child(2){
        transition-delay: .3s;
    }
    ul:hover li:nth-child(3){
        transition-delay: .6s;
    }
    ul:hover li:nth-child(4){
        transition-delay: .9s;
    }
    ul:hover li:nth-child(5){
        transition-delay: 1.2s;
    }

    /* 두번째 메인 */
    /* .main a{
        padding: 0 50px;
        text-decoration: none;
        color:#fff;
        font-size: 10em;
        letter-spacing: 10px;
        overflow: hidden;
        border: 10px solid #fff;
        box-shadow: 3px 3px 0 -1px rgba(0,0,0,.1);
        /* text-align: center; */
        display: inline-block;
        position: absolute;
        top:50%;
        left:50%;
        transform: translateY(-50%) translateX(-50%) ;
        
    }
    .main a::before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      width:50%;
      height: 100%;
      background:rgba(255,255,255,0.01);
    }
    .main a::after{
      content:'';
      position:absolute;
      top:0;
      left:-100%;
      width:100%;
      height: 100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
      transition: .5s;
    }
    .main a:hover::after{
      left: 100%;
    } */
</style>

