<template>
  <div id="popup-article" class="popup" v-bind:class="{modalShow :this.$store.state.Child3}">
    <div class="popup__block">
      <div class="block-row">
        <div @click="popUpClose" class="close__container">
          <div class="leftright"></div>
          <div class="rightleft"></div>
          <label class="close">close</label>
        </div>
        <!-- <div @click="popUpClose" class="popup__close">close</div> -->
        <div class="block-cell upload">
          <div class="carousel__wrapper">
            <ul>
              <li @click="backSlide"><span><i class="fas fa-arrow-left"></i></span></li>
              <li @click="nextSlide"><span><i class="fas fa-arrow-right"></i></span></li>
            </ul>
            <div class="showatio">{{current_slide}}/10</div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===1}">
              <img src="..\..\..\assets\portfolio3\portfolio1.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===2}">
              <img src="..\..\..\assets\portfolio3\portfolio2.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===3}">
              <img src="..\..\..\assets\portfolio3\portfolio22.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===4}">
              <img src="..\..\..\assets\portfolio3\portfolio3.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===5}">
              <img src="..\..\..\assets\portfolio3\portfolio33.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===6}">
              <img src="..\..\..\assets\portfolio3\portfolio333.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===7}">
              <img src="..\..\..\assets\portfolio3\portfolio4.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===8}">
              <img src="..\..\..\assets\portfolio3\portfolio5.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===9}">
              <img src="..\..\..\assets\portfolio3\portfolio6.png"/>
            </div>
            <div class="carousel__item" v-bind:class="{showing: current_slide===10}">
              <img src="..\..\..\assets\portfolio3\portfolio7.png"/>
            </div>
          </div>  
        </div>
        <div class="block-cell comment">
          <div class="box">
            <!-- <div class="comment--header">
              <h1>댓글</h1>
            </div> -->
            <div class="comment__container">
              <ul id="comment--content">
                <li v-for="comment in comments" v-bind:key="comment.uid">
                  {{comment.displayName}} | {{comment.comment}} 
                  <button 
                    v-if="$store.state.user && $store.state.user.uid == comment.uid"
                    class="deleteButton"
                    @click="delete_event(content.id, comment.id)"
                    >
                    삭제
                  </button>
                </li>
              </ul>
            </div>
            <div class="comment--input">
              <input type="text" v-model="comment" 
                v-on:keyup.enter="createTeamPostComment"
                placeholder="댓글을 입력해주세요">
              <div v-on:click="createTeamPostComment">
                <i id="plusButton" class="fas fa-plus addBtn"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import FirebaseService from '@/services/FirebaseService';
import { setInterval } from 'timers';

