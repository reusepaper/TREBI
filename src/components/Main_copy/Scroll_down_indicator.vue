<template>
  <div class="scroll-down">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .scroll-down{
    position: sticky;
    top:90%;
    left:50%;
    width:40px;
    height:40px;
    transform: translateY(-80px) translateX(-50%) rotate(45deg);
  }
  .scroll-down span {
    position:absolute;
    top:0;
    left:0;
    display:block;
    width: 100%;
    height:100%;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    animation: animate 1.5s linear infinite;
    opacity: 0;
  }
  .scroll-down span:nth-child(1){
    transform: translate(-15px,-15px);
  }
  .scroll-down span:nth-child(2){
    transform: translate(0,0);
  }
  .scroll-down span:nth-child(3){
    transform: translate(15px,15px);
  }
  @keyframes animate{
    0%{
      top:-3px;
      left:-3px;
      opacity: 0;
    }
    25%{
      top:0px;
      left:0px;
      opacity: 1;
    }
    50%,100%{
      top:3px;
      left:3px;
      opacity: 1;
    }
  }
</style>
