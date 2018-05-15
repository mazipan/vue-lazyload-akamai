const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

const buildingForLocal = () => {
  return (NODE_ENV === 'development');
};

const setPublicPath = () => {
  let env = NODE_ENV;
  if (env === 'production') {
    return '/vue-lazyload-akamai/';
  } else {
    return '/';
  }
};

const extractHTML = new HtmlWebpackPlugin({
  title: 'History Search',
  // filename: 'index.html',
  inject: true,
  template: setPath('/demo/index.ejs'),
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true
  },
  environment: process.env.NODE_ENV,
  imgPath: (!buildingForLocal()) ? 'assets' : 'demo/assets'
});


const config = {
  entry: {
    app: path.join(setPath('demo'), 'demo.js')
  },
  output: {
    path: buildingForLocal() ? path.resolve(__dirname) : setPath('dist-demo'),
    publicPath: setPublicPath(),
    filename: buildingForLocal() ? 'js/[name].js' : 'js/[name].[hash].js'
  },
  optimization:{
    runtimeChunk: false,
    splitChunks: {
      chunks: "all", //Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    }
  },
  resolveLoader: {
    modules: [setPath('node_modules')]
  },
  mode: buildingForLocal() ? 'development' : 'production',
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  plugins: [
    extractHTML,
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development' || NODE_ENV === 'staging'),
        NODE_ENV: '"'+NODE_ENV+'"'
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(setPath('assets')),
        to: path.join(setPath('dist-demo'), 'assets')
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
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
