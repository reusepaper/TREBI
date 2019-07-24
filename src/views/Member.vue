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
.member-title {
  float: left;
  width: 10%;
  border-left-color: black;
  height: 100vh;
}
.contents {
  float: right;
  width: 90%;
  height: 100vh;
}
.member-list-contain {
  height: 20%;
  background-color: blue;
  margin: 20px;
  margin-top: 7%;
}
.member-contents-contain {
  background-color: green;
  margin: 20px;
  height: 40%;
}
</style>
