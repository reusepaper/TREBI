<template>
  <div class="postsContents"></div>
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
.memberContents:hover {
  box-shadow: 5px 5px 0 grey;
}
</style>
