<template>
  <div class="member">
    <MemberTitle class="fadeInRight"></MemberTitle>
    <MemberListContain></MemberListContain>
    <!-- <MemberContentsContain></MemberContentsContain> -->
  </div>
</template>
<script>
import MemberTitle from "../components/Member/MemberTitle";
import MemberListContain from "../components/Member/MemberListContain";
import MemberContentsContain from "../components/Member/MemberContentsContain";
import $ from 'jquery';

export default {
  components: {
    MemberTitle,
    MemberListContain,
    MemberContentsContain
  },
  mounted: function(){
    $(window).scroll(function(){
      $('.fadeInRight').each(function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if(bottom_of_window > bottom_of_element) {
          $(this).animate({
            'opacity':'1',
            'margin-right':'0px'
          }, 1000);
        }
      });
    });
  }
  // ,
  // data() {
  //   return {
  //     members: [
  //       { 'member_image_src' : require('../assets/goubook1.png'), 'member_contents' : '꼬부기1'},
  //       { 'member_image_src' : require('../assets/hesee.jpg'), 'member_contents' : '이상해씨1'},
  //       { 'member_image_src' : require('../assets/pikachu.jpg'), 'member_contents' : '피카츄1'},
  //       { 'member_image_src' : require('../assets/togepi.jpg'), 'member_contents' : '토게피1'},
  //       { 'member_image_src' : require('../assets/jammanbo.jpg'), 'member_contents' : '잠만보1'},
  //       { 'member_image_src' : require('../assets/goubook1.png'), 'member_contents' : '꼬부기2'},
  //       { 'member_image_src' : require('../assets/hesee.jpg'), 'member_contents' : '이상해씨2'},
  //       { 'member_image_src' : require('../assets/pikachu.jpg'), 'member_contents' : '피카츄2'},
  //       { 'member_image_src' : require('../assets/togepi.jpg'), 'member_contents' : '토게피2'},
  //       { 'member_image_src' : require('../assets/jammanbo.jpg'), 'member_contents' : '잠만보2'},
  //       { 'member_image_src' : require('../assets/goubook1.png'), 'member_contents' : '꼬부기3'},
  //       { 'member_image_src' : require('../assets/hesee.jpg'), 'member_contents' : '이상해씨3'},
  //       { 'member_image_src' : require('../assets/pikachu.jpg'), 'member_contents' : '피카츄3'},
  //       { 'member_image_src' : require('../assets/togepi.jpg'), 'member_contents' : '토게피3'},
  //       { 'member_image_src' : require('../assets/jammanbo.jpg'), 'member_contents' : '잠만보3'}
  //     ]
  //   }
  // }
};
</script>
<style scoped>
  .member {
    background: #EDEDEE;
  }

  .fadeInRight {
    opacity: 0;
    margin-right: -400px;
  }
</style>
