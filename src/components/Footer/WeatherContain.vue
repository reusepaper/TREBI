<template>
  <div class="weather-container">
    <div class="weather-info">
      <div class="place">{{place}}</div>
      <div class="temp">{{temp}}°C</div>
    </div>
    <div class="weather-svg">
      <template v-if="weather ==='Clear'">
        <Clear></Clear>
      </template>
      <template v-if="weather ==='Clouds'">
        <Cloudy></Cloudy>
      </template>
      <template v-if="weather ==='Fog'">
        <Cloudy></Cloudy>
      </template>
      <template v-if="weather ==='Rain'">
        <Rainy></Rainy>
      </template>
      <template v-if="weather ==='Mist'">
        <Cloudy></Cloudy>
      </template>
      <template v-if="weather ==='Dust'">
        <Cloudy></Cloudy>
      </template>
      <template v-if="weather ==='Haze'">
        <Cloudy></Cloudy>
      </template>
    </div>
  </div>
</template>

<script>
import Clear from "./WeatherCondition/Clear";
import Cloudy from "./WeatherCondition/Cloudy";
import Rainy from "./WeatherCondition/Rainy";

const APPKEY = "abbc68919e6b6d4296b60cafacd58803";

export default {
  data: () => ({
    weather: "",
    place: "",
    temp: 0
  }),
  components: {
    Clear,
    Cloudy,
    Rainy
  },
  mounted() {
    this.getPosition();
  },
  methods: {
    getPosition: function() {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const log = position.coords.longitude;
        this.getWeather(lat, log);
        this.getLocation(lat, log);
      });
    },
    getWeather: function(lat, log) {
      // open weather map
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&APPID=${APPKEY}`
      )
        .then(response => response.json())
        .then(json => {
          this.weather = json.weather[0].main;
          this.temp = Math.floor(json.main.temp - 273.15);
          /*eslint-disable*/
          console.log(this.weather);
          // console.log(this.temp, this.place, this.weather);
        });
    },
    getLocation: function(lat, log) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${log}&key=AIzaSyC1x8tesUWMdo3VoAH3zpj56H2qw47PF4k`
      )
        .then(response => response.json())
        .then(
          json =>
            (this.place = json.results[0].address_components[3].short_name)
        );
    }
  }
};
</script>

<style>
.weather-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
