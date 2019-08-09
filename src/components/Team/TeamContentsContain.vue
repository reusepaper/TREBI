<template>
  <div class="team-contents-contain">
    <child1popup></child1popup>
    <child2popup></child2popup>
    <child3popup></child3popup>
    <div class="team-contents">
      <div class="box">
        <div class="box-row">
          <div class="box-cell box1">
              <h2>
                History
                <span>History</span>
                <span>History</span>
                <span>우리가 걸어온 길</span>
              </h2>
          </div>
          <div class="box-cell box2">
            <ul>
              <li>
                <div class="item">
                  <span>1th July 2019</span>
                  <h3>첫 만남</h3>
                  <p>팀 이름 정하기, 역할 분담 및 목표 설정</p>
                </div>
              </li>
              <li>
                <div class="item" 
                @click="togglePopUp(1)" 
                >
                  <span>1st July 2019 ~ 7st 7th 2019</span>
                  <h3>[1주 프로젝트] 반응형 웹 페이지 제작</h3>
                  <p>자신을 소개하는 포토폴리오 사이트 제작</p>
                </div>
              </li>
              <li>
                <div class="item" 
                @click="togglePopUp(2)" 
                >
                  <span>9st July 2019 ~ 18st 7th 2019</span>
                  <h3>[2주 프로젝트] 외부 API 연동을 통한 기능 추가</h3>
                  <p>Git Graph, Firebase, Vuetify 등 다양한 API를 이용하여 프로젝트 진행</p>
                </div>
              </li>
              <li>
                <div class="item" 
                @click="togglePopUp(3)" 
                >
                  <span>22st July 2019 ~ 16st Aug 2019</span>
                  <h3>[4주 프로젝트] SW 개발 비서 구현</h3>
                  <p>SW 개발 비서 구현</p>
                </div>
              </li>
            </ul>
          </div>  
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import child1popup from './ChildComponents/Child1Popup';
import child2popup from './ChildComponents/Child2Popup';
import child3popup from './ChildComponents/Child3Popup';
export default {
  components:{
    child1popup,child2popup,child3popup
  },
  data:function(){
    return {
    }
  },
  methods:{
    togglePopUp(msg) {
      console.log("togglePopUp");
      // this.ismodalShow = !this.ismodalShow;
      this.$store.commit("toggleNthChildShow",msg);
    }
  }
}
</script>

