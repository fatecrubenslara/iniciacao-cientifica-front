const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
    config.resolve.alias.set('@public', path.resolve(__dirname, 'public'))
    config.resolve.alias.set('@comp', path.resolve(__dirname, 'src/components'))
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/variable.scss";',
      },
    },
  }
}
