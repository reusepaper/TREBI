<template>
  <div>
    <MemberTitle></MemberTitle>
    <MemberListContain></MemberListContain>
    <MemberContentsContain></MemberContentsContain>
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
