import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cubeui from "cube-ui";
import Axios from "axios";
Vue.use(cubeui);

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
