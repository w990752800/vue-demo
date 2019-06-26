module.exports = {
  devServer: {
    before(app) {
      app.get("/api/login/", (req, res) => {
        let { username, password } = req.query;
        if (username === "wnf" && password === "123") {
          res.json({
            code: 0,
            token: "jilei",
            message: "登陆成功"
          });
        } else {
          res.json({
            code: 1,
            message: "登陆失败"
          });
        }
      });
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  }
};
