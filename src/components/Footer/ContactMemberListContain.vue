<template>
  <ul class="memberList">
    <li data-aos="fade-right" class="memberItem">
      <span>이주호</span>
      <span>leeiopd@gmail.com</span>
    </li>
    <li data-aos="fade-right" data-aos-delay="50" class="memberItem">
      <span>유동관</span>
      <span>dkyou7@gmail.com</span>
    </li>
    <li data-aos="fade-right" data-aos-delay="100" class="memberItem">
      <span>임연지</span>
      <span>reusepaper210@gmail.com</span>
    </li>
    <li data-aos="fade-right" data-aos-delay="150" class="memberItem">
      <span>한단비</span>
      <span>rainhan96@gmail.com</span>
    </li>
    <li data-aos="fade-right" data-aos-delay="200" class="memberItem">
      <span>한만섭</span>
      <span>13akstjq@naver.com</span>
    </li>
  </ul>
</template> 

<script>
export default {};
</script>

<style scoped>
.memberList {
  height: 100%;
  display: grid;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 25px;
}

.memberItem {
}
.memberItem span:first-child {
  margin-right: 20px;
}

@media (max-width: 369px) {
  .memberItem {
    font-size: 18px;
  }
}
</style>
