
import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
