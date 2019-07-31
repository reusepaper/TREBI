<template>
  <div class="GraphContain">
    <div id="githubBody" class="hidden"></div>
    <div id="commitGraph"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getGithub(this.githubId);
  },
  props: ["githubId"],
  methods: {
    getGithub: async githubId => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = `https://github.com/${githubId}`; // site that doesn’t send Access-Control-*
      const result = await fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .catch(() =>
          console.log("Can’t access " + url + " response. Blocked by browser?")
        );
      const Body = document.querySelector("#githubBody");
      const commitGraph = document.querySelector("#commitGraph");
      Body.innerHTML = result;
      const GraphHTML = Body.getElementsByClassName(
        "js-calendar-graph mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas calendar-graph height-full text-center"
      )[0].innerHTML;
      Body.innerHTML = "";
      commitGraph.innerHTML = GraphHTML;
    }
  }
};
</script>

<style>
.hidden {
  /* display: none; */
}
#githubBody {
  /* height: 0px;
  width: 0px; */
}
.GraphContain {
}
</style>
