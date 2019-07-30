<template>
  <div style="background-color:white;">
    <span class="text-vertical">
      <!-- <span>M</span>
      <span>E</span>
      <span>M</span>
      <span>B</span>
      <span>E</span>
      <span>R</span>-->
      <span data-aos="fade-right" data-aos-delay="50">M</span>
      <span data-aos="fade-right" data-aos-delay="100">E</span>
      <span data-aos="fade-right" data-aos-delay="150">M</span>
      <span data-aos="fade-right" data-aos-delay="200">B</span>
      <span data-aos="fade-right" data-aos-delay="250">E</span>
      <span data-aos="fade-right" data-aos-delay="300">R</span>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text-vertical {
  /* width: 150px;
  height: 150px;
  text-align: center; */
  /* -ms-transform: rotate(270deg); IE 9 */
  /* -webkit-transform: rotate(270deg); Chrome, Safari, Opera */
  /* transform: rotate(270deg);
  position: relative;
  top: 58%;
  left: -37px;
  font-size: 130px;
  font-weight: 900;
  color: rgb(6, 37, 6); */

  writing-mode: tb-rl;
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  font-size: 130px;
  font-weight: 900;
  color: #524f5a;
  background-color: #ededee;
}
</style>
