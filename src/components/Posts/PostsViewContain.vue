<template>
  <div class="postsContents">
    <div class="tail"></div>
  </div>
</template>

<script>
export default {
  data() {
    posts: [
      { id: 1, title: "첫글입니당" },
      { id: 2, title: "두번째글입니당" },
      { id: 3, title: "네번째글입니당" },
      { id: 4, title: "다섯번째글입니당" },
      { id: 5, title: "여섯째글입니당" },
      { id: 6, title: "일곱번째글입니당" }
    ];
  }
};
</script>

<style>
.postsContents {
  margin-top: 20px;
  box-shadow: 10px 10px 5px grey;
  background-color: white;
  border-radius: 1%;
}
.postsContents:hover {
  box-shadow: 5px 5px 0 grey;
}
.postsContents .tail{
  width: 0px;height: 0px;
  border-top:50px solid none;
  border-bottom:50px solid white;
  border-right: 50px solid transparent;
  border-left: 50px solid  transparent;
  position: relative;
  bottom: 24px;
  left: 65px;
}
</style>
