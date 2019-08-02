<template>
  <div class="child1">
    <h1>4주 프로젝트</h1>
    <ul>
      <li>블로그 게시용 웹페이지 제작</li>
      <li>슬랙 API를 이용한 챗봇 구현</li>
      <li>반응형 웹 사이트 구현</li>
      <li>Git Repository를 이용한 Commit Log 남기기</li>
    </ul>
    <div class="cloo">
      <a v-on:click="$modal.hide('hello-world3')">close</a>
    </div>
  </div>
</template> 

<script>
export default {
}
</script>

<style scoped>
  .child1{
    text-align: center
  }
  .child1 p{
    padding: 3px;
  }
  .child1 h1{
    margin : 10px;
  }
  ul li{
    list-style: none;
    padding : 5px;
  }
  .cloo{
    position: absolute;
    display: block;
    font-size: 2em;
    left: 42%;
    top: 70%;
    background: orange;
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    cursor:pointer;
  }
</style>
