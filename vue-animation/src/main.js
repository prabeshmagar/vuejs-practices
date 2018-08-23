import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