<style >
  .wrapper{
    display:grid;
  }
  .v--modal-overlay {
    background:orange;
  }
  .team-contents-contain {
    width: 100%;
    margin: 1vh 0 3vh 0;
    /* display:table; */
  }
  .team-contents {
    width: 85vw;
    border: 2px solid #AAAAAA;
    border-radius: 10px;
    padding: 2vw;
    background: #FFFFFF;
    /* height: 70vh; */
    font-family: 'Noto Sans KR', sans-serif;
    margin: auto;
  }
  .box{
    position:relative;
    width:80vw;
    /* height:100%; */
    box-sizing:border-box;
    /* display:table; */
  }

  /* .box .box-row{
    display: flex;
  } */

  .box .box-row .box-cell{
    /* display: table-cell; */
    /* width:100%; */
    height:100%;
  }

  /* .box .box-row .box1, .box .box-row .box2 {
    width: 47%;
  } */

  .box ul{
    margin:0;
    padding:0;
    border-left: 2px solid orange;
    /* display:grid; */
    /* height: 100%; */
    /* width: 90%; */
    align-items:center;
  }
  .box ul li{
    list-style: none;
  }
  .box ul li .item{
    /* padding: 2vh 2vh 2vh 3vh; */
    width: 100%;
    position:relative;
    transition : .5s ease;
    cursor:pointer;
    /* vertical-align: middle; */
  }
  .box ul li .item::before{
    content:'';
    position:absolute;
    top:39px;
    left: -6px;
    width:12px;
    height:12px;
    background: orange;
    border-radius:50%;
    box-shadow: inset 0 0 5px rgba(0,0,0,.5);
  }
  .box ul li .item::after{
    content:'';
    position:absolute;
    top: 39px;
    left: -6px;
    width:12px;
    height:12px;
    background: #ff0;
    border-radius:50%;
    box-shadow: inset 0 0 5px #ff0;
    opacity: 0;
  }
  .box ul li .item:hover::after{
    animation : animate 1s linear infinite;
  }
  @keyframes animate {
    0%{
      opacity:0;
    }
    50%{
      opacity:1;
    }
    100%{
      opacity:0;
    }
  }
  .box ul li .item:hover{
    /* width: 90%; */
    background:#e3e3e3;
    border-radius: 10px;
  }
  .box ul li:hover .item span{
    color:orangered;
  }
  .box ul li .item h3{
    margin: 10px 0 0;
    transition : .3s ease;
  }
  .box ul li .item:hover h3{
    font-style:italic;
    font-weight: bold;
  }
  .box1 {
    margin:0 5vw 0 0;
    padding:0;
    min-height: 64vh;
    font-family: 'Courier New', Courier, monospace;
  }
  .box1 h2{
    position: absolute;
    /* top:35%;
    left:9%; */
    transform: trasnlate(-50%,-50%);
    font-size: 6em;
    text-transform: uppercase;
    color: transparent;
  }

  /* 글씨 길어지면 줄임형으로 설정 */
  @media screen and (max-width: 175px) {
    .item h3, .item span {
      display: inline-block;
      width: 90px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 175px) {
    .item h3, .item span {
      display: inline-block;
      width: 110px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 200px) {
    .item h3, .item span {
      display: inline-block;
      width: 130px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 240px) {
    .item h3, .item span {
      display: inline-block;
      width: 150px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 270px) {
    .item h3, .item span {
      display: inline-block;
      width: 170px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 300px) {
    .item h3, .item span {
      display: inline-block;
      width: 200px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 330px) {
    .item h3, .item span {
      display: inline-block;
      width: 230px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 360px) {
    .item h3, .item span {
      display: inline-block;
      width: 260px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 390px) {
    .item h3, .item span {
      display: inline-block;
      width: 290px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 420px) {
    .item h3, .item span {
      display: inline-block;
      width: 320px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 450px) {
    .item h3, .item span {
      display: inline-block;
      width: 350px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 480px) {
    .item h3, .item span {
      display: inline-block;
      width: 380px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 481px) {
    .item h3, .item span {
      width: 100%;
    }
  }

  /* 가로 1200px 이하 history글씨 안나오게 설정 */
  @media screen and (max-width: 1200px) {
    .box1 {
      display: none;
    }
    .item p{
      display:none;
    }
    div .item {
      height: 10vh;
      padding: 0;
    }
   }
  @media screen and (min-width: 1200px) {
    
    .box1 h2 {
      display: inline-block !important;
      top: 33%;
      left: 5%;
    }
    
    .box .box-row{
      display: flex;
    }
    
    .box .box-row .box1, .box .box-row .box2 {
      width: 47%;
    }
  }

  @media screen and (min-width: 1280px) {
    .box1 h2 {
      top: 33%;
      left: 6%;
    }
  }

  @media screen and (min-width: 1360px) {
    .box1 h2 {
      top: 33%;
      left: 7%;
    }
  }

  @media screen and (min-width: 1440px) {
    .box1 h2 {
      top: 33%;
      left: 8%;
    }
  }

  /* 화면별 컨테이너 마진설정 */
  @media screen and (max-width: 600px) {
    .team-contents {
      height: 70vh;
    }
    .box ul {
      height: 69vh;
    }  
    .box ul li .item{
      padding: 2vh 0vh 2vh 1vh;
    }
  }

  @media screen and (min-width: 600px) {
    .team-contents {
      height: 68vh;
    }
    .box ul {
      height: 67vh;
    }
    .box ul li .item{
      padding: 2vh 1vh 2vh 2vh;
    }
  }

  @media screen and (min-width: 768px) {
    .team-contents {
      height: 68vh;
    }
    .box ul {
      height: 67vh;
    }
    .box ul li .item{
      padding: 2vh 2vh 2vh 3vh;
    }
   }

   @media screen and (min-width: 992px) {
    .team-contents {
      height: 65vh;
    }
    .box ul {
      height: 64vh;
    }
   }
  @media screen and (min-width: 1200px) {
    .team-contents {
      height: 65vh;
    }
    .box ul {
      height: 64vh;
    }
  }


  h2 span:nth-child(1){
    position:absolute;
    top:0;
    left: 0;
    color:#000;
    transition: .5s;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    overflow: hidden;
  }
  h2:hover span:nth-child(1){
    transform: translateY(-40px);
  }
  h2 span:nth-child(2){
    position:absolute;
    top:0;
    left: 0;
    color:#000;
    transition: .5s;
    overflow: hidden;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  }
  h2:hover span:nth-child(2){
    transform: translateY(40px);
  }
  h2 span:nth-child(3){
    position: absolute;
    top:50%;
    left: 0;
    transform: translateY(-50%) scaleY(0);
    color: #000;
    font-size: .5em;
    letter-spacing: .15em;
    padding-left: 4px;
    transition: .5s ease;
    background:orange;
  }
  h2:hover span:nth-child(3){
    transform: translateY(-50%) scaleY(1);
  }
  .modal-call{
    cursor:pointer;
  }
</style>
