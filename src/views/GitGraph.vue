<template>
  <div class="gitGraphPageContainer">
    <GitGraphTitle></GitGraphTitle>
    <GraphContain v-bind:githubId="githubId"></GraphContain>
  </div>
</template>
<script>
import GitGraphTitle from "../components/GitGraph/GitGraphTitle";
import GraphContain from "../components/GitGraph/GraphContain";

export default {
  components: {
    GitGraphTitle,
    GraphContain
  },
  data() {
    return {
      githubId: ["13akstjq", "leeiopd", "sweetrain096", "yeonjilim", "dkyou7"]
    };
  }
};
</script>

<style>
.gitGraphPageContainer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 8fr;
}
</style>

