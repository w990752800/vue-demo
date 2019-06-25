module.exports = {
  devServer: {
    before(app) {
      app.get("/api/login/", (req, res) => {
        res.json({
          code: 0,
          token: "jilei",
          message: "登陆成功"
        });
      });
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
};
