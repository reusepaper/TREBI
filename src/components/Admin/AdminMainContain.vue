<template>
  <div>
    <p>메인</p>
    <mainTable></mainTable>
    <PostList></PostList>
  </div>
</template>

<script>
import mainTable from "./MainComponents/AdminMainTable";
import PostList from "./MainComponents/PostComponents/PostList";
export default {
  components: {
    mainTable,
    PostList
  }
};
</script>

<style>
</style>
