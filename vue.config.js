module.exports = {
//  eslint错误级别禁用
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115/",
        // pathRewrite: {
        //   "^/api": ""
        // }
        changeOringin: true
      }
    }
  }
}