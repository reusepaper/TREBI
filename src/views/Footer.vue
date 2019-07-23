<template>
  <div>
    <ChatbotContain></ChatbotContain>
    <ContactUsContain></ContactUsContain>
    <WeatherContain></WeatherContain>
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
