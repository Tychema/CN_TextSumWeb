const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false ,
  // 关闭语法检查
})
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