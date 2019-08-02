<template>
  <div class="team">
    <TeamTitleContain data-aos="fade-right" data-aos-delay="100"></TeamTitleContain>
    <TeamContentsContain></TeamContentsContain>
  </div>
</template>
<script>
import TeamTitleContain from "../components/Team/TeamTitleContain";
import TeamContentsContain from "../components/Team/TeamContentsContain";
import $ from 'jquery';

export default {
  components: {
    TeamTitleContain,
    TeamContentsContain
  }
};
</script>

<style>
  .team {
    background: #EDEDEE;
  }
</style>
