<template>
  <div class="chatbotContainer">
    <div class="chatbotTitle">chatbot</div>
    <div class="chatbot">챗봇 내용 들어갈 곳</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.chatbotContainer {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: blue;
  padding: 50px;
  display: grid;
  grid-template-rows: 2fr 8fr;
  grid-auto-columns: 80%;
  justify-content: center;
}
.chatbotTitle {
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
}
.chatbot {
  background-color: azure;
}
</style>
