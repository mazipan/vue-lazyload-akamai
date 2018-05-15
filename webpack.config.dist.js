const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

const config = {
  entry: {
    app: './vue-lazyload-akamai.js'
  },
  output: {
    library: "VueLazyloadAkamai",
    libraryTarget: "umd",
    filename: "vue-lazyload-akamai.min.js",
    umdNamedDefine: true,
  },
  optimization:{
    runtimeChunk: false
  },
  resolveLoader: {
    modules: [setPath('node_modules')]
  },
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development'),
        NODE_ENV: '"'+NODE_ENV+'"'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: "babel-loader"
        }]
      }
    ]
  }
};
module.exports = config;
