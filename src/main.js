import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(VueFullPage);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
