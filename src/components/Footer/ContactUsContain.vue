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
  padding: 50px;
  display: grid;
  grid-template-rows: 2fr 8fr;
  grid-auto-columns: 80%;
  justify-content: center;
}
.contactTitle {
  align-self: center;
  justify-self: center;
  font-size: 50px;
  font-weight: 600;
  /* background-color: yellow; */
}
.contactUs {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
</style>
