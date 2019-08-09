<template>
  <div class="team-title">
    TEAM
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .team-title {
    color: #524F5A;
    text-align: center;
    padding-top: 10vh;
    /* font-size: 3vw; */
    font-weight: bold;
    font-family: Ubuntu, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  @media screen and (max-width: 600px) {
    .team-title {
       font-size: 10vh;
    }
  }
  @media screen and (min-width: 601px) {
    .item p{
      display:none;
    }
    .team-contents{
      height:74vh;
    }
    .team-title {
       font-size: 10vh;
    }
  }
  @media screen and (min-width: 768px) {
     .box1 h2{
        top:35%;
        left:5%;
     }
   }
   @media screen and (min-width: 992px) {
     .box1 h2{
      top:37%;
      left:2%;
     }
   }
  @media screen and (min-width: 1200px) {
    .box1 h2{
      display:none;
    }
    .box .box-row .box-cell{
      width:0%;
    }
  }
</style>
