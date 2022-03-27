const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {    // 定义代理的名称
        changeOrigin: true,  // 是否启动代理
        target: 'http://kumanxuan1.f3322.net:8001/', // 代理的域名　　　　　pathRewrite: {'^/API','/'}  // 如果你的真实的api路径中没有/API这一个路径，把这句加上，如果本来就有/API这一路径的话，这句一定要去掉，要不然会导致域名找不到的
      }
    }
  },
})
