import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/tailwind.css"
import Router from '@/router'
import 'alpinejs'
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(VueSweetalert2);  


Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
