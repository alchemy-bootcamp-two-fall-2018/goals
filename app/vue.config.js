/* eslint-env node */
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins:
            [
              require('autoprefixer')(),
            ],
      } 
    }
  },
  devServer: {
    proxy: 'http://localhost:3000'
  }
};