<template>
  <div class="CopyrightContain">
    <span>©2019 07 30 TREBI</span>
    <WeatherContain></WeatherContain>
    <span>도용노노</span>
  </div>
</template>

<script>
import WeatherContain from "./WeatherContain";
export default {
  components: {
    WeatherContain
  }
};
</script>

<style>
.CopyrightContain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.CopyrightContain span:first-child {
  margin-left: 30px;
}
.CopyrightContain span:last-child {
  margin-right: 100px;
}

@media (max-width: 369px) {
  .CopyrightContain {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  .CopyrightContain span:first-child {
    margin-left: 0;
  }
  .CopyrightContain span:last-child {
    margin-right: 0;
  }
}
</style>
