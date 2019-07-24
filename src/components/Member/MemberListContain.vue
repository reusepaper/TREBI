<template>
  <div class="memberList">
    <img src="../../../src/assets/goubook1.png"/>
    <img src="../../../src/assets/hesee.jpg"/>
    <img src="../../../src/assets/pikachu.jpg"/>
    <img src="../../../src/assets/togepi.jpg"/>
    <img src="../../../src/assets/jammanbo.jpg"/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .memberList {
    display: grid;
    grid-auto-flow: column;
  }
  .memberList > img{
    justify-self: center;
    align-self: center;
    height:200px;
    border-radius: 50%;
    box-shadow: 10px 10px 10px grey;
  }
  img:hover{
    box-shadow: 5px 5px 0 grey;
  }
</style>
