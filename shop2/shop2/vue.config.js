module.exports = {
  devServer: {
    before(app) {
      app.get("/api/login", (req, res) => {
        if(req.param('username') === 'wnf' && req.param('password') === '123'){ 
          res.json({  
            code: 0,
            token: 'jilei'
          });
        }else{  
          res.json({  
            code: 1,
            message: '用户名或密码错误'
          })
        }
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
}
