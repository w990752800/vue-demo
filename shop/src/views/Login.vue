<template>
  <cube-form :model="model" :schema="schema" @validate="validateHandler" @submit="submitHandler"></cube-form>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true
            },
            messages: {
              required: "请输入正确的用户名"
            },
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: true
            },
            rules: {
              required: true
            },
            messages: {
              required: "请输入正确的密码"
            },
            trigger: "blur"
          },
          {
            type: "button",
            label: "登陆"
          }
        ]
      }
    };
  },
  methods: {
    validateHandler() {
      console.log("校验");
    },
    async submitHandler() {
      event.stopPropagation();
      let res = await this.$http.get("/api/login");
      if (res.data.code === 0) {
        //登陆成功
        this.$store.commit("setToken", res.data.token);
        localStorage.setItem("token", res.data.token);
      } else {
        //登陆失败
      }
    }
  }
};
</script>
