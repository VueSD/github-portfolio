import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// https://cli.vuejs.org/guide/mode-and-env.html
console.log(process.env.VUE_APP_GITHUB);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
