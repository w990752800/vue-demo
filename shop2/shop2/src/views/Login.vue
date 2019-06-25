<template>
  <div class="login">
    <cube-form :model="model" :schema="schema" @validate="validateHandler" @submit="submitHandler"></cube-form>
  </div>
</template>
<script>
export default {
  name: "login",
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
            label: "用户名",
            modelKey: "username",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true
            },
            trigger: "blur",
            messages: {
              required: "请输入用户名"
            }
          },
          {
            type: "input",
            label: "密码",
            modelKey: "password",
            props: {
              placeholder: "请输入密码"
            },
            rules: {
              required: true
            },
            trigger: "blur",
            messages: {
              required: "请输入密码"
            }
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
      let res = await this.$http.get(`/api/login?username=${this.model.username}&password=${this.model.password}`);
      let { code, token, message } = res.data;
      if (code === 0) {
          this.$store.commit('setToken',token);
          localStorage.setItem('token',token);
          let {redirect} = this.$route.query;
          this.$route.push(redirect)
      } else {
        const toast = this.$createToast({
          time: 2000,
          txt: message || "用户名或密码错误"
        });
        toast.show();
      }
    }
  }
};
</script>
