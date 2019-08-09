<template>
  <div id="popup-article" class="popup" v-bind:class="{modalShow :this.$store.state.Child3}">
    <div class="popup__block">
      <div class="block-row">
        <div class="block-cell upload">
        <div class="carousel-wrapper">
          <span id="target-item-1"></span>
          <span id="target-item-2"></span>
          <span id="target-item-3"></span>
          <div class="carousel-item item-1" style="background-color: khaki;">
            <h2>Item 1</h2>
            <p>Content goes here.</p>
            <a class="arrow arrow-prev" href="#target-item-3"></a>
            <a class="arrow arrow-next" href="#target-item-2"></a>
          </div>
          <div class="carousel-item item-2 light" style="background-color: royalblue;">
            <h2>Item 2</h2>
            <p>Content goes here.</p>
            <a class="arrow arrow-prev" href="#target-item-1"></a>
            <a class="arrow arrow-next" href="#target-item-3"></a>
          </div>
          <div class="carousel-item item-3" style="background-color: aliceblue;">
            <h2>Item 3</h2>
            <p>Content goes here.</p>
            <a class="arrow arrow-prev" href="#target-item-2"></a>
            <a class="arrow arrow-next" href="#target-item-1"></a>
          </div>
        </div>  
        </div>
        <div @click="popUpClose" class="popup__close">close</div>
        <div class="block-cell comment">
          <div class="box">
            <div class="comment--header">
              <h1>댓글</h1>
            </div>
            <span class="comment--input">
              <input type="text" v-model="comment" v-on:keyup.enter="addComment">
              <span v-on:click="addComment">
                <i class="fas fa-plus addBtn"></i>
              </span>
            </span>
            <ul id="comment--content">
              <li v-for="comment in comments" v-bind:key="comment">
                {{comment}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data:function(){
    return{
      comment:'',
      comments:[]
    }
  },
  methods: {
    popUpClose() {
      // this.$store.commit("closeChildShow");
      this.$store.commit("toggleNthChildShow",3);

      console.log("closeChildShow 끝");
    },
    addComment(){
      console.log(this.comment);
      // 유저아이디 key값(일단 임의로 둘다 똑같이 해놓음), value는 댓글
      localStorage.setItem(this.comment,this.comment);
      this.comments.push(this.comment);
      this.clearComment();
    },
    clearComment(){
      console.log("commentclear");
      this.comment='';
    }
  },
  created(){
    if(localStorage.length>0){
      for(var i=0;i<localStorage.length;i++){
        if(localStorage.key(i).length==0)continue;
        this.comments.push(localStorage.key(i));
      }
    }
  }
};
</script>

<style scoped>
.addBtn{
  color:white;
  font-size:2em;
  background:linear-gradient(to right,orange, orangered);
  border-radius: 10px;
  height:60px;
}
.block-cell > .box{
  display:grid;
  position: absolute;
  grid-template-rows: 10% 10% 78%;
  height: 100%;
  grid-column-gap: 5px;
}
.comment--input{
  display: flex;
}
.comment--input input{
  border-style:groove;
  width:90%;
  height:60px;
  border-radius: 10px 0 0 10px;
  font-size: 20px;
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
#comment--content{
  margin:10px;
  text-align:left;
  border:none;
}
#comment--content > li {
  display: flex;
  min-height:50px;
  font-size:20px;
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
  background-color: rgba(255,255,255, 0.6);

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
  height: calc(100vh - 40px);
  width:80%;
  box-sizing: border-box;
  padding: 1% 1% !important;
  position: relative;
  box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, .3);
  margin: auto;
  overflow: auto;
  animation: fade 0.5s ease-out 1.3s both;
  display: table;
}
.block-cell{
  display: table-cell;
  width:50%;
  height: 100%;
  border : 1px solid;
}
.block-row{
  display: table-row;
}
.block-cell.comment{
  border:1px solid red;
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
.carousel-wrapper {
  position: relative;
  height: 100%;
}
/* Our absolutely positioned carousel items span the width and
height of its parent. We're making them transparent by default so
that they fade in when we cycle through them using the arrow links. */
.carousel-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px 50px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  border: 1px solid #aaa;
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
we're setting its z-index to 2, so that it's positioned on top of the
other carousel items. */
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
