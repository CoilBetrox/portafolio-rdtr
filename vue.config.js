// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
  ? 'https://portafolio.rdtsolutions.site/' 
  : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  transpileDependencies: true
})