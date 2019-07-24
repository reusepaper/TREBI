import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueFullPage from 'vue-fullpage.js'

// firebaseui css
require('../node_modules/firebaseui/dist/firebaseui.js')
require('../node_modules/firebaseui/dist/firebaseui.css')
Vue.config.productionTip = false
Vue.use(VueFullPage);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
