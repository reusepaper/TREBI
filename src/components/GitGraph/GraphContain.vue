<template>
  <div class="GraphContain">
    <apexchart type="line" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts
  },
  created() {
    let xDays = [];
    const today = new Date();
    for (let i = 0; i < 10; i++) {
      const date = today.toISOString().split("T");
      xDays.unshift(date[0]);
      today.setDate(today.getDate() - 1);
    }

    this.chartOptions.xaxis.categories = xDays;
  },

  mounted() {
    this.githubId.forEach((id, index) => {
      this.getGithub(id, index);
    });
  },
  props: ["githubId"],
  data() {
    return {
      series: [
        {
          name: this.githubId[0],
          data: []
        },
        {
          name: this.githubId[1],
          data: []
        },
        {
          name: this.githubId[2],
          data: []
        },
        {
          name: this.githubId[3],
          data: []
        },
        {
          name: this.githubId[4],
          data: []
        }
      ],
      chartOptions: {
        chart: {
          shadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          },
          toolbar: {
            show: false
          }
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "smooth"
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left"
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 6
        },
        xaxis: {
          categories: [],
          title: {
            text: "Date"
          }
        },
        yaxis: {
          title: {
            text: "Commit"
          },
          min: 1,
          max: 40
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    };
  },
  methods: {
    getGithub: async function(githubId, index) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = `https://github.com/${githubId}`; // site that doesn’t send Access-Control-*
      let result = await fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .catch(() =>
          console.log("Can’t access " + url + " response. Blocked by browser?")
        );

      const commitCount = [];

      for (let i = 0; i < 10; i++) {
        const dateIndex = result.lastIndexOf("data-count");
        const count = result
          .substring(dateIndex + 11, dateIndex + 15)
          .replace(/"/gi, "")
          .replace(/ /gi, "");
        result = result.substring(0, dateIndex);
      }
      commitCount.unshift(count);
      console.log(commitCount);
      this.series[index].data = commitCount;
    }
  }
};
</script>

<style>
</style>
