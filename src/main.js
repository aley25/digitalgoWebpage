import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/tailwind.css"
import Router from '@/router'
import 'alpinejs'

const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);


Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
