import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// --------------Aos--------------------
import AOS from 'aos'
import 'aos/dist/aos.css'


// --------------Aos--------------------
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted() {
    AOS.init()
  },
  render: (h) => h(App),
}).$mount("#app");