export default {
  data:function(){
    return{
      content: [],
      comment:'',
      comments: [],
      user: this.$store.state.user,
      firstSlide:'',
      showing_class:"showing",
      current_slide:1,
    }
  },
  mounted: function(){
    this.getTeamPost();
    this.$store.watch(() => this.$store.getters.getChild1State, Child3 => {
      // console.log('watched:', ismodalShow);
      // this.posY = $(window).scrollTop();
      if(Child3) {
        // console.log(this.posY);
        var height = $(window).height();
        height *= 1;
        height += 1;
        window.scrollTo({
          top: height,
          behavior: 'smooth'
        });
        // $("html, body").addClass("not_scroll");
        $("body").css("overflow", "hidden");
        $(".comment__container").on("mousewheel", function (event) {
          event.stopPropagation();
        });
      } else{
        // $("html, body").removeClass("not_scroll");
        // posY = $(window).scrollTop(posY);
        var height = $(window).height();
        height *= 1;
        height += 1;
        window.scrollTo({
          top: height
          // behavior: 'smooth'
        });
        $("body").css("overflow", "visible");
        // $("html, body").removeClass("not_scroll");
        // this.posY = $(window).scrollTop(this.posY);
      };
    })
  },
  methods: {
    backSlide(){
      if(this.current_slide===1){
        this.current_slide=10;
      }else{
        this.current_slide=this.current_slide-1;
      }
    },
    nextSlide(){
      if(this.current_slide===10){
        this.current_slide=1;
      }else{
        this.current_slide++;
      }
    },
    popUpClose() {
      // this.$store.commit("closeChildShow");
      this.$store.commit("toggleNthChildShow",3);
      // console.log("closeChildShow 끝");
    },
    
    clearComment(){
      // console.log("commentclear");
      this.comment='';
    },
    async getTeamPost(){
      const allContents = await FirebaseService.getTeamPost();
      // console.log(allContents)
      this.content = allContents[2];
      await this.getTeamPostComment();
      // console.log(this.content);
    },
    async createTeamPostComment(){
      if(this.user === null){
        alert("로그인을 해야 댓글을 작성할 수 있습니다.");
        return;
      } else{
        if(this.comment == ''){
          alert("댓글을 입력해주세요");
          return ;
        }
      }
      
      await FirebaseService.createTeamPostComment(this.content.id, this.user, this.comment);
      await this.getTeamPostComment();
      await this.clearComment();
    },
    async getTeamPostComment(){
      this.comments = await FirebaseService.getTeamPostComment(this.content.id);
      // await console.log(this.comments);
    },
    delete_event(postId, commentId) {
      if (confirm("정말 삭제하시겠습니까?") == true)
        this.deleteTeamPostComment(postId, commentId);
      else alert("삭제하지 않았습니다.");
    },
    async deleteTeamPostComment(postId, comment){
      await FirebaseService.deleteTeamPostComment(postId, comment);
      await this.getTeamPostComment();
    }
  },
  
};
</script>

<style scoped>

  .close__container {
    /* position: relative;
    margin: auto; */
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .leftright {
    height: 4px;
    width: 50px;
    position: absolute;
    margin-top: 24px;
    background-color: #FFFFFF;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all .3s ease-in;
  }

  .rightleft {
    height: 4px;
    width: 50px;
    position: absolute;
    margin-top: 24px;
    background-color: #FFFFFF;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all .3s ease-in;
  }

  label {
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    font-size: .6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all .3s ease-in;
    opacity: 0;
  }

  .close {
    margin: 72px 14px 0 0;
    position: absolute;
  }

  .close__container:hover .leftright {
    transform: rotate(-45deg);
    background-color: #FFFFFF;
  }

  .close__container:hover .rightleft {
    transform: rotate(45deg);
    background-color: #FFFFFF;
  }

  .close__container:hover label {
    opacity: 1;
  }


.addBtn{
  color:white;
  font-size:2em;
  background-color: #919191;
  /* background:linear-gradient(to right,orange, orangered); */
  border-radius: 0px 10px 10px 0px;
  height:38px;
  width: 26px;
  padding: 1px 3px 1px 3px;
}
.block-cell > .box{
  /* display:grid; */
  position: absolute;
  /* grid-template-rows: 10% 78% 10%; */
  height: 100%;
  width: 100%;
  /* grid-column-gap: 5px; */
}

/* .comment__container {
  height: 90%;
  overflow: auto;
  border-bottom: 1px solid black;
} */

/* .comment--input{
  height: 9%;
  display: flex;
  padding: 0px 5px;
  align-items: center;
} */

.comment--input input{
  border-style:groove;
  width:90%;
  height:36px;
  border-radius: 10px 0 0 10px;
  font-size: 16px;
  border-right-color: transparent;
}
.comment--input input:focus{
  outline:none;
}
/* #comment--content button{
  border-style: groove;
  border-radius: 0 10px 10px 0;
  float:right;
} */

@media screen and (max-width: 960px) {
  .comment__container {
    height: 80%;
    overflow: auto;
    border-bottom: 1px solid black;
  }
  .comment--input{
    height: 19%;
    display: flex;
    padding: 0px 5px;
    align-items: center;
  }
}

@media screen and (min-width: 960px) {
  .comment__container {
    height: 90%;
    overflow: auto;
    border-bottom: 1px solid black;
  }
  .comment--input{
    height: 9%;
    display: flex;
    padding: 0px 5px;
    align-items: center;
  }
}


#comment--content{
  /* height: 95vh; */
  margin:10px;
  text-align:left;
  border:none;
}
#comment--content > li {
  display: flex;
  min-height:38px;
  font-size:16px;
  align-items: center;
}
.comment-title{
    position: absolute;
    top: 5%;
    left: 70%;
    margin: 10px auto;
}
.comment{
  position: relative;
}

