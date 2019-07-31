<template>
  <div class="team-contents-contain">
    <div class="team-contents">
      <div class="box">
        <ul>
          <li>
            <div class="item">
              <span>1th July 2019</span>
              <h3>첫 만남</h3>
              <p>팀 이름 정하기, 역할 분담 및 목표 설정</p>
            </div>
          </li>
          <li>
            <div class="item">
              <span>1st July 2019 ~ 7st 7th 2019</span>
              <h3>[1주 프로젝트] 반응형 웹 페이지 제작</h3>
              <p>자신을 소개하는 포토폴리오 사이트 제작</p>
            </div>
          </li>
          <li>
            <div class="item">
              <span>9st July 2019 ~ 18st 7th 2019</span>
              <h3>[2주 프로젝트] 외부 API 연동을 통한 기능 추가</h3>
              <p>Git Graph, Firebase, Vuetify 등 다양한 API를 이용하여 프로젝트 진행</p>
            </div>
          </li>
          <li>
            <div class="item">
              <span>22st July 2019 ~ 16st Aug 2019</span>
              <h3>[4주 프로젝트] SW 개발 비서 구현</h3>
              <p>SW 개발 비서 구현</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .team-contents-contain {
    margin-top: 3vh;
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
    margin: 20px auto;
    width:800px;
    height:300px;
    box-sizing:border-box;
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
    animation : animate 2s linear infinite;
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
</style>
