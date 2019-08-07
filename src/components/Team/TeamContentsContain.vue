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
                v-bind:class="{modalShow:this.$store.state.Child1}"
                >
                  <span>1st July 2019 ~ 7st 7th 2019</span>
                  <h3>[1주 프로젝트] 반응형 웹 페이지 제작</h3>
                  <p>자신을 소개하는 포토폴리오 사이트 제작</p>
                </div>
              </li>
              <li>
                <div class="item" 
                @click="togglePopUp(2)" 
                v-bind:class="{modalShow:this.$store.state.Child2}"
                >
                  <span>9st July 2019 ~ 18st 7th 2019</span>
                  <h3>[2주 프로젝트] 외부 API 연동을 통한 기능 추가</h3>
                  <p>Git Graph, Firebase, Vuetify 등 다양한 API를 이용하여 프로젝트 진행</p>
                </div>
              </li>
              <li>
                <div class="item" 
                @click="togglePopUp(3)" 
                v-bind:class="{modalShow:this.$store.state.Child3}"
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
.v--modal-overlay {
  background:orange;
}
  .team-contents-contain {
    margin-top: 3vh;
    display:table;
    margin: 10px auto;
  }
  .team-contents {
    border: 2px solid #AAAAAA;
    border-radius: 10px;
    padding: 1vw;
    margin: auto;
    background: #FFFFFF;
    height: 70vh;
    width: 80vw;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .box{
    position:relative;
    margin: 10px auto;
    width:100%;
    height:300px;
    box-sizing:border-box;
    display:table;
  }
  .box .box-row{
    display: table-row;
  }
  .box .box-row .box-cell{
    display: table-cell;
    width:50%;
  }
  .box ul{
    margin:0;
    padding:0;
    border-left: 2px solid orange;
  }
  .box ul li{
    list-style: none;
  }
  .box ul li .item{
    position:relative;
    padding:15px 45px;
    transition : .5s ease;
  }
  .box ul li .item::before{
    content:'';
    position:absolute;
    top: 52px;
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
    top: 52px;
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
    margin:0;
    padding:0;
    min-height: 100vh;
    font-family: 'Courier New', Courier, monospace;
  }
  .box1 h2{
    position: absolute;
    top:40%;
    left:10%;
    transform: trasnlate(-50%,-50%);
    font-size: 6em;
    text-transform: uppercase;
    color: transparent;
  }
  @media screen and (max-width: 1054px) {
    .box1 h2{
      top:38%;
      left:0%;
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
