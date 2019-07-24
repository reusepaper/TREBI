<template>
  <div class="contactContainer">
    <div class="contactTitle">Contact Us</div>
    <div class="contactUs">contactform 들어갈 곳</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contactContainer {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: red;
  padding: 50px;
  display: grid;
  grid-template-rows: 2fr 8fr;
  grid-auto-columns: 80%;
  justify-content: center;
}
.contactTitle {
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
}
.contactUs {
  background-color: azure;
}
</style>
