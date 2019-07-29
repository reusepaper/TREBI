<template>
  <div class="main">
    <!-- <Navbar></Navbar> -->
    <ul>
      <li>T</li>
      <li>R</li>
      <li>E</li>
      <li>B</li>
      <li>I</li>
      <div style="clear: both;"></div>
    </ul>
    <ScrollDown></ScrollDown>
  </div>
</template>

<script>
import ScrollDown from "../components/Main_copy/Scroll_down_indicator";
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
        font-size: 10rem;
        font-family: Arial, Helvetica, sans-serif;
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
    
</style>

