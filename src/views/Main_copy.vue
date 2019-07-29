<template>
  <div class="app">
    <Navbar></Navbar>
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
import Navbar from "../components/Main_copy/Navbar";

export default {
  components:{
    ScrollDown,
    Navbar
  }
}
</script>

<style scoped>
    .app{
        background: #524F5a;
        margin:0;
        padding: 0;
        height:100vh;
    }
    .app ul{
        padding:5px 25px 5px 25px;
        margin:0;
        border: 10px solid #fff;
        display: inline-block;
        position: sticky;
        top:50%;
        left:50%;
        transform: translateY(-50%) translateX(-50%);
    }
    .app ul li{
        list-style: none;
        color: #fff;
        float: left;
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

