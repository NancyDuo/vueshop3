module.exports = {
      lintOnSave:false,
     
      devServer:{
        proxy:'http://localhost:8100'
          // '/api':{
            // target:,
      //       changeOrigin:true,
      //       ws:true,
      //       pathRewrite:{
      //         '^/api':''
      //       }

      //     }
      //   }
      }
    }