.popup {
  width: 100%;
  height: 100vh;
  display: none;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
}

.modalShow {
  display: flex;
}
.popup:before {
  content: "";
  box-sizing: border-box;
  width: 100%;
  /* background-color: rgba(255,255,255, 0.6); */
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 45%;
  will-change: height, top;
  animation: open-animation 0.6s cubic-bezier(0.83, 0.04, 0, 1.16) 0.65s both;
}

.popup:after {
  content: "";
  width: 0;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.6);

  will-change: width, opacity;
  animation: line-animation 0.6s cubic-bezier(0.83, 0.04, 0, 1.16) both;

  position: absolute;
  top: 45%;
  left: 0;
  margin-top: -1px;
}
.deleteButton{
  margin: 5px;
  background-color: white;
  border: 1px salmon solid;
  border-radius: 5px;
  width: 32px;
}
#plusButton{
  font-size:20px;
}
/* .comment--header{
  border-bottom: 2px black solid;
} */

@keyframes line-animation {
  0% {
    width: 0;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }

  99% {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }

  100% {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
  }
}

@keyframes dot-animation {
  0% {
    width: 100%;
    opacity: 0;
  }
  1% {
    width: 100%;
    opacity: 1;
  }

  100% {
    width: 0;
    opacity: 1;
  }
}
@keyframes open-animation {
  0% {
    height: 0;
    top: 50%;
  }

  100% {
    height: 100vh;
    top: 0;
  }
}

.popup__block {
  height: 80vh;
  width: 80%;
  /* box-sizing: border-box; */
  /* padding: 1% 1% !important; */
  /* position: relative; */
  /* box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, .3); */
  margin: auto;
  overflow: auto;
  animation: fade 0.5s ease-out 1.3s both;
  display: flex;
}


/* .block-row{
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
} */


/* .block-cell{
  display: inline-block;
  width: 50%;
  height: 99%;
  border : 1px solid black;
  border-right: none;
  border-collapse: collapse;
} */


@media screen and (max-width: 960px) {
  .block-row{
    height: 100%;
    width: 100%;
    display: block;
    overflow: hidden;
  }

  .block-cell{
    display: block;
    width: 100%;
    height: 50%;
    border : 1px solid black;
    border-bottom: none;
    border-collapse: collapse;
  }
}

@media screen and (min-width: 960px) {
  .block-row{
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
  }

  .block-cell{
    display: inline-block;
    width: 50%;
    height: 99%;
    border : 1px solid black;
    border-right: none;
    border-collapse: collapse;
  }
}

.block-cell.comment{
  background-color: white;
  border:1px solid black;
  text-align: center;
}
@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.popup__title {
  font-size: 2.5rem;
  margin: 0 0 1em;
}

.popup__close {
  cursor:pointer;
  width: 3.2rem;
  height: 3.2rem;
  text-indent: -9999px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);
}


