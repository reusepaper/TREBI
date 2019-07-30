<template>
  <div id="member">
    <MemberTitle class="member-title"></MemberTitle>
    <div class="contents">
      <MemberListContain class="member-list-contain"></MemberListContain>
      <MemberContentsContain class="member-contents-contain"></MemberContentsContain>
    </div>
  </div>
</template>
<script>
import MemberTitle from "../components/Member/MemberTitle";
import MemberListContain from "../components/Member/MemberListContain";
import MemberContentsContain from "../components/Member/MemberContentsContain";

export default {
  components: {
    MemberTitle,
    MemberListContain,
    MemberContentsContain
  }
};
</script>
<style scoped>
#member {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 20px;
}
/* .member-title {
}
.contents {
  float: left;
  width: 72%;
  height: 100vh;
}
.member-list-contain {
  height: 20%;
  margin: 20px;
  margin-top: 7%;
}
.member-contents-contain {
  background-color: white;
  margin: 20px;
  height: 46%;
  border-radius: 1%;
  margin-top: 8%;
} */
</style>
