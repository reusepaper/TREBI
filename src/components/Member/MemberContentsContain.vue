<template>
  <div class="memberContents">
    <div class="tail"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.memberContents {
  margin-top: 10%;
  box-shadow: 10px 10px 5px grey;
}
.memberContents:hover {
  box-shadow: 5px 5px 0 grey;
}
.memberContents .tail {
  width: 0px;
  height: 0px;
  border-top: 50px solid none;
  border-bottom: 50px solid #f7f7f7;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
  position: relative;
  bottom: 24px;
  left: 65px;
}
</style>