/* Here's where our carousel begins, with the main wrapper being
relatively positioned, so that our absolutely positioned items are
in the right place. */
.carousel__wrapper
 {
  position: relative;
  height: 100%;
}
.carousel__wrapper ul{
  list-style-type: none;
  display:flex;
  height:100%;
  width:100%;
  margin: 0 auto;
  position:absolute;
}
.carousel__wrapper ul li:nth-child(1){
  z-index: 3;
  width:50%;
  height:100%;
  overflow:hidden;
  background: transparent;
  font-size:40px;
}
.carousel__wrapper ul li:nth-child(2){
  z-index: 3;
  position:relative;
  width:50%;
  height:100%;
  overflow:hidden;
  background:transparent;
  text-align: right;
  font-size:40px;
}
.showatio{
  position:absolute;
  font-size: 20px;
  background-color: rgba(0,0,0,.3);
  color:white;
  margin-top:10px;
  z-index: 4;
  left:50%;
}
/* Our absolutely positioned carousel items span the width and
height of its parent. We're making them transparent by default so
that they fade in when we cycle through them using the arrow links. */
.carousel__item {
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  z-index: 0;
  opacity:0;
  transition: opacity .5s ease-in-out;
}
.carousel__item img{
  overflow: hidden;
  display: flex;
  align-items: top;
  justify-content: top;
  width: 100%;
  height: 100%;
}
.carousel__item:nth-child(odd){
  background-color: antiquewhite;
}
.carousel__item:nth-child(even){
  background-color: steelblue;
}
.showing{
  opacity:1;
  z-index: 2;
}
/* Did you notice the 50px left, right padding up above? It's so
we can position our arrow links! Each one will be 50px wide. Also,
I'm using empty links with a background image so that the links
look like arrows. Make sure you swap out that URL with an actual
URL so that your arrow links aren't just transparent rectangles. */
.arrow {
position: absolute;
top: 0;
display: block;
width: 50px;
height: 100%;
-webkit-tap-highlight-color: rgba(0,0,0,0);
background: url("http://haloxp.com/codepen/carousel-arrow-dark.png") 50% 50% / 20px no-repeat;
}
  /* Let's put our arrow to go back on the left. */
.arrow.arrow-prev {
  left: 0;
}

/* And our arrow to go forward on the right. Since I'm using
the same arrow image for both my arrows, I'm rotating this one by
180 degrees so that it points in the right direction */
.arrow.arrow-next {
    right: 0;
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
}

/* I really like how these carousel items look on a dark image
background, so if a .carousel-item div has the class 'light',
we'll make its text color white, and use a white arrow instad of
a dark gray one. Again, make sure this arrow image exists somewhere */
.arrow.light {
  color: white;
}
.arrow {
    background: url("http://haloxp.com/codepen/carousel-arrow-light.png") 50% 50% / 20px no-repeat;
}
    

/* Let's use using some media queries to resize the arrows
on smaller devices.*/
@media (max-width: 480px) {
  .arrow, .arrow.light .arrow {
    background-size: 10px;
    background-position: 10px 50%;
  }
}

/* Let's set our jump link targets display: none; so that we're not
making the browser jump to the top of the carousel whenever a user
clicks on one of our arrow links. This attribute selector will target
any element whose id starts with 'target-item'. */
[id^="target-item"] {
  display: none;
}

/* So, up above we made all our carousel items transparent, which means
that on page-load, we'd have a big empty box where our carousel should be.
Let's set our first item's opacity to 1 so that it displays instead. Also,
we're setting its z-index to 2, so that it's positioned on top of the other carousel items. */
.item-1 {
  z-index: 2;
  opacity: 1;
}

/* But we don't want the first item to ALAWYS be opacity: 1; otherwise
it would peek through when cycling between items two and above. */
*:target ~ .item-1 {
  opacity: 0;
}

/* ...but if #target-item-1 is targeted, well we do want the first item
to show up, so we're selecting it with the ~ sibling selector and
setting its opacity to 1 again :-) */
#target-item-1:target ~ .item-1 {
  opacity: 1;
}

/* If any other target-item-# is targeted, let's select it using the sibling
selector, make it fade in, and place it on top of the pile using z-index: 3.
Here's where you'd add more target items if your carousel has more than three
items. It might be worth adding like 10 items right off the bat. */
#target-item-2:target ~ .item-2, #target-item-3:target ~ .item-3 {
  z-index: 3;
  opacity: 1;
}
</style>
