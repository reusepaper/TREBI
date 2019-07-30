<template>
  <div class="gitGraphPageContainer">
    <GitGraphTitle></GitGraphTitle>
    <div>
      <!-- <GraphContain v-bind:githubId="githubId[0]"></GraphContain> -->
    </div>
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
      githubId: ["13akstjq", "sweetrain096"]
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

