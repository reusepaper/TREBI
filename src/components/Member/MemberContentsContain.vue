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
  /* box-shadow: 10px 10px 5px grey; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: 0.1s linear;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.memberContents:hover {
  /* box-shadow: 5px 5px 0 grey; */
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
