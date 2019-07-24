<template>
  <div class="footerContainer">
    <ChatbotContain></ChatbotContain>
    <ContactUsContain></ContactUsContain>
    <!-- <WeatherContain></WeatherContain> -->
  </div>
</template>
<script>
import ChatbotContain from "../components/Footer/ChatbotContain";
import ContactUsContain from "../components/Footer/ContactUsContain";
import WeatherContain from "../components/Footer/WeatherContain";

export default {
  components: {
    ChatbotContain,
    ContactUsContain,
    WeatherContain
  }
};
</script>

<style scoped>
.footerContainer {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
}
</style>
