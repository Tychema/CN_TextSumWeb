const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false ,
  // 关闭语法检查
})

module.exports = {
  lintOnSave: false, //是否开启eslint保存检测
  runtimeCompiler: true,
  devServer: {
    open: true, //配置自动启动浏览器
    host: "localhost",
    https: false,
    port: 8001,
    // 配置跨域-请求后端的接口
    proxy: {
      // "/api": {
      //   target: "http://172.20.10.3:80", //对应自己的接口
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: {
      //     "^/api": ""
      //   }
      // }
    }
  }
}


// module.exports = {
//   devServer:{
//     proxy:{
//       '/api':{
//         // 跨域的服务器地址
//         target: 'localhost:8000',
//         // 是否允许跨域
//         changeOrigin: true,
//         // 替换掉请求路径的/sougou为“”
//         pathRewrite:{'^/api': ""}
//       },
//     }
//   }
// }