<template>
  <div class="team">
    <TeamTitleContain class="fadeInLeft"></TeamTitleContain>
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
  },
  mounted: function(){
    $(window).scroll(function(){
      $('.fadeInLeft').each(function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if(bottom_of_window > bottom_of_element) {
          $(this).animate({
            'opacity':'1',
            'margin-left':'0px'
          }, 1000);
        }
      });
    });
  }
};
</script>

<style>
  .team {
    background: #EDEDEE;
  }

  .fadeInLeft {
    opacity: 0;
    margin-left: -400px;
  }
</style>
