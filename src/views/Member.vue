<template>
  <div id="member">
    <MemberTitle class='member-title'></MemberTitle>
    <div class="contents">
      <MemberListContain class='member-list-contain'></MemberListContain>
      <MemberContentsContain class='member-contents-contain'></MemberContentsContain>
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
  .member-title{
    float: left;
    width:10%;
    background-color: bisque;
    height: 100vh;
  }
  .contents{
    float:right;
    width:90%;
    background-color: yellow;
    height: 100vh;
  }
  .member-list-contain{
    background-color: aquamarine;
  }
  .member-list-contain{
    height:50%;
  }
</style>
