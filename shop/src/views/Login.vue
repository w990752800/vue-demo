<template>
  <div class="login">
    <cube-form :model="model" :schema="schema" @validate="validateHandler" @submit="submitHandler"></cube-form>
  </div>
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
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入秘密",
              type: "password",
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登陆"
          }
        ]
      }
    };
  },
  methods: {
    validateHandler() {},
    async submitHandler() {
      event.preventDefault();
      let res = await this.$http.get("/api/login", {
        username: this.model.username,
        password: this.model.password
      });
      let { code, token, message } = res.data;
      if (code === 0) {
        //登陆成功
        localStorage.setItem("token", token);
        this.$store.commit("setToken", token);
        let { redirect } = this.$route.query || "/";
        this.$router.push(redirect);
      } else {
        //登陆失败
        const toast = this.$createToast({
          time: 1000,
          txt: message || "登陆失败"
        });
        toast.show();
      }
    }
  }
};
</script>
