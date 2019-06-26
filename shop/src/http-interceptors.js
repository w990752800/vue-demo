import axios from "axios";
import store from "./store";
import router from "./router";

axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token;
  }
  return config;
});

axios.interceptors.response.use(config => {
  if (config.data.code === 0) {
    //获取token失败
    store.commit("setToken", "");
    localStorage.removeItem("token");
    router.push({
      path: "/login",
      query: {
        redirect: router.currentRoute.path
      }
    });
  }
  return config;
});
