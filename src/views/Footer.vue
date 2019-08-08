<template>
  <div class="footerContainer">
    <!-- <ChatbotContain></ChatbotContain> -->
    <ContactUsContain></ContactUsContain>
    <CopyrightContain></CopyrightContain>
  </div>
</template>
<script>
import ChatbotContain from "../components/Footer/ChatbotContain";
import ContactUsContain from "../components/Footer/ContactUsContain";
import CopyrightContain from "../components/Footer/CopyrightContain";
export default {
  components: {
    ChatbotContain,
    ContactUsContain,
    CopyrightContain
  }
};
</script>

<style scoped>
.footerContainer {
  /* width: 100%; */
  height: 100vh;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 100px;
  background-color: rgb(82, 79, 90);
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 369px) {
  .footerContainer {
    grid-template-rows: 1fr 200px;
  }
}
</style>
