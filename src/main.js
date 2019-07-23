import Vue from 'vue'
import App from './App.vue'

// firebaseui css
require('../node_modules/firebaseui/dist/firebaseui.js')
require('../node_modules/firebaseui/dist/firebaseui.css')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
