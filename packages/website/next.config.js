const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withCSS({
    cssModules: true,
    webpack(config) {
        config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        });
        return config;
   }
})


module.exports = withImages({
  webpack(config, options) {
    return config
  }
})