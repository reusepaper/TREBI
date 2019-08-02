<template>
  <div class="contactContainer">
    <div class="contactTitle">
      <div data-aos="fade-right">Contact</div>
      <div data-aos="fade-left" data-aos-delay="50">us</div>
    </div>
    <div class="contactUs">
      <ContactMemberListContain></ContactMemberListContain>
    </div>
  </div>
</template>

<script>
import ContactMemberListContain from "./ContactMemberListContain";
export default {
  components: {
    ContactMemberListContain
  },
  colorChange: function() {
    color: white;
  }
};
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
  display: flex;
  align-self: center;
  justify-self: center;
  font-size: 50px;
  font-weight: 600;
  font-family: Ubuntu;
  color: #919191;
  /* background-color: yellow; */
}
.contactTitle div:last-child {
  margin-left: 10px;
}
.contactTitle:hover {
  color: white;
}
</style>
