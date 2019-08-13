import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import device from "vue-device-detector";
// import VueFullPage from "vue-fullpage.js";
import router from "./router";

import "./registerServiceWorker";

// firebaseui css
require("../node_modules/firebaseui/dist/firebaseui.js");
require("../node_modules/firebaseui/dist/firebaseui.css");
Vue.config.productionTip = false;
Vue.use(device);
// Vue.use(VueFullPage);